import ProductCard from "./product-card";
import { siteConfig } from "@/config/site";

export default function CatalogProduct() {
  return (
    <section className="w-full m-auto py-12 bg-[#efefef] dark:bg-neutral-950">
      <h2 className="text-5xl text-center mb-8">PRODUCTOS</h2>
      <div className="flex flex-wrap flex-row content-center justify-center">
        {siteConfig.products.map((product) => (
        <ProductCard key={product.id} data={product} />
      ))}
      </div>
    </section>
  );
}
