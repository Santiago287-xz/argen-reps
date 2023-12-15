import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";

import { ThemeSwitch } from "@/components/theme-switch";
import { DiscordIcon } from "@/components/icons";

export const Navbar = () => {
  return (
    <>
      <NextUINavbar
        className="backdrop-blur-md border-b border-foreground/10 animate-fade-down animate-duration-[350ms] 
      animate-delay-100 bg-[#ebeff3db] dark:bg-[#1c1c1ce7] z-[200000]"
        maxWidth="xl"
        position="sticky"
      >
        <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
          <NavbarBrand className="gap-3 max-w-fit">
            <NextLink href="/">
              {/* <Image src={imageUrl} alt="Logo" className="rounded-none" width={40} height={40} /> */}
            </NextLink>
          </NavbarBrand>
          <div className="hidden lg:flex gap-2 justify-start ml-2">
            {siteConfig.navItems.map((item) => (
              <NavbarItem key={item.href}>
                <Button
                  href={item.href}
                  as={Link}
                  variant="light"
                  className="text-lg"
                >
                  {item.label}
                </Button>
              </NavbarItem>
            ))}
          </div>
        </NavbarContent>

        <NavbarContent
          className="hidden lg:flex basis-1/5 sm:basis-full"
          justify="end"
        >
          <NavbarItem className="hidden lg:flex gap-3">
            <Link
              isExternal
              href={siteConfig.links.discord}
            >
              <DiscordIcon className="w-7 h-9 text-foreground/50" />
            </Link>
            <ThemeSwitch />
          </NavbarItem>
        </NavbarContent>

        <NavbarContent className="lg:hidden basis-1 pl-4" justify="end">
          <ThemeSwitch />
          <NavbarMenuToggle />
        </NavbarContent>

        <NavbarMenu>
          <div className="mx-4 mt-2 flex flex-col gap-2">
            <NavbarMenuItem>
              {siteConfig.navItems.map((item) => (
                <NavbarItem key={item.href}>
                  <Link
                    color="foreground"
                    className="py-2"
                    href={item.href}
                    size="lg"
                  >
                    {item.label}
                  </Link>
                </NavbarItem>
              ))}
            </NavbarMenuItem>
          </div>
        </NavbarMenu>
      </NextUINavbar>
    </>
  );
};
