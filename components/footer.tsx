import { Link } from "@nextui-org/link";
import { siteConfig } from "@/config/site";
import { TwitterIcon } from "./icons";
import { DiscordIcon } from "./icons";

import { Oswald } from "next/font/google";
import { useState } from "react";

const oswald = Oswald({
  subsets: ["latin"],
  display: "swap",
});

export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-center pb-6 pt-6 gap-5 bg-[#101010] text-white">
      <div className="flex flex-col items-center gap-4 mt-4">
        <span>cssbuy.help.accout@gmail.com</span>
        <div className="gap-3 flex">
          <Link
            isExternal
            href={siteConfig.links.twitter}
            className="border-2 rounded-md p-1 border-[#636363] bg-[#1C1C1C]"
          >
            <TwitterIcon className="w-8 h-8 text-white" />
          </Link>
          <Link
            isExternal
            href={siteConfig.links.discord}
            className="border-2 rounded-md p-1 border-[#636363] bg-[#1C1C1C]"
          >
            <DiscordIcon className="w-8 h-8 text-white" />
          </Link>
          <Link
            isExternal
            href={siteConfig.links.discord}
            className="border-2 rounded-md p-1 border-[#636363] bg-[#1C1C1C]"
          >
            <TwitterIcon className="w-8 h-8 text-white" />
          </Link>
        </div>
        <div className={oswald.className}>
          <h2 className="text-3xl md:text-5xl font-normal">ARGEN REPS</h2>
        </div>
      </div>
      <div className="flex flex-wrap justify-center md:justify-between w-full px-16">
        <span className="text-gray-400 px-2">Copyright © 2023-2024 Argen Reps</span>
        <Link
          isExternal
          href={siteConfig.links.webcodebuilders}
          className="flex items-center gap-1 text-current"
        >
          <span className="text-zinc-200 pl-2">Powered by</span>
          <p className="text-primary">WebCodeBuilders</p>
        </Link>
      </div>
    </footer>
  );
}
