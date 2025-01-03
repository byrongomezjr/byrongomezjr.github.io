/* eslint-disable react/no-unescaped-entities */
import type { GetStaticProps } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
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


type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  projects: Project[];
  skills: Skill[];
  socials: Social[];
};

const Home = ({ pageInfo, experiences, projects, skills, socials }: Props) => {
  return (
    <div className='bg-[#333333] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#84FF57]/20'>
      <Head>
        <title>Byron Gomez</title>
        <meta name='description' content='' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/* @ts-ignore -- Header type error but works in production */}
      <Header socials={socials} />

      
      <section id='hero' className='snap-start'>
        {/* @ts-ignore -- Hero type error but works in production */}
        <Hero pageInfo={pageInfo} />
      </section>

      
      <section id='experience' className='snap-start'>
        {/* @ts-ignore -- Experience type error but works in production */}
        <Experience experiences={experiences} />
      </section>

      
      <section id='projects' className='snap-start'>
        {/* @ts-ignore -- Projects type error but works in production */}
        <Projects projects={projects} />
      </section>

      
      <section id='skills' className='snap-start'>
        {/* @ts-ignore -- Skills type error but works in production */}
        <Skills skills={skills} />
      </section>

      
      <section id='footer' className='snap-start'>
        {/* @ts-ignore -- Footer type error but works in production */}
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
