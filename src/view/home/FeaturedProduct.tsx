import { featuredProduct } from "@/utils/dummyData";
import Image from "next/image";

const FeaturedProductSection = () => {
  return (
    <div className="bg-[#FFF6E5] p-20">
      <div className="flex flex-col justify-between items-center">
        <div className="flex flex-col text-center font-playfair text-[#6F4E37] text-5xl font-bold">
          <h1>Menu</h1>
          <h1>Unggulan</h1>
          <div className="divider"></div>
        </div>
        <p className="text-lg font-poppins text-[#8B6F47] w-1/2 text-center">
          Nikmati koleksi kopi terbaik kami
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
        {featuredProduct.map((product) => (
          <div key={product.id} className="card bg-base-100 md:w-72 2xl:w-96 shadow-sm">
            <figure>
              <img
                className="h-[300px] w-full object-cover"
                src={product.img_url}
                alt={product.name}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-playfair text-[#6F4E37] font-semibold mb-4">
                {product.name}
              </h2>
              <p className="font-poppins text-[#4B5563] text-sm mb-6">
                {product.description}
              </p>
              <p className="text-lg text-[#6F4E37] font-poppins font-bold">
                {product.price.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                  minimumFractionDigits: 0,
                })}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProductSection;
