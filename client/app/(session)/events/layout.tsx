export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-4">
      <div className="container mx-auto max-w-7xl flex-grow">{children}</div>
    </section>
  );
}
