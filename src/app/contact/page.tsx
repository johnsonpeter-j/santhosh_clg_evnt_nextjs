import InternalBoard from "@/components/committee/InternalComittee";
import FAQs from "@/components/contact/FAQs";
import Feedback from "@/components/contact/Feedback";

export default function Guidelines() {
  return (
    <div className="w-full">
      <InternalBoard />
      <Feedback />

      <FAQs />
    </div>
  );
}
