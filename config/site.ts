export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + NextUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Inicio",
      href: "/",
    },
    {
      label: "Productos",
      href: "/products",
    },
  ],
  images_url: {
    title_homepage:
      "https://media.discordapp.net/attachments/1019381524149305426/1183513810917666966/InicioArgenm.png?ex=65889c21&is=65762721&hm=162f6b70d9b87b9f8e1d8e35c664d44c51357c2f2b04d34faf130211bbc412ae&=&format=webp&quality=lossless",
  },
  galery_products: [
    {
      id: 1,
      product_link: "https://youtu.be/h9AHQV3pPn8?si=SpBLgd0IjoDDLf5i",
      span: "MOUSEPAD RED",
      h4: "prueba de texto",
      grid: "sm:col-span-4",
      fotter: null,
      image: "https://nextui.org/images/card-example-4.jpeg",
      style_footer: {
        color: "border-zinc-100/50 bg-white/30 text-black", // Claro
      },
    },
    {
      id: 2,
      product_link: "https://youtu.be/h9AHQV3pPn8?si=SpBLgd0IjoDDLf5i",
      span: "MOUSEPAD BLUE",
      h4: "prueba de texto",
      grid: "sm:col-span-4",
      fotter: null,
      image: "https://nextui.org/images/card-example-3.jpeg",
      style_footer: {
        color: "border-zinc-100/50 bg-white/30 text-black", // Claro
      },
    },
    {
      id: 3,
      product_link: "https://youtu.be/h9AHQV3pPn8?si=SpBLgd0IjoDDLf5i",
      span: "MOUSEPAD BLACK",
      h4: "prueba de texto",
      grid: "sm:col-span-4",
      fotter: null,
      image: "https://nextui.org/images/card-example-2.jpeg",
      style_footer: {
        color: "border-zinc-100/50 bg-white/30 text-black", // Claro
      },
    },
    {
      id: 4,
      product_link: "https://youtu.be/h9AHQV3pPn8?si=SpBLgd0IjoDDLf5i",
      span: "prueba de texto",
      h4: "prueba de texto",
      grid: "sm:col-span-5",
      fotter: null,
      image: "https://nextui.org/images/card-example-6.jpeg",
      style_footer: {
        color: "bg-black/40 border-default-600 dark:border-default-100 text-white", // Oscuro
      },
    },
    {
      id: 5,
      product_link: "https://youtu.be/h9AHQV3pPn8?si=SpBLgd0IjoDDLf5i",
      span: "prueba de texto",
      h4: "prueba de texto",
      grid: "sm:col-span-7",
      fotter: null,
      image: "https://nextui.org/images/card-example-5.jpeg",
      style_footer: {
        color: "bg-black/40 border-default-600 dark:border-default-100 text-white", // Oscuro
      },
    },
  ],
  products: [
    {
      id: "1",
      name: "luca",
      description: "Descripcion",
      link: "https://images.hola.com/imagenes/mascotas/20180925130054/consejos-para-cuidar-a-un-gatito-recien-nacido-cs/0-601-526/cuidardgatito-t.jpg?tx=w_680",
      price: 499,
      image_url:
        "https://images.hola.com/imagenes/mascotas/20180925130054/consejos-para-cuidar-a-un-gatito-recien-nacido-cs/0-601-526/cuidardgatito-t.jpg?tx=w_680",
    },
    {
      id: "2",      
      name: "es un",
      description: "Descripcion",
      link: "https://images.hola.com/imagenes/mascotas/20180925130054/consejos-para-cuidar-a-un-gatito-recien-nacido-cs/0-601-526/cuidardgatito-t.jpg?tx=w_680",
      price: 499,
      image_url:
        "https://images.hola.com/imagenes/mascotas/20180925130054/consejos-para-cuidar-a-un-gatito-recien-nacido-cs/0-601-526/cuidardgatito-t.jpg?tx=w_680",
    },
    {
      id: "3",
      name: "gil",
      description: "Descripcion",
      link: "https://images.hola.com/imagenes/mascotas/20180925130054/consejos-para-cuidar-a-un-gatito-recien-nacido-cs/0-601-526/cuidardgatito-t.jpg?tx=w_680",
      price: 499,
      image_url:
        "https://images.hola.com/imagenes/mascotas/20180925130054/consejos-para-cuidar-a-un-gatito-recien-nacido-cs/0-601-526/cuidardgatito-t.jpg?tx=w_680",
    },
  ],
  accordion_faqs: [
    {
      key: "1",
      aria_label: "Cuando tarda mi envio?",
      title: "Cuando tarda mi envio?",
      text: "- El envio es via MercadoLibre y demora de 3 a 5 dias habiles a llegar a tu domicilio.",
    },
    {
      key: "2",
      aria_label: "Por que no hacen envios internacionales?",
      title: "Por que no hacen envios internacionales?",
      text: "- Los envios internacionales a Chile, Brasil y Colombia estaran habilitados proximamente via nuestro partner DHL",
    },
    {
      key: "3",
      aria_label: "Que material utilizamos en nuestra superficie?",
      title: "Que material utilizamos en nuestra superficie?",
      text: "- Nuestra superficie esta hecha de Polyester y una base antideslizante 100% de caucho",
    },
    {
      key: "4",
      aria_label: "Como puedo lavar mi mousepad?",
      title: "Como puedo lavar mi mousepad?",
      text: "- Para limpiar su mousepad, le recomendamos que utilice un rodillo de pelusa para deshacerse de las migas sueltas. Para las manchas, primero intente usar agua y una toalla de microfibra. Eso debería eliminar la mayoría de las manchas leves, pero si necesita usar jabón, le recomendamos una pequeña cantidad de detergente para ropa o quitamanchas. Frote o cepille la mancha, enjuague. Deje que la alfombrilla de ratón se seque al aire y debería quedar como nueva. Intentamos usar una lavadora en un entorno delicado con nuestras alfombrillas para mouse y salió genial. Dicho esto, no podemos garantizar que todas las lavadoras tengan el mismo gran resultado, por lo que no podemos garantizar que la almohadilla mantenga la misma consistencia.",
    },
    {
      key: "5",
      aria_label: "Ofrecen mousepad custom?",
      title: "Ofrecen mousepad custom?",
      text: "- Actualmente no ofrecemos al público diseños personalizados de alfombrillas de ratón. Sin embargo, si desea comprar 10 o más alfombrillas para mouse con el mismo diseño personalizado, podemos crear un pedido al por mayor para usted. Para obtener más información, comuníquese con nuestro equipo de soporte en support@magicbyzeko.com y háganos saber que le gustaría realizar un pedido de 10 o más alfombrillas para mouse personalizadas.",
    },
    {
      key: "6",
      aria_label: "¿Ofrecen garantia del producto?",
      title: "¿Ofrecen garantia del producto?",
      text: "La garantia del mousepad V2 de Magic By Zeko es de 6 meses (Si contas con un mousepad V1 comprado luego del 01/01/23 el mismo NO cuenta con garantia ya que es una version DESCONTINUADA) la misma aplica en casos en los que el producto haya tenido una falla tecnica de fabrica, no aplica en casos que por algun motivo se derrame liquido, hayan lavado el producto de manera inapropiada. Si deseas aplicar garantia debes escribirnos a garantia@magicbyzeko.uno",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
    webcodebuilders: "https://www.instagram.com/webcode__/",
  },
};
