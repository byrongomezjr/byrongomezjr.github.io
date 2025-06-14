/* eslint-disable react/no-unescaped-entities */
import type { GetStaticProps } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import SimpleBackground3D from '../components/SimpleBackground3D';
import EnhancedVisualEffects from '../components/EnhancedVisualEffects';
//import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import { PageInfo, Skill, Project, Social } from '../typings';
import { fetchPageInfo } from '../utils/fetchPageInfo';
import { fetchSkills } from '../utils/fetchSkills';
import { fetchProjects } from '../utils/fetchProjects';
import { fetchSocials } from '../utils/fetchSocials';
import Experience from '../components/Experience';
import { fetchExperiences } from '../utils/fetchExperiences';
import { useCallback, useEffect, useState } from 'react';
import { BiUpArrowAlt } from 'react-icons/bi';


type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  projects: Project[];
  skills: Skill[];
  socials: Social[];
};

const Home = ({ pageInfo, experiences, projects, skills, socials }: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = useCallback((e: Event) => {
    const target = e.target as HTMLElement;
    if (target.scrollTop > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, []);

  useEffect(() => {
    const scrollContainer = document.querySelector('.scroll-container');
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, [handleScroll]);

  const scrollToTop = () => {
    const scrollContainer = document.querySelector('.scroll-container');
    if (scrollContainer) {
      scrollContainer.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className='scroll-container bg-white dark:bg-[#333333] text-black dark:text-white h-screen 
      overflow-y-scroll overflow-x-hidden z-0
      scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#2E7D32]/20 dark:scrollbar-thumb-[#84FF57]/20 transition-colors duration-300'>
      
      {/* Global 3D Background */}
      <SimpleBackground3D />
      
      {/* Enhanced Visual Effects */}
      <EnhancedVisualEffects />
      
      <Head>
        <title>Byron Gomez Jr</title>
        <meta name="description" content="Byron Gomez's Portfolio" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👨🏽‍💻</text></svg>" type="image/svg+xml" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👨🏽‍💻</text></svg>" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-0 sm:bottom-0 right-0 sm:right-0 z-[9999] p-2 rounded-full text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors duration-200"
          aria-label="Scroll to top"
        >
          <BiUpArrowAlt size={32} />
        </button>
      )}

      <Header socials={socials} />
      
      <section id='hero' className="relative z-20">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id='experience' className="relative z-20">
        <Experience experiences={experiences} />
      </section>

      <section id='projects' className="relative z-20">
        <Projects projects={projects} />
      </section>

      <section id='skills' className="relative z-20">
        <Skills skills={skills} />
      </section>

      <section id='footer' className="relative z-20">
        <Footer />
      </section>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    }
  };
};
