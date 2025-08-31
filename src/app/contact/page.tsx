import FAQs from "@/components/contact/FAQs";
import Feedback from "@/components/contact/Feedback";
import Venue from "@/components/contact/Venue";

export default function Guidelines() {
    return (
        <div className="mt-16 lg:mt-[72px] xl:mt-[72px] 2xl:mt-[72px] w-full">
            <Venue />

            <Feedback />

            <FAQs />
        </div>
    );
}
