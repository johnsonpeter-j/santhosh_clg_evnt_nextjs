import AboutConfernce from "@/components/home/AboutConference";
import AboutTSM from "@/components/home/AboutTSM";
import Collaborators from "@/components/home/collabrators";
import HeroSlider from "@/components/home/HeroSlide";
import OutreachPartner from "@/components/home/OutreachPartner";
import PublicationPartner from "@/components/home/PublicationPartner";

export default function Home() {
  return (
    <div className="w-full">
      <HeroSlider />
      <AboutConfernce />
      <AboutTSM />
      <Collaborators />
      <PublicationPartner />
      <OutreachPartner />
    </div>
  );
}
