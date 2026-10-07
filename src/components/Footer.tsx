export default function Footer() {
  return (
    <footer
      className="relative z-10 py-10 text-center"
      style={{
        borderTop: "1px solid var(--color-border)",
        color: "var(--color-text-secondary)",
        fontFamily: "var(--font-body)",
      }}
    >
      <p className="text-sm tracking-wide">
        &copy; 2025 Ryu Aditya. All rights reserved.
      </p>
    </footer>
  );
}
