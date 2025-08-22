import AboutSection from "@/components/aboutSection";
import ConferenceTracks from "@/components/ConferenceTracks";
import FAQs from "@/components/FAQs";
import Feedback from "@/components/Feedback";
import Footer from "@/components/footer";
import Hero from "@/components/heroSection";
import KeyDates from "@/components/KeyDates";
import KeyRequirements from "@/components/KeyRequirements";
import Marquee from "@/components/marquee";
import Navbar from "@/components/navbar";
import PublicationAvenues from "@/components/PublicationAvenues";
import ReviewProcess from "@/components/reviewProcess";
import SubmissionProcedure from "@/components/SubmissionProcedure";
import Updates from "@/components/UpdatesSection";
import WhoCanParticipate from "@/components/WhoCanParticipate";

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <Navbar />
      <Marquee />

      <main className="mt-4 max-w-6xl mx-auto px-4">
        <Hero />

        <AboutSection />

        <WhoCanParticipate />

        <ConferenceTracks />

        <PublicationAvenues />

        <SubmissionProcedure />

        <ReviewProcess />

        <KeyDates />

        <KeyRequirements />

        <Updates />

        <Feedback />

        <FAQs />

      </main>

      <Footer />
    </div>
  );
}
