import Head from 'next/head';
import Image from 'next/image';
import BlogSection from '../components/BlogSection';
import ContactSection from '../components/ContactSection';
import ExperienceSection from '../components/ExperienceSection';
import ExperimentSection from '../components/ExperimentSection';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import ShowCaseSection from '../components/ShowCaseSection';
import SocialMedia from '../components/SocialMedia';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <HeroSection />
      <ExperienceSection />
      <ShowCaseSection />
      <BlogSection />
      <ExperimentSection />
      <ContactSection />
      <SocialMedia />
    </div>
  );
}
