import Image from "next/image";
import './page.scss'
import EntryComponent from "./components/EntryComponent";
import AboutComponent from "./components/AboutComponent";
import CourseOverviewComponent from "./components/CourseOverviewComponent";

export default function Home() {
  return (
    <div className="home-container">
        {/* EntryComponent         */}
        <EntryComponent/>
        <AboutComponent/>
        <CourseOverviewComponent    />
    </div>
  );
}
