import { Component, createSignal } from "solid-js";
import ScrollButton from "./components/ScrollButton";
import ProfileSection from "./components/ProfileSection";
import { profiles } from "./data/profiles";
import { Header } from "./components/Header";
import { IntroductionSection } from "./components/IntroductionSection";
import { Timeline } from "./components/Timeline";

const App: Component = () => {
  const [count, setCount] = createSignal(0);

  return (
    <>
      <ScrollButton />
      <Header />
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
    </>
  );
};

export default App;
