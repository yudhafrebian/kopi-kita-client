import { Clock, MapPin, Phone } from "lucide-react";

const LocationSection = () => {
  return (
    <div className="py-20 px-28 bg-[#6F4E37] flex md:justify-between 2xl:justify-around">
      <div>
        <h2 className="text-5xl font-bold font-playfair text-white">
          Kunjungi Kami
        </h2>
        <div className="flex gap-4 mt-8 font-poppins">
          <MapPin className="text-white" />
          <div className="text-white">
            <p className="font-semibold text-lg">Alamat</p>
            <p className="w-[55%]">
              Jl. Sudirman No. 123 Jakarta Pusat, DKI Jakarta 10220
            </p>
          </div>
        </div>
        <div className="flex gap-4 mt-8 font-poppins">
          <Clock className="text-white" />
          <div className="text-white">
            <p className="font-semibold text-lg">Jam Buka</p>
            <p>Senin - Jumat: 07:00 - 22:00</p>
            <p>Sabtu - Minggu: 08:00 - 23:00</p>
          </div>
        </div>
        <div className="flex gap-4 mt-8 font-poppins">
          <Phone className="text-white" />
          <div className="text-white">
            <p className="font-semibold text-lg">Kontak</p>
            <p>+62 21 1234 5678</p>
          </div>
        </div>
      </div>
      <div>
        <iframe
        className="rounded-2xl"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3466571569907!2d106.80886034949191!3d-6.217934477755641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f154b5d3a033%3A0xf558eec6b9cfe528!2sJl.%20Jend.%20Sudirman%20No.123%2C%20RT.14%2FRW.1%2C%20Bend.%20Hilir%2C%20Kecamatan%20Tanah%20Abang%2C%20Kota%20Jakarta%20Pusat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2010210!5e0!3m2!1sid!2sid!4v1754901028399!5m2!1sid!2sid"
          width="600"
          height="320"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default LocationSection;
