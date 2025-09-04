import { Landmark, TramFront } from "lucide-react";

const LocationHelperSection = () => {
  return (
    <div className="px-64 py-20 font-poppins">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-[#6F4E37]">Petunjuk Arah</h2>
        <p className="text-[#374151] text-lg">Mudah dijangkau dari berbagai lokasi strategis</p>
      </div>
      <div className="flex flex-col md:flex-row gap-8 mt-12 w-full">
        <div className="bg-[#FFF6E5] p-8 rounded-2xl w-1/2">
            <div className="flex items-center gap-2 text-[#6F4E37] font-bold">
                <TramFront />
                <h3 className="text-xl">Transportasi Umum</h3>
            </div>
            <ul className="ml-6 mt-4 text-[#374151]" style={{ listStyleType: "disc" }}>
                <li>5 menit jalan kaki dari Stasiun MRT Bundaran HI</li>
                <li>10 menit dari Halte TransJakarta Dukuh Atas</li>
                <li>Akses mudah dari Terminal Blok M</li>
            </ul>
        </div>
        <div className="bg-[#FFF6E5] p-8 rounded-2xl w-1/2">
            <div className="flex items-center gap-2 text-[#6F4E37] font-bold">
                <Landmark />
                <h3 className="text-xl">Landmark Terdekat</h3>
            </div>
            <ul className="ml-6 mt-4 text-[#374151]" style={{ listStyleType: "disc" }}>
                <li>Seberang Plaza Indonesia</li>
                <li>2 blok dari Grand Indonesia</li>
                <li>Dekat dengan Hotel Mandarin Oriental</li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default LocationHelperSection;
