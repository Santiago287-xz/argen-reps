"use client";
import ProductCard from "./product-card";
import { siteConfig } from "@/config/site";
import {
  Dropdown,
  DropdownItem,
  DropdownTrigger,
  DropdownMenu,
  Button,
} from "@nextui-org/react";
import { useState } from "react";
import { ChevronDownIcon } from "./icons";

export default function CatalogProduct() {
  const [statusFilter, setStatusFilter]: any = useState("all");

  const [visibleCount, setVisibleCount] = useState(12);
  const [loading, setLoading] = useState(false);

  const productsToDisplay = siteConfig.products
    .filter(
      (product) =>
        statusFilter == "all" ||
        statusFilter.size === 3 ||
        statusFilter.has(product.type)
    )
    .slice(0, visibleCount);

  const handleLoadMore = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 500));
    setVisibleCount((prevCount) => prevCount + 12);
    setLoading(false);
  };

  return (
    <section className="w-full m-auto py-12 bg-[#efefef] dark:bg-black">
      <div className="flex flex-wrap gap-4  sm:justify-around  justify-center items-center mb-8">
        <h2 className="text-5xl text-center">PRODUCTOS</h2>
        <Dropdown>
          <DropdownTrigger className="flex">
            <Button
              endContent={<ChevronDownIcon className="text-small" />}
              variant="ghost"
            >
              Categorias
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            disallowEmptySelection
            aria-label="Table Columns"
            closeOnSelect={false}
            selectedKeys={statusFilter}
            selectionMode="multiple"
            onSelectionChange={setStatusFilter}
          >
            {siteConfig.catalog_options.map((type) => (
              <DropdownItem key={type} className="capitalize">
                {type}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </div>
      <div className="flex flex-wrap flex-row content-center justify-center max-w-7xl m-auto">
        {productsToDisplay.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>
      <div className="flex flex-col w-full pt-8">
        {visibleCount < siteConfig.products.length && (
          <Button onClick={handleLoadMore} className="m-auto">
            {loading ? "Cargando..." : "Mostrar más productos"}
          </Button>
        )}
      </div>
    </section>
  );
}
