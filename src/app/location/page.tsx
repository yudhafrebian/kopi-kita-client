import AddressSection from "@/view/location/Address";
import ExteriorSection from "@/view/location/Exterior";
import HeaderSection from "@/view/location/Header";
import LocationHelperSection from "@/view/location/LocationHelper";
import MapSection from "@/view/location/Map";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lokasi | Kopi Kita Cafe",
  description: "Temukan Kopi Kita Cafe di daerah Anda",
}

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