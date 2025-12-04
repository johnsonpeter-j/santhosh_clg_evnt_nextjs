import Accomodation from "@/components/accomodation/Accomodation";
import TravelToTSM from "@/components/accomodation/Venues";
import ListOfHostel from "@/components/accomodation/ListOfHotel";
import Madurai from "@/components/home/maduraiPlaces";
import Connectivity from "@/components/accomodation/Connectivity";

export default function Registration() {
    return (
        <div className="w-full">
            <Connectivity/>
            <Accomodation />
            <TravelToTSM />
            <ListOfHostel />
            <Madurai/>
        </div>
    );
}
