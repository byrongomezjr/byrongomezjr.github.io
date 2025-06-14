import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { Float, Environment, OrbitControls, useTexture } from '@react-three/drei';
import * as THREE from 'three';

// Simple fallback model for debugging
function FallbackModel() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.3; // Faster rotation
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  console.log('FallbackModel rendering...'); // Debug log

  return (
    <Float speed={.5} rotationIntensity={1} floatIntensity={0.5}>
      <mesh ref={meshRef} scale={[3, 3, 3]}> {/* Larger scale */}
        <torusGeometry args={[1, 0.3, 16, 32]} />
        <meshStandardMaterial
          color="#A8B6A3FF"
          emissive="#A8B6A3FF"
          emissiveIntensity={0.3} // More glow
          roughness={0.3}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
}

// Simple OBJ model loader
function SimpleOBJModel({ modelPath }: { modelPath: string }) {
  const meshRef = useRef<THREE.Group>(null);
  
  // Always call hooks at the top level
  const obj = useLoader(OBJLoader, modelPath);
  
  console.log('OBJ model loaded:', obj); // Debug log
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.3; // Slightly faster
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  React.useEffect(() => {
    if (obj) {
      console.log('Applying materials to OBJ model...'); // Debug log
      obj.traverse((child: any) => {
        if (child instanceof THREE.Mesh) {
          console.log('Found mesh in OBJ, applying material...'); // Debug log
          child.material = new THREE.MeshStandardMaterial({
            color: '#ffffff', // Changed to white to see original textures better
            emissive: '#A8B6A3FF',
            emissiveIntensity: 0.1,
            roughness: 0.3,
            metalness: 0.7,
          });
        }
      });
    }
  }, [obj]);

  return (
    <Float speed={.5} rotationIntensity={1} floatIntensity={0.5}>
      <primitive
        ref={meshRef}
        object={obj}
        scale={[3, 3, 3]} // Larger scale for better visibility
        position={[0, 0, 0]}
      />
    </Float>
  );
}

// Simplified particles
function SimpleParticles() {
  const particlesRef = useRef<THREE.Points>(null);
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  const particleCount = 50;
  const positions = new Float32Array(particleCount * 3);
  
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 15;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 15;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 15;
  }

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#A8B6A3FF"
        transparent
        opacity={0.6}
        sizeAttenuation={true}
      />
    </points>
  );
}

function SimpleBackground3D() {
  console.log('SimpleBackground3D rendering...'); // Debug log
  
  return (
    <div 
      className="fixed inset-0 pointer-events-none" 
      style={{ 
        zIndex: 0, // Changed from -1 to 0 to make it more visible
        background: 'transparent'
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 6], fov: 75 }} // Moved camera closer and wider FOV
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
        onCreated={() => console.log('Canvas created successfully')} // Debug log
      >
        {/* Enhanced Lighting for better visibility */}
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <pointLight position={[-10, -10, -5]} color="#A8B6A3FF" intensity={1} />
        <spotLight position={[0, 10, 0]} intensity={0.8} />
        
        {/* Environment for reflections */}
        <Environment preset="night" />
        
        {/* 3D Content */}
        <Suspense fallback={<FallbackModel />}>
          <SimpleOBJModel modelPath="/fractured_web/fractured_web.obj" />
          <SimpleParticles />
        </Suspense>
        
        {/* Controls */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          autoRotate={true}
          autoRotateSpeed={1} // Faster rotation for better visibility
        />
      </Canvas>
    </div>
  );
}

export default SimpleBackground3D;
