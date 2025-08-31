import AboutConfernce from "@/components/home/AboutConference";
import AboutTSM from "@/components/home/AboutTSM";
import Collaborators from "@/components/home/collabrators";
import HeroSlider from "@/components/home/HeroSlide";
import Madurai from "@/components/home/maduraiPlaces";
import SDGLinks from "@/components/home/SDGLinks";

export default function Home() {
  return (
    <div className="mt-16 lg:mt-[72px] xl:mt-[72px] 2xl:mt-[72px] w-full">

      <HeroSlider />

      <AboutConfernce />

      <AboutTSM />

      <Collaborators />

      <SDGLinks />

      <Madurai />

    </div>
  );
}
