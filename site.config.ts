import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "FrostnCrème Bakery",
  tagline: "Custom cakes and desserts, egg and eggless.",
  category: "Custom cakes",
  schemaType: "Bakery",
  area: "Whitby, ON",
  siteUrl: "https://frostncreme-bakery-ca.vercel.app",

  theme: {
    preset: "bakery-pastel",
    colors: { accent: "#6b2c35" },
  },
  logo: "/images/logo.jpg",
  showNameWithLogo: false,

  hero: {
    eyebrow: "Custom cakes in Whitby",
    headline: "Cakes for birthdays, graduations and celebrations",
    subhead: "FrostnCrème Bakery makes custom cakes and desserts in Whitby, egg and eggless, and is food handler certified. Email or send a message to order.",
    images: [
      { src: "/images/post-1.jpg", alt: "A train birthday cake from FrostnCrème Bakery", width: 1080, height: 1080 },
      { src: "/images/post-7.jpg", alt: "A blush and burgundy floral cake from FrostnCrème Bakery", width: 1080, height: 1080 },
      { src: "/images/post-4.jpg", alt: "A yellow Lamborghini birthday cake from FrostnCrème Bakery", width: 1080, height: 1364 },
    ],
    primaryCta: { label: "Email to order", href: "mailto:frostncreme@gmail.com" },
    secondaryCta: { label: "See the cakes", href: "#gallery" },
  },

  highlights: [
    "Custom cakes and desserts in Whitby",
    "Egg and eggless options",
    "Food handler certified",
    "Order by email or Instagram DM",
  ],

  about: {
    title: "Welcome to FrostnCrème Bakery",
    body: [
      "FrostnCrème Bakery makes custom cakes and desserts in Whitby, with egg and eggless options. The bakery is food handler certified.",
      "Recent cakes have included a train cake, a dance-themed birthday cake, a vintage cake lettered Limited Edition Since 1986, a Lamborghini cake, a race-car second birthday cake, floral cakes, and a graduation cake with piano, cap, robotics and Rubik's cube sugar art. Email frostncreme@gmail.com or send a message on Instagram to order.",
    ],
    image: { src: "/images/post-7.jpg", alt: "A blush and burgundy floral cake from FrostnCrème Bakery", width: 1080, height: 1080 },
  },

  menu: {
    label: "Menu",
    title: "What we bake",
    variant: "list",
    showPrices: false,
    priceNote: "Email or send a message for a quote on your date, flavour and design.",
    groups: [
      {
        title: "Cakes",
        items: [
          { name: "Custom celebration cakes", description: "Egg and eggless. Recent work has included train, dance, vintage, Lamborghini, race-car, floral and graduation cakes." },
        ],
      },
    ],
  },

  gallery: {
    title: "Recent cakes",
    items: [
      { src: "/images/post-1.jpg", width: 1080, height: 1080, alt: "A train birthday cake from FrostnCrème Bakery", caption: "A train cake", href: "https://www.instagram.com/p/DfNJ1v8gvWB/" },
      { src: "/images/post-7.jpg", width: 1080, height: 1080, alt: "A blush and burgundy floral cake from FrostnCrème Bakery", caption: "A floral cake", href: "https://www.instagram.com/p/Dc__i_KBFxs/" },
      { src: "/images/post-4.jpg", width: 1080, height: 1364, alt: "A yellow Lamborghini birthday cake from FrostnCrème Bakery", caption: "A Lamborghini cake", href: "https://www.instagram.com/p/DeQP2_jMXZB/" },
      { src: "/images/post-5.jpg", width: 1080, height: 1080, alt: "A race-car second birthday cake from FrostnCrème Bakery", caption: "A race-car cake", href: "https://www.instagram.com/p/DdlCQIEScCr/" },
      { src: "/images/post-2.jpg", width: 1080, height: 1440, alt: "A dance-themed tenth birthday cake from FrostnCrème Bakery", caption: "A dance cake", href: "https://www.instagram.com/p/De6qeDyAxf3/" },
      { src: "/images/post-3.jpg", width: 1080, height: 1080, alt: "A vintage cake lettered Limited Edition Since 1986 from FrostnCrème Bakery", caption: "A vintage cake", href: "https://www.instagram.com/p/Dej-VRkAPTd/" },
      { src: "/images/post-6.jpg", width: 1080, height: 1440, alt: "A blush floral cake with a bow from FrostnCrème Bakery", caption: "A blush floral cake", href: "https://www.instagram.com/p/DdOydTih9U7/" },
      { src: "/images/post-8.jpg", width: 720, height: 960, alt: "A graduation cake with piano, cap, robotics and Rubik's cube details from FrostnCrème Bakery", caption: "A graduation cake", href: "https://www.instagram.com/p/DcwxbxZlV6d/" },
    ],
  },

  reels: { items: [] },

  instagram: {
    handle: "frostncremebakery",
    embeds: ["https://www.instagram.com/p/DfNJ1v8gvWB/", "https://www.instagram.com/p/Dc__i_KBFxs/", "https://www.instagram.com/p/DeQP2_jMXZB/"],
  },

  order: {
    label: "How to order",
    title: "Order by email or in a DM",
    intro: "Email frostncreme@gmail.com or send a message on Instagram with your date, flavour and design.",
    dmMessage: "Hi FrostnCrème Bakery! I would like to order.\nDate needed:\nFlavour and design:\nEgg or eggless:",
    headerCtaLabel: "Email to order",
    links: [
      { label: "Email frostncreme@gmail.com", href: "mailto:frostncreme@gmail.com" },
      { label: "Order by Instagram DM", href: "https://ig.me/m/frostncremebakery" },
    ],
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I order?", a: "Email frostncreme@gmail.com or send a message on Instagram with your date, flavour and design." },
    { q: "Do you offer eggless cakes?", a: "Yes. FrostnCrème Bakery makes custom cakes and desserts in egg and eggless options." },
    { q: "Where are you based?", a: "FrostnCrème Bakery is based in Whitby and is food handler certified." },
  ],

  contact: {
    title: "Contact",
    area: "Whitby, Ontario",
    email: "frostncreme@gmail.com",
    socials: [{ label: "Instagram", href: "https://www.instagram.com/frostncremebakery/" }],
  },

  seo: {
    title: "FrostnCrème Bakery | Custom cakes in Whitby",
    description: "Custom cakes and desserts in Whitby, egg and eggless, from a food handler certified bakery. Email frostncreme@gmail.com or send an Instagram DM to order.",
    keywords: ["custom cakes Whitby", "eggless cakes Durham", "FrostnCrème Bakery"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
