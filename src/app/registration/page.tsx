import PaymentInfo from "@/components/registration/PaymentInfo";
import RegistrationDetails from "@/components/registration/RegistrationDetails";

export default function Registration() {
    return (
        <div className="mt-16 lg:mt-[72px] xl:mt-[72px] 2xl:mt-[72px] w-full">
            <RegistrationDetails />
            <PaymentInfo />
        </div>
    );
}
