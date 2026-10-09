"use client";

import { useState } from "react";
import type { HobbyWork } from "@/data/hobbies/works";

interface HobbyWorkCardProps {
  work: HobbyWork;
}

export default function HobbyWorkCard({ work }: HobbyWorkCardProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const slide = work.slides[activeSlide];

  const showSlide = (index: number) => {
    setActiveSlide((index + work.slides.length) % work.slides.length);
  };

  return (
    <article
      className="overflow-hidden rounded-2xl border"
      style={{
        backgroundColor: "var(--color-card-bg)",
        borderColor: "var(--color-border)",
        boxShadow: "0 18px 48px -38px var(--color-text)",
      }}
    >
      <div className="group relative aspect-video overflow-hidden bg-[var(--color-bg-secondary)]">
        <img
          key={slide.image}
          src={slide.image}
          alt={slide.alt}
          className="h-full w-full animate-[fadeSlideUp_350ms_ease-out] object-cover"
        />
        {work.slides.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => showSlide(activeSlide - 1)}
              aria-label={`Previous ${work.title} image`}
              className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border bg-(--color-bg)/80 text-xl opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100 group-focus-within:opacity-100 focus-visible:opacity-100 focus-visible:outline-2"
              style={{
                color: "var(--color-text)",
                borderColor: "var(--color-border)",
              }}
            >
              <span aria-hidden="true">‹</span>
            </button>
            <button
              type="button"
              onClick={() => showSlide(activeSlide + 1)}
              aria-label={`Next ${work.title} image`}
              className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border bg-(--color-bg)/80 text-xl opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100 group-focus-within:opacity-100 focus-visible:opacity-100 focus-visible:outline-2"
              style={{
                color: "var(--color-text)",
                borderColor: "var(--color-border)",
              }}
            >
              <span aria-hidden="true">›</span>
            </button>
            <div
              className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border bg-(--color-bg)/80 px-3 py-2 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100 group-focus-within:opacity-100"
              style={{ borderColor: "var(--color-border)" }}
              role="group"
              aria-label={`${work.title} slides`}
            >
              {work.slides.map((item, index) => (
                <button
                  key={item.image}
                  type="button"
                  onClick={() => showSlide(index)}
                  aria-label={`Show image ${index + 1} of ${work.slides.length}`}
                  aria-current={index === activeSlide ? "true" : undefined}
                  className="h-2 w-2 rounded-full transition-transform focus-visible:scale-125 focus-visible:outline-2"
                  style={{
                    backgroundColor:
                      index === activeSlide
                        ? "var(--color-text)"
                        : "var(--color-text-secondary)",
                    opacity: index === activeSlide ? 1 : 0.5,
                  }}
                />
              ))}
            </div>
            <span
              className="absolute right-3 top-3 rounded-full border bg-(--color-bg)/80 px-2.5 py-1 text-xs backdrop-blur-sm"
              style={{
                color: "var(--color-text)",
                borderColor: "var(--color-border)",
              }}
              aria-live="polite"
            >
              {activeSlide + 1} / {work.slides.length}
            </span>
          </>
        )}
      </div>
      <div className="flex items-baseline justify-between gap-4 p-5 sm:p-6">
        <h2
          className="break-words text-lg font-medium sm:text-xl"
          style={{
            color: "var(--color-text)",
            fontFamily: "var(--font-body)",
          }}
        >
          {work.title}
        </h2>
        <time
          className="shrink-0 text-sm"
          style={{
            color: "var(--color-text-secondary)",
            fontFamily: "var(--font-body)",
          }}
        >
          {work.year}
        </time>
      </div>
    </article>
  );
}
