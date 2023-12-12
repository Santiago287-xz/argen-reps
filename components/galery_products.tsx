import React from "react";

import {
  Card,
  CardHeader,
  CardFooter,
  Image,
  Divider,
  Button,
  Link,
} from "@nextui-org/react";
import { siteConfig } from "@/config/site";

export default function GaleryProducts() {
  return (
    <section className="w-full bg-[#e7e7e7] dark:bg-[#0b0b0b]">
      <Divider />
      <main className="max-w-[900px] w-4/5 gap-2 grid grid-cols-12 grid-rows-2 py-16 mx-auto justify-center rounded-md">
        {siteConfig.galery_products.map((cart) => (
          <Card
            key={cart.id}
            className={"col-span-12 h-[300px] bg-transparent " + cart.grid}
          >
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <span className="text-tiny text-white/60 uppercase font-bold">
                {cart.span}
              </span>
              <h4 className="text-white font-medium text-large">{cart.h4}</h4>
            </CardHeader>
            <Link isExternal href={cart.product_link} className="w-full h-full">
              <Image
                removeWrapper
                alt="Card background"
                className="z-0 w-full h-full object-cover hover:scale-105 rounded-none bg-none"
                src={cart.image}
              />
            </Link>
            <CardFooter
              className={
                "absolute bottom-0 border-t-1 z-10 justify-between text-tiny " +
                cart.style_footer.color
              }
            >
              <div>
                <p>Available soon.</p>
                <p>Get notified.</p>
              </div>
              <Button
                className="text-tiny"
                color="primary"
                radius="full"
                size="sm"
                as={Link}
                href={cart.product_link}
                showAnchorIcon
              >
                Purchase now
              </Button>
            </CardFooter>
          </Card>
        ))}
      </main>
    </section>
  );
}
