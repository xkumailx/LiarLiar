// /** Infinite horizontal marquee used as a section divider. */
// export function Marquee({
//   items,
//   className = "",
// }: {
//   items: string[];
//   className?: string;
// }) {
//   const doubled = [...items, ...items];
//   return (
//     <div
//       className={`relative flex overflow-hidden border-y border-sand/10 py-6 ${className}`}
//     >
//       <div className="animate-marquee flex shrink-0 items-center gap-8 whitespace-nowrap pr-8">
//         {doubled.map((item, i) => (
//           <span
//             key={i}
//             className="font-display text-2xl italic text-sand/50 sm:text-3xl"
//           >
//             {item}
//             <span className="ml-8 text-torii">✦</span>
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// }
