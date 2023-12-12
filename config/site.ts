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
  catalog_options: [
    "Zapas",
    "Gato",
    "Fito paez",
  ],
  products: [
    {
      id: "1",
      name: "luca",
      description: "Descripcion",
      type: "Gato",
      link: "https://images.hola.com/imagenes/mascotas/20180925130054/consejos-para-cuidar-a-un-gatito-recien-nacido-cs/0-601-526/cuidardgatito-t.jpg?tx=w_680",
      price: 499,
      image_url:
        "https://images.hola.com/imagenes/mascotas/20180925130054/consejos-para-cuidar-a-un-gatito-recien-nacido-cs/0-601-526/cuidardgatito-t.jpg?tx=w_680",
    },
    {
      id: "2",      
      name: "es un",
      description: "Descripcion",
      type: "Zapas",
      link: "https://images.hola.com/imagenes/mascotas/20180925130054/consejos-para-cuidar-a-un-gatito-recien-nacido-cs/0-601-526/cuidardgatito-t.jpg?tx=w_680",
      price: 499,
      image_url:
        "https://http2.mlstatic.com/D_NQ_NP_855827-MLA31021411407_062019-O.webp",
    },
    {
      id: "3",
      name: "Paez",
      description: "Descripcion",
      type: "Fito paez",
      link: "https://images.hola.com/imagenes/mascotas/20180925130054/consejos-para-cuidar-a-un-gatito-recien-nacido-cs/0-601-526/cuidardgatito-t.jpg?tx=w_680",
      price: 499,
      image_url:
        "https://www.fitopaezmusica.com/wp-content/uploads/2018/08/ARP_2018_06_N0001_Fito_Paez_00447baja-1.jpg",
    },
    {
      id: "4",
      name: "Fito",
      description: "Descripcion",
      type: "Fito paez",
      link: "https://images.hola.com/imagenes/mascotas/20180925130054/consejos-para-cuidar-a-un-gatito-recien-nacido-cs/0-601-526/cuidardgatito-t.jpg?tx=w_680",
      price: 499,
      image_url:
        "https://ca-times.brightspotcdn.com/dims4/default/b9813fe/2147483647/strip/true/crop/3000x2118+0+0/resize/1200x847!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fa0%2Feb%2Fac484e269ebef5c6e5527ebeb3fa%2F44988704f0ca4143bd49050679f8457a",
    },
    {
      id: "5",      
      name: "es un gato",
      description: "Descripcion",
      type: "Gato",
      link: "https://images.hola.com/imagenes/mascotas/20180925130054/consejos-para-cuidar-a-un-gatito-recien-nacido-cs/0-601-526/cuidardgatito-t.jpg?tx=w_680",
      price: 499,
      image_url:
        "data:image/jpeg;base64,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",
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
