const AboutSection = () => {
  return (
    <div className="p-20">
      <div className="flex flex-col justify-between items-center">
        <div className="flex flex-col text-center font-playfair text-[#6F4E37] text-5xl font-bold">
          <h1>Tentang</h1>
          <h1>Kami</h1>
          <div className="divider divider-[#6F4E37]"></div>
        </div>
        <p className="text-lg font-poppins text-[#6F4E37] mt-4 w-1/2 text-center">
          Kopi Kita lahir dari kecintaan mendalam terhadap kopi berkualitas dan
          keinginan untuk menciptakan ruang yang hangat bagi komunitas. Kami
          percaya bahwa secangkir kopi yang sempurna dapat menyatukan orang,
          menciptakan percakapan bermakna, dan memberikan momen kebahagiaan di
          tengah kesibukan hidup.
        </p>
        <p className="text-lg font-poppins text-[#6F4E37] mt-8 w-1/2 text-center">
          Setiap biji kopi yang kami pilih berasal dari petani lokal terbaik,
          disangrai dengan penuh perhatian untuk menghadirkan cita rasa autentik
          yang tak terlupakan.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
