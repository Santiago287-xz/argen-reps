"use client"
import { siteConfig } from "@/config/site";
import { DiscordIcon } from "@/components/icons";
import { Button, Image } from "@nextui-org/react";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

const darkLogoURL =
  "https://media.discordapp.net/attachments/1019381524149305426/1183524589557522464/InicioArgenm.png?ex=6588a62a&is=6576312a&hm=03e92fa6b2b4ec59fbc014fc0cfd95c29c96f01cb9e068db7fa33827971de2fa&=&format=webp&quality=lossless";
const lightLogoURL =
  "https://media.discordapp.net/attachments/1019381524149305426/1183524589322637393/InicioArgeNegro.png?ex=6588a62a&is=6576312a&hm=7106f115f9b9d833eb22e426ddac8da9b7a44d3c6a434b40006af451c62d717b&=&format=webp&quality=lossless";

export default function Titles() {
  const [imageUrl, setImageUrl] = useState("");
  const { theme } = useTheme();

  useEffect(() => {
    const imageUrl = theme === "light" ? lightLogoURL : darkLogoURL;
    setImageUrl(imageUrl);
  }, [theme]);

  return (
    <section className="h-[100dvh] w-full bg-gradient-to-t dark:bg-gradient-to-tr from-white dark:from-black to-[#efefef] dark:to-[#141414] top-[-4rem] relative">
      <div className="flex flex-wrap flex-col h-full w-full absolute content-center justify-center animate-fade-up z-20 items-center">
            <div className="relative text-center">
      <Image
      alt="Logo"
      src={imageUrl}
      className="rounded-none z-0 object-cover h-28 w-auto sm:h-38 sm:w-auto md:h-44 md:w-auto lg:h-64 lg:w-auto xl:h-68 xl:w-auto"
      />
      </div>
        <Button
          href={siteConfig.links.docs}
          color="success"
          className="mx-auto mt-5 z-20 py-6 px-4 sm:py-6 sm:px-4 md:py-6 md:px-6 lg:py-8 lg:px-8 xl:py-8  xl:px-8  shadow-md hover:shadow-lg font-bold"
          >
          DISCORD
          <DiscordIcon />
        </Button>
      </div>
    </section>
  );
};