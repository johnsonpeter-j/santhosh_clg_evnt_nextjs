import Accomodation from "@/components/accomodation/Accomodation";
import TravelToTSM from "@/components/accomodation/Venues";
import ListOfHostel from "@/components/accomodation/ListOfHotel";
import Madurai from "@/components/home/maduraiPlaces";

export default function Registration() {
    return (
        <div className="mt-16 lg:mt-[72px] xl:mt-[72px] 2xl:mt-[72px] w-full">
            <Accomodation />
            <TravelToTSM />
            <ListOfHostel />
            <Madurai/>
        </div>
    );
}
