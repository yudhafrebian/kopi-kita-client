import Image from "next/image";

const ShortHistorySection = () => {
  return (
    <div className="px-8 md:px-20 lg:px-44 py-12 md:py-24 bg-[#FFF6E5]">
      <div className="flex flex-col justify-between items-center gap-4">
        <h1 className="font-playfair text-[#6F4E37] text-3xl md:text-6xl font-bold">
          Tentang Kami
        </h1>
        <p className="font-poppins text-[#8B6F47] text-sm md:text-lg lg:text-2xl lg:w-[45%] text-center">
          Perjalanan kami dalam menciptakan pengalaman kopi terbaik untuk setiap
          jiwa
        </p>
      </div>
      <div className="divider md:my-8 lg:my-16"></div>
      <div className="flex flex-col-reverse lg:flex-row justify-center items-center md:gap-6 lg:gap-12">
        <div className="flex flex-col gap-4 lg:w-[40%]">
          <h2 className="font-playfair text-[#6F4E37] text-xl md:text-2xl lg:text-4xl font-bold">Sejarah Singkat</h2>
          <p className="font-poppins text-[#374151]">
            <strong className="text-[#6F4E37]">Kopi Kita</strong> lahir pada tahun 2018 dari kecintaan mendalam terhadap
            kopi berkualitas tinggi dan keinginan untuk menciptakan ruang
            komunitas yang hangat di tengah hiruk - pikuk kota.
          </p>
          <p className="font-poppins text-[#374151]">
            Berawal dari sebuah warung kecil di sudut jalan, kami bertekad untuk
            menghadirkan cita rasa kopi autentik Indonesia yang dipadukan dengan
            teknik brewing modern. Setiap cangkir yang kami sajikan adalah hasil
            dari perjalanan panjang mencari biji kopi terbaik dari berbagai
            daerah di Nusantara.
          </p>
          <p className="font-poppins text-[#374151]">
            Kini, setelah lebih dari 5 tahun beroperasi, Kopi Kita telah menjadi
            rumah kedua bagi para pecinta kopi yang mencari tidak hanya rasa,
            tetapi juga pengalaman yang berkesan.
          </p>
        </div>
        <div className="relative w-[300px] md:w-[520px] h-[200px] md:h-[384px]">
          <Image src={"/assets/history.png"} alt="short-history" fill />
        </div>
      </div>
    </div>
  );
};

export default ShortHistorySection;
