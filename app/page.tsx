import ShoppingGuide from "@/components/shopping-guide";
import Titles from "@/components/titles";
import Faqs from "@/components/faqs";
import GaleryProducts from "@/components/galery_products";

export default function Home() {
  return (
    <>
      <Titles />
      <ShoppingGuide />
      <GaleryProducts />
      <Faqs />
    </>
  );
}
