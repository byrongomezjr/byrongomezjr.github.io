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
    <div className='scroll-container bg-white dark:bg-[#333333] text-black dark:text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#84FF57]/20 transition-colors duration-300'>
      <Head>
        <title>Byron Gomez</title>
        <meta name='description' content='' />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👨🏽‍💻</text></svg>"
        />
      </Head>

      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 sm:bottom-2 right-2 sm:right-2 z-[9999] p-2 rounded-full text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors duration-200"
          aria-label="Scroll to top"
        >
          <BiUpArrowAlt size={32} />
        </button>
      )}

      <Header socials={socials} />
      
      <section id='hero' className='snap-start'>
        <Hero pageInfo={pageInfo} />
      </section>

      <section id='experience' className='snap-start'>
        <Experience experiences={experiences} />
      </section>

      <section id='projects' className='snap-start'>
        <Projects projects={projects} />
      </section>

      <section id='skills' className='snap-start'>
        <Skills skills={skills} />
      </section>

      <section id='footer' className='snap-start'>
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
