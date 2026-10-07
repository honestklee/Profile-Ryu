"use client";

import { useEffect, useRef, useState } from "react";

const email = "rizkyryuap@gmail.com";
const whatsappUrl = "https://wa.me/6282129744243";

export default function ContactBubble() {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (
        event.target instanceof Node &&
        !panelRef.current?.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div
      ref={panelRef}
      className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3 sm:bottom-7 sm:right-7"
    >
      {isOpen && (
        <div
          id="contact-options"
          className="w-[min(19rem,calc(100vw-2.5rem))] overflow-hidden rounded-2xl border p-4 shadow-2xl backdrop-blur-xl"
          style={{
            backgroundColor: "color-mix(in srgb, var(--color-card-bg) 94%, transparent)",
            borderColor: "var(--color-border)",
            boxShadow: "0 20px 60px -24px color-mix(in srgb, var(--color-text) 30%, transparent)",
          }}
          role="dialog"
          aria-label="Contact RRAP"
        >
          <p
            className="mb-1 text-sm font-semibold"
            style={{ color: "var(--color-text)", fontFamily: "var(--font-body)" }}
          >
            Let&apos;s talk
          </p>
          <p
            className="mb-4 text-xs"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Choose how you&apos;d like to reach me.
          </p>
          <div className="grid gap-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-11 items-center gap-3 rounded-xl border px-3 text-sm transition-transform hover:translate-x-1"
              style={{
                color: "var(--color-text)",
                backgroundColor: "var(--color-bg-secondary)",
                borderColor: "var(--color-border)",
                fontFamily: "var(--font-body)",
              }}
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#25D366] text-xs font-bold text-white" aria-hidden="true">
                W
              </span>
              WhatsApp
              <span className="ml-auto text-xs" style={{ color: "var(--color-text-secondary)" }}>
                0821 2974 4243
              </span>
            </a>
            <a
              href={`mailto:${email}`}
              className="flex min-h-11 items-center gap-3 rounded-xl border px-3 text-sm transition-transform hover:translate-x-1"
              style={{
                color: "var(--color-text)",
                backgroundColor: "var(--color-bg-secondary)",
                borderColor: "var(--color-border)",
                fontFamily: "var(--font-body)",
              }}
            >
              <span
                className="flex h-7 w-7 items-center justify-center rounded-full border text-xs"
                style={{
                  color: "var(--color-text)",
                  borderColor: "var(--color-border)",
                }}
                aria-hidden="true"
              >
                @
              </span>
              Email
              <span className="ml-auto truncate text-xs" style={{ color: "var(--color-text-secondary)" }}>
                {email}
              </span>
            </a>
          </div>
        </div>
      )}

      <button
        type="button"
        aria-label={isOpen ? "Close contact options" : "Open contact options"}
        aria-expanded={isOpen}
        aria-controls="contact-options"
        onClick={() => setIsOpen((open) => !open)}
        className="flex h-14 w-14 items-center justify-center rounded-full border shadow-lg transition-transform duration-200 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4"
        style={{
          color: "var(--color-bg)",
          backgroundColor: "var(--color-text)",
          borderColor: "var(--color-border)",
          boxShadow: "0 8px 30px -10px color-mix(in srgb, var(--color-text) 55%, transparent)",
        }}
      >
        {isOpen ? (
          <svg
            aria-hidden="true"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="m18 6-12 12M6 6l12 12" />
          </svg>
        ) : (
          <svg
            aria-hidden="true"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5Z" />
            <path d="M8 11h.01M12 11h.01M16 11h.01" />
          </svg>
        )}
      </button>
    </div>
  );
}
