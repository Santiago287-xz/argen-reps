"use client";

import React from "react";
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";

export default function App() {
  return (
    <div className="flex w-full px-8 mb-8 md:max-w-6xl max-w-3xl m-auto flex-col" id="shopping-guide">
      <h2 className="text-3xl md:text-5xl text-center mb-12">GUIA DE COMPRA</h2>
      <Tabs aria-label="Options">
        <Tab key="introduction" title="Introducción">
          <Card className="p-4">
            <CardHeader>
              <h2 className="text-4xl">Que es Css Buy?</h2>
            </CardHeader>
            <CardBody className="text-foreground-500">
              <ul className="gap-4 grid">
                <li>
                  · CSSBuy es una plataforma de comercio electrónico que permite
                  a los clientes de todo el mundo comprar productos de China.La
                  plataforma ofrece una variedad de servicios, incluyendo:
                </li>
                <li>
                  · Agente de compras: CSSBuy puede comprar productos de
                  cualquier tienda en línea china en su nombre.
                </li>
                <li>
                  · Almacenamiento: CSSBuy ofrece almacenamiento gratuito
                  durante 180 días para los productos que compra.
                </li>
                <li>
                  · Control de calidad: CSSBuy puede tomar fotografías de los
                  productos que compra para que pueda verificar su calidad antes
                  de enviarlos.
                </li>
                <li>
                  · Gestión de pedidos: CSSBuy puede rastrear los pedidos y
                  proporcionarle actualizaciones sobre su estado.
                </li>
              </ul>
            </CardBody>
          </Card>
        </Tab>
        <Tab key="purchase" title="Comprar">
          <Card>
            <CardBody>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </CardBody>
          </Card>
        </Tab>
        <Tab key="custom" title="Aduana Argentina">
          <Card>
            <CardBody>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}
