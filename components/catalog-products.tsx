"use client";
import ProductCard from "./product-card";
import { siteConfig } from "@/config/site";
import {
  Dropdown,
  DropdownItem,
  DropdownTrigger,
  DropdownMenu,
  Button,
  Input,
} from "@nextui-org/react";
import { useState } from "react";
import { ChevronDownIcon } from "./icons";

export default function CatalogProduct() {
  const productShowNum = 9;
  const [statusFilter, setStatusFilter]: any = useState("all");
  const [visibleCount, setVisibleCount] = useState(productShowNum);
  const [inputValue, setInputValue] = useState("");

  const productsToDisplay = siteConfig.products
    .filter(
      (product) =>
        (statusFilter == "all" ||
          statusFilter.size === 3 ||
          statusFilter.has(product.type)) &&
        product.description.toLowerCase().includes(inputValue.toLowerCase())
    )
    .slice(0, visibleCount);

  const handleLoadMore = () =>
    setVisibleCount((prevCount) => prevCount + productShowNum);

  const handleChange = (e: any) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    console.log(newValue);
  };
  return (
    <section className="w-full m-auto py-12 bg-[#efefef] dark:bg-black">
      <div className="flex flex-wrap gap-4 sm:justify-around justify-center items-center mb-8 mx-auto max-w-[80rem]">
        <h2 className="text-5xl text-center w-full md:w-auto">PRODUCTOS</h2>
        <Input
          className="w-1/3"
          label="Buscar..."
          value={inputValue}
          onChange={handleChange}
        />
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
            Mostrar más productos
          </Button>
        )}
      </div>
    </section>
  );
}
