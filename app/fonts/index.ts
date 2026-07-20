import localFont from "next/font/local";

export const migra = localFont({
  src: [
    {
      path: "./Migra-Extralight.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Migra-Extrabold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-migra",
  display: "swap",
});
