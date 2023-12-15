import React from "react";
import { Image, Link } from "@nextui-org/react";

export interface Data {
  id: string;
  name: string;
  description: string;
  link: string;
  price: number;
  image_url: string;
}

export default function ProductCard({ data }: { data: Data }) {
  return (
    <div
      key={data.id}
      className="m-4 p-4 w-full sm:w-auto rounded-2xl bg-white dark:bg-zinc-900"
    >
      <div className="font-medium inline m-auto text-center">
        <p className="uppercase text-m tracking-[0.16em]">{data.name}</p>
        <h3 className="text-4xl font-normal">{data.description}</h3>
      </div>
      <Link
        className="relative mt-8 bg-foreground/10 rounded-2xl sm:w-[19rem] h-64 sm:h-72 w-full justify-center"
        href={data.link}
      >
        <b
          className="bg-zinc-950 text-white border-white dark:border-zinc-900  border-5
          py-1 px-4 rounded-3xl flex items-center translate-x-[-50%] translate-y-[-50%] absolute top-[-.5rem] left-[50%] z-30"
        >
          <span>¥{data.price}</span>
        </b>
        <Image
          removeWrapper
          alt={data.name}
          src={data.image_url}
          className="z-0 h-full w-full object-cover"
        />
      </Link>
    </div>
  );
}
