import { Coffee, Heart, Sprout } from "lucide-react";

const ValueSection = () => {
  const values = [
    {
      icon: Sprout,
      title: "Visi",
      description:
        "Menjadi destinasi utama pecinta kopi untuk merasakan cita rasa autentik Indonesia dalam suasana yang hangat dan inspiratif.",
    },
    {
      icon: Heart,
      title: "Misi",
      description:
        "Menghadirkan pengalaman kopi berkualitas tinggi sambil membangun komunitas yang solid dan mendukung petani kopi lokal.",
    },
    {
      icon: Coffee,
      title: "Filosofi",
      description:
        "Kopi bukan sekadar minuman, tetapi medium untuk berbagi cerita, membangun hubungan, dan menciptakan momen berharga.",
    },
  ];
  return (
    <div className="px-44 py-24">
      <div className="flex flex-col justify-between items-center gap-3">
        <h1 className="font-playfair text-[#6F4E37] text-4xl font-bold">
          Filosofi & Nilai
        </h1>
        <p className="font-poppins text-[#8B6F47]">
          Setiap tegukan adalah cerminan dari dedikasi kami terhadap kualitas
          dan komunitas
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-16">
        {values.map((value, index) => (
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

export default ValueSection;
