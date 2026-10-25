import type { Metadata } from "next";
import { Nav, Footer } from "@/components/Layout"
import { CookieBanner } from "@/components/CookieBanner";
import mediaData from "@/config/media.json";

export const metadata: Metadata = {
  title: "Media Gallery",
  description: "Ad posters, video loops, and visual assets from Sakhi'ksasa Holdings.",
};

export default function MediaPage() {
  return (
    <>
      <Nav />
      <main className="flex flex-1 flex-col">
        <section className="mx-auto w-full max-w-6xl px-6 py-20">
          <h1 className="font-heading text-4xl font-bold">Media Gallery</h1>
          <p className="mt-3 text-ink/60">Ad posters, video loops, and visual assets.</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {mediaData.map((m) => (
              <div key={m.id} className="rounded-xl border border-line bg-white p-3 shadow-sm">
                <div className="aspect-video w-full overflow-hidden rounded-lg bg-line/30">
                  {m.type === "image" ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={m.src}
                      alt={m.alt}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <video
                      src={m.src}
                      className="h-full w-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  )}
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-xs font-medium text-ink/70">{m.title}</span>
                  <span className="text-xs text-gold">{m.tag}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-sm text-ink/40">
            To add media: edit <code className="rounded bg-line/30 px-1">src/config/media.json</code> and add your file to <code className="rounded bg-line/30 px-1">public/media/</code>.
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
