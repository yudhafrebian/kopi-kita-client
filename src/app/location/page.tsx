import AddressSection from "@/view/location/Address";
import ExteriorSection from "@/view/location/Exterior";
import HeaderSection from "@/view/location/Header";
import LocationHelperSection from "@/view/location/LocationHelper";
import MapSection from "@/view/location/Map";

export default function LocationPage() {
    return (
        <main>
            <HeaderSection />
            <MapSection />
            <AddressSection />
            <LocationHelperSection />
            <ExteriorSection />
        </main>
    );
}