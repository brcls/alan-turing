import { Component } from "solid-js";
import ScrollButton from "./components/ScrollButton";
import ProfileSection from "./components/ProfileSection";
import { profiles } from "./data/profiles";
import { Header } from "./components/Header";
import { IntroductionSection } from "./components/IntroductionSection";
import { Timeline } from "./components/Timeline";
import { Concepts } from "./components/Concepts";
import { Applications } from "./components/Applications";
import { EducationalResources } from "./components/EducationalResources";
import { Legacy } from "./components/Legacy";

const App: Component = () => {
  let mainDiv: HTMLDivElement | null = null;

  return (
    <>
      <div
        ref={(el) => (mainDiv = el)}
        class="z-0 h-screen flex-grow snap-y snap-mandatory overflow-y-scroll"
      >
        <IntroductionSection />
        <div>
          {profiles.map((profile) => (
            <ProfileSection
              image={profile.image}
              alt={profile.alt}
              title={profile.title}
              life={profile.life}
              contributions={profile.contributions}
              legacy={profile.legacy}
            />
          ))}
        </div>
        <Timeline />
        <Concepts />
        <Applications />
        <EducationalResources />
        <Legacy />
      </div>
      <Header mainRef={mainDiv} />
      <ScrollButton mainRef={mainDiv} />
    </>
  );
};

export default App;
