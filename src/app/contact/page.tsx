import InternalBoard from "@/components/committee/InternalComittee";
import FAQs from "@/components/contact/FAQs";
import Feedback from "@/components/contact/Feedback";

export default function Guidelines() {
  return (
    <div className="mt-16 lg:mt-[72px] xl:mt-[72px] 2xl:mt-[72px] w-full">
      <InternalBoard />
      <Feedback />

      <FAQs />
    </div>
  );
}
