import { siteConfig } from "@/config/site";
import { DiscordIcon } from "@/components/icons";
import { Button } from "@nextui-org/react";

export default function Titles() {
  return (
    <section className="h-[100dvh] w-full bg-gradient-to-tr from-white dark:from-black to-[#8d8d8d] dark:to-[#141414] top-[-4rem] relative">
      <div className="flex flex-wrap flex-col h-full w-full absolute content-center justify-center animate-fade-up z-20 items-center">
        <div className="relative">
          <h1 className="text-8xl font-medium">UNETE A NUESTRA</h1>
          <h1 className="text-8xl font-medium text-[#6CBC2A] absolute left-1/2 top-[4.3rem] translate-x-[-50%]">
            COMUNIDAD
          </h1>
        </div>
        <Button
          href={siteConfig.links.docs}
          color="success"
          className="w-32 mt-24"
        >
          DISCORD
          <DiscordIcon />
        </Button>
      </div>
    </section>
  );
}
