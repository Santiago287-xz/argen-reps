import CatalogProduct from "@/components/catalog-products";
import ShoppingGuide from "@/components/shopping-guide";
import Titles from "@/components/titles";
import Faqs from "@/components/faqs";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Titles />
      <ShoppingGuide />
      <CatalogProduct />
      <Faqs />
      <Footer />
    </>
  );
}
