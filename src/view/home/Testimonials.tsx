import { Testimonies } from "@/utils/dummyData";

const TestimonySection = () => {
  return (
    <div className="p-20">
      <div className="flex flex-col justify-between items-center">
        <div className="flex flex-col text-center font-playfair text-[#6F4E37] text-5xl font-bold">
          <h1>Kata</h1>
          <h1>Mereka</h1>
          <div className="divider divider-[#6F4E37]"></div>
        </div>
        <p className="text-lg font-poppins text-[#8B6F47] w-1/2 text-center">
          Testimoni dari pelanggan setia kami
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        {Testimonies.map((testimony) => (
          <div
            key={testimony.id}
            className="card bg-base-100 md:w-72 2xl:w-96 shadow-sm"
          >
            <div className="card-body">
              <div className="flex gap-4">
                <div className="avatar">
                  <div className="w-12 rounded-full">
                    <img src={testimony.avatar} alt={testimony.name} />
                  </div>
                </div>
                <div>
                  <h2>{testimony.name}</h2>
                  <div className="rating rating-sm">
                    <div className="mask mask-star-2 bg-amber-400" aria-label="1 star"></div>
                    <div className="mask mask-star-2 bg-amber-400" aria-label="2 star"></div>
                    <div className="mask mask-star-2 bg-amber-400" aria-label="3 star"></div>
                    <div className="mask mask-star-2 bg-amber-400" aria-label="4 star"></div>
                    <div className="mask mask-star-2 bg-amber-400" aria-label="5 star" aria-current="true"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonySection;
