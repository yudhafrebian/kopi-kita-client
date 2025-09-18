import { fetchMenu, fetchMenuCategory } from "@/utils/ApiHelper";
import clsx from "clsx";
import Link from "next/link";

interface MenuCategories {
  id: number;
  name: string;
  slug: string;
}

interface Product {
  id: number;
  name: string;
  description: string;
  image_url: string;
  price: number;
}

interface MenuSectionProps {
  searchParams: { category?: string };
}

const MenuSection = async ({ searchParams }: MenuSectionProps) => {
  const response = await fetchMenuCategory();
  const categories = response.data.data;

  const activeCategory = searchParams.category || categories[0].slug;

  const data = await fetchMenu(activeCategory);
  console.log(data.data.data);
  const products = data.data.data;
  return (
    <div className="p-8 md:p-20 font-poppins">
      <div className="grid grid-cols-2 md:flex md:justify-center gap-4">
        {categories.map((category: MenuCategories) => (
          <Link
            key={category.id}
            href={`?category=${category.slug}`}
            scroll={false}
            className={clsx(
              "btn btn-outline rounded-full text-xs md:text-base",
              category.slug === activeCategory && "btn-active"
            )}
          >
            {category.name}
          </Link>
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 md:mt-16">
        {products.map((product: Product) => (
          <div
            key={product.id}
            className="card bg-[#FFF6E5] md:w-72 2xl:w-96 shadow-sm"
          >
            <figure>
              <img
                className="h-[120px] md:h-[200px] lg:h-[300px] w-full object-cover"
                loading="lazy"
                src={product.image_url}
                alt={product.name}
              />
            </figure>
            <div className="card-body p-2 md:p-6">
              <h2 className="card-title font-playfair text-[#6F4E37] text-sm md:text-base font-semibold md:mb-4">
                {product.name}
              </h2>
              <p className="font-poppins text-[#4B5563] text-xs md:text-sm mb-2 md:mb-6">
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

export default MenuSection;
