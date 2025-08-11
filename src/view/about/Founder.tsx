import Image from "next/image";

const FounderSection = () => {
  return (
    <div className="px-44 py-24 bg-[#FFF6E5]">
      <div className="flex flex-col justify-between items-center">
        <h1 className="font-playfair text-[#6F4E37] text-4xl font-bold">
          Meet the Founder
        </h1>
        <div className="divider mx-auto w-1/5"></div>
        <p className="font-poppins text-[#8B6F47]">Sang pencipta Kopi Kita</p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-16">
        <div className="avatar">
          <div className="w-96 rounded-lg relative">
            <Image src="/assets/founder.jpg" alt="founder" fill />
          </div>
        </div>
        <div className="flex flex-col gap-4 w-1/2 ">
          <div className="font-poppins text-[#374151] flex flex-col gap-4 italic">
            <p>
              "Di balik setiap cangkir kopi yang tersaji di Kopi Kita, ada
              cerita dan dedikasi dari sang pendiri, Yudha Frebian. Berawal dari
              kecintaan sederhana pada aroma kopi di pagi hari, Budi memutuskan
              untuk menjadikan passion ini sebagai perjalanan hidup.
            </p>
            <p>
              Dengan pengalaman bertahun-tahun menjelajahi kebun kopi nusantara,
              ia memilih biji kopi terbaik dari petani lokal dan mengolahnya
              dengan penuh rasa. Bagi Budi, kopi bukan sekadar minuman — tapi
              sebuah pengalaman, sebuah momen untuk berbagi, dan bahasa
              universal yang menghubungkan kita semua.
            </p>
            <p>
              Kopi Kita hadir untuk menghadirkan kehangatan dan kualitas di
              setiap tegukan, persis seperti visi yang dipegang teguh sang
              founder: “Menyeduh kebahagiaan, satu cangkir pada satu waktu."
            </p>
          </div>
          <div>
            <h1 className="font-poppins text-[#6F4E37] text-2xl font-bold">
              Yudha Frebian
            </h1>
            <p className="font-poppins text-[#8B6F47]">CEO & Founder</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderSection;
