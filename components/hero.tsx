// import type { ReactNode } from "react";
// import { Container } from "./ui/container";

// /** Page hero with the warm radial "glow" backdrop from the style guide. */
// export function Hero({
//   eyebrow,
//   title,
//   subtitle,
//   children,
//   image,
//   size = "lg",
//   align = "center",
// }: {
//   eyebrow?: string;
//   title: ReactNode;
//   subtitle?: ReactNode;
//   children?: ReactNode;
//   image?: string;
//   size?: "md" | "lg" | "full";
//   align?: "center" | "left";
// }) {
//   const minH =
//     size === "full"
//       ? "min-h-[100svh]"
//       : size === "lg"
//         ? "min-h-[78vh]"
//         : "min-h-[56vh]";
//   const alignment =
//     align === "center" ? "items-center text-center" : "items-start text-left";

//   return (
//     <section
//       className={`vignette relative flex ${minH} flex-col justify-end overflow-hidden pb-16 pt-32 sm:pb-24`}
//     >
//       {/* Backdrop */}
//       <div className="absolute inset-0 -z-20 glow" />
//       {image ? (
//         <>
//           {/* eslint-disable-next-line @next/next/no-img-element */}
//           <img
//             src={image}
//             alt=""
//             className="absolute inset-0 -z-10 h-full w-full object-cover opacity-55"
//           />
//           <div className="absolute inset-0 -z-10 bg-gradient-to-t from-soy via-soy/30 to-transparent" />
//         </>
//       ) : null}

//       <Container className={`relative flex flex-col ${alignment}`}>
//         <div className={`reveal flex max-w-4xl flex-col ${align === "center" ? "items-center" : "items-start"}`}>
//           {eyebrow ? <p className="eyebrow mb-5">{eyebrow}</p> : null}
//           <h1 className="font-display text-5xl leading-[0.98] text-balance text-sand sm:text-7xl lg:text-8xl">
//             {title}
//           </h1>
//           {subtitle ? (
//             <p className="mt-6 max-w-2xl text-lg leading-relaxed text-sand/80 sm:text-xl">
//               {subtitle}
//             </p>
//           ) : null}
//           {children ? (
//             <div
//               className={`mt-9 flex flex-wrap gap-4 ${align === "center" ? "justify-center" : ""}`}
//             >
//               {children}
//             </div>
//           ) : null}
//         </div>
//       </Container>
//     </section>
//   );
// }
