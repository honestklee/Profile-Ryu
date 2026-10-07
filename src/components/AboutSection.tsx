import ExpandCards from "@/components/Accordion";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="flex flex-col items-center px-8 py-32 sm:px-12"
    >
      {/* Section Title */}
      <h1
        className="mb-6 text-center text-4xl tracking-wide sm:text-5xl"
        style={{
          fontFamily: "var(--font-heading)",
          color: "var(--color-text)",
        }}
      >
        About Me
      </h1>

      {/* Description */}
      <p
        className="mb-28 max-w-xl text-center text-[0.95rem] leading-[1.8] sm:text-base"
        style={{
          fontFamily: "var(--font-body)",
          color: "var(--color-text-secondary)",
          letterSpacing: "0.01em",
        }}
      >
        I studied at President University majoring in Information Technology in
        the field of Artificial Intelligence. I have a passion for drawing,
        editing videos, and exploring various fields of design — both for web
        and personal creative projects.
      </p>

      {/* Expand Cards */}
      <ExpandCards />
    </section>
  );
}
