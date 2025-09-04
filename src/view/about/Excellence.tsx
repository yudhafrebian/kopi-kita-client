import { FlaskConical, House, Star } from "lucide-react";

const ExcellenceSection = () => {
  const excellence = [
    {
      icon: Star,
      title: "Biji Kopi Pilihan",
      description:
        "Kami bekerja sama langsung dengan petani kopi terpilih dari Aceh, Toraja, dan Bali untuk menghadirkan biji kopi berkualitas premium dengan karakteristik rasa yang unik.",
    },
    {
      icon: FlaskConical,
      title: "Teknik Seduh Khas",
      description:
        "Kombinasi sempurna antara metode tradisional Indonesia dan teknik brewing modern seperti V60, Chemex, dan Cold Brew untuk menghasilkan cita rasa yang optimal.",
    },
    {
      icon: House,
      title: "Suasana Nyaman",
      description:
        "Interior yang didesain dengan perpaduan modern dan tradisional, dilengkapi Wi-Fi cepat, kursi sofa yang nyaman dan area kerja yang kondusif dan nyaman untuk berbagai aktivitas.",
    },
  ];
  return (
    <div className="px-44 py-24">
      <div className="flex flex-col justify-between items-center">
        <h1 className="font-playfair text-[#6F4E37] text-4xl font-bold">
          Keunggulan Kami
        </h1>
        <div className="divider mx-auto w-1/5"></div>
        <p className="font-poppins text-[#8B6F47]">
          Tiga hal yang membuat Kopi Kita istimewa dan berbeda
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-16">
        {excellence.map((value, index) => (
          <div
            key={index}
            className="card bg-[#FFF6E5] md:w-72 2xl:w-96 shadow-sm"
          >
            <div className="card-body flex flex-col justify-center items-center gap-4">
              <div className="btn btn-circle btn-lg bg-[#6F4E37]">
                <value.icon className="w-6 h-6 text-white"/>
              </div>
              <h2 className="card-title text-xl font-poppins text-[#6F4E37] font-semibold mt-2">
                {value.title}
              </h2>
              <p className="font-poppins text-[#374151] w-3/4 text-center">
                {value.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExcellenceSection;
