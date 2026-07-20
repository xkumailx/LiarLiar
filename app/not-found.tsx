import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="vignette relative flex min-h-[80vh] flex-col items-center justify-center px-5 text-center">
      <div className="absolute inset-0 -z-10 glow" />
      <p className="eyebrow mb-5">404</p>
      <h1 className="font-display text-5xl text-sand sm:text-7xl">
        No alibi for this one.
      </h1>
      <p className="mt-5 max-w-md text-sand/70">
        The page you&apos;re looking for has slipped out the back. Let&apos;s get
        you back to the night.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button href="/" variant="primary">
          Back Home
        </Button>
        <Button href="/reservations" variant="outline">
          Book a Table
        </Button>
      </div>
    </section>
  );
}
