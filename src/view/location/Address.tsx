import { Clock, ExternalLink, MapPin } from "lucide-react";
import Link from "next/link";

const AddressSection = () => {
  return (
    <div className="px-28 py-20 bg-[#FFF6E5] font-poppins">
      <div className="flex flex-col md:flex-row gap-12 w-full">
        <div className=" bg-white p-8 shadow rounded-2xl w-1/2">
          <div className="flex gap-4 items-center text-[#6F4E37]">
            <MapPin />
            <h2 className="font-bold text-2xl">Alamat Lengkap</h2>
          </div>
          <div className="mt-4 flex flex-col gap-4">
            <h3 className="text-[#374151] text-lg font-medium">
              Kopi Kita Café
            </h3>
            <p>Jl. Sudirman No. 123, Blok A-15</p>
            <p>Jakarta Pusat, DKI Jakarta 10220</p>
            <p>Indonesia</p>
          </div>
            <Link href={"https://maps.app.goo.gl/kX2jKbyXwMejEhb5A"} target="_blank" className="btn mt-4 bg-[#6F4E37] text-white rounded-lg"><ExternalLink />Buka di Google Maps</Link>
        </div>
        <div className=" bg-white p-8 shadow rounded-2xl w-1/2">
          <div className="flex gap-4 items-center text-[#6F4E37]">
            <Clock />
            <h2 className="font-bold text-2xl">Jam Operasional</h2>
          </div>
          <div className="mt-4 flex flex-col">
            <div className="flex justify-between">
                <p className="text-[#374151] font-medium">Senin</p>
                <p className="text-[#6F4E37] font-semibold">07:00 - 22:00</p>
            </div>
            <div className="divider my-0"></div>
            <div className="flex justify-between">
                <p className="text-[#374151] font-medium">Selasa</p>
                <p className="text-[#6F4E37] font-semibold">07:00 - 22:00</p>
            </div>
            <div className="divider my-0"></div>
            <div className="flex justify-between">
                <p className="text-[#374151] font-medium">Rabu</p>
                <p className="text-[#6F4E37] font-semibold">07:00 - 22:00</p>
            </div>
            <div className="divider my-0"></div>
            <div className="flex justify-between">
                <p className="text-[#374151] font-medium">Kamis</p>
                <p className="text-[#6F4E37] font-semibold">07:00 - 22:00</p>
            </div>
            <div className="divider my-0"></div>
            <div className="flex justify-between">
                <p className="text-[#374151] font-medium">Jumat</p>
                <p className="text-[#6F4E37] font-semibold">07:00 - 22:00</p>
            </div>
            <div className="divider my-0"></div>
            <div className="flex justify-between">
                <p className="text-[#374151] font-medium">Sabtu</p>
                <p className="text-[#6F4E37] font-semibold">08:00 - 23:00</p>
            </div>
            <div className="divider my-0"></div>
            <div className="flex justify-between">
                <p className="text-[#374151] font-medium">Minggu</p>
                <p className="text-[#6F4E37] font-semibold">08:00 - 23:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressSection;
