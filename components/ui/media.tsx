/**
 * Media block. Renders an image when a `src` is provided (e.g. a WordPress
 * featured image), otherwise a branded gradient placeholder so layouts read
 * correctly before photography is supplied.
 *
 * Uses a plain <img> rather than next/image because WordPress media can live on
 * an arbitrary domain; swap to next/image + remotePatterns once the CMS domain
 * is known (see next.config.ts).
 */
export function Media({
  src,
  alt = "",
  label,
  className = "",
  ratio = "aspect-[4/5]",
  rounded = "rounded-2xl",
}: {
  src?: string;
  alt?: string;
  label?: string;
  className?: string;
  ratio?: string;
  rounded?: string;
}) {
  return (
    <div
      className={`relative isolate overflow-hidden ${rounded} ${ratio} ${className}`}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-clay via-mulberry to-soy">
          <div className="absolute inset-0 opacity-60 [background:radial-gradient(80%_60%_at_30%_20%,rgba(233,82,43,0.55),transparent_60%)]" />
          {label ? (
            <span className="absolute bottom-4 left-4 text-xs uppercase tracking-[0.2em] text-sand/60">
              {label}
            </span>
          ) : null}
        </div>
      )}
    </div>
  );
}
