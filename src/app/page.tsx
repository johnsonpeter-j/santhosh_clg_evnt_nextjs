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
    <div className="max-w-screen max-h-screen min-h-screen bg-gray-50 text-gray-900">
      <Navbar />

      <main className="mt-16 w-full lg:mt-18">
      <Marquee />
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
