import Image from "next/image";
import './page.scss'
import EntryComponent from "./components/EntryComponent";
import AboutComponent from "./components/AboutComponent";
import CourseOverviewComponent from "./components/CourseOverviewComponent";
import Footer from "./components/Footer";
// In your Home component, use dynamic import
import dynamic from 'next/dynamic';

// Dynamically import Link from react-scroll to prevent SSR issues
const Link = dynamic(() => import('react-scroll').then((mod) => mod.Link), { ssr: false });

export default function Home() {
  return (
    <div className="home-container">
        <EntryComponent/>
        <AboutComponent/>
        <CourseOverviewComponent/>
        <Footer/>
    </div>
  );
}
