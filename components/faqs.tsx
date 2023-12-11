"use client";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { siteConfig } from "@/config/site";

export default function Faqs() {
  return (
    <section className="w-4/5 m-auto my-8">
      <h2 className="text-3xl md:text-5xl text-center my-12">PREGUNTAS FRECUENTES</h2>
      <section className="flex flex-wrap flex-col justify-center p-4 rounded-lg w-auto md:w-4/5 m-auto">
        <Accordion>
          {siteConfig.accordion_faqs.map((accordion)=>{
            return (
              <AccordionItem key={accordion.key} aria-label={accordion.aria_label} title={accordion.title}>{accordion.text}</AccordionItem>
            )
          })}
        </Accordion>
      </section>
    </section>
  );
}
