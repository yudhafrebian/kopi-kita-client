const ExteriorSection = () => {
  return (
    <div className="px-28 py-20 bg-[#FFF6E5] font-poppins">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-[#6F4E37]">Eksterior Café</h2>
        <p className="text-[#374151] text-lg mt-4">
          Kenali tampak depan café kami yang mudah ditemukan
        </p>
      </div>
      <div className="card bg-white md:w-[896px] shadow-lg mx-auto mt-12">
        <figure>
          <img
            className="h-[384px] w-full object-cover"
            src="/assets/exterior.png"
            alt="exterior"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-playfair text-2xl text-[#6F4E37] font-bold mb-4">
            Kopi Kita Café
          </h2>
          <p className="font-poppins text-[#4B5563] text-lg mb-6 w-[90%]">
            Desain eksterior modern dengan sentuhan hangat khas kedai kopi.
            Jendela besar memberikan pandangan ke dalam suasana café yang
            nyaman, dengan area outdoor yang mengundang untuk bersantai.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExteriorSection;
