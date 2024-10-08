export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-2 md:py-10">
      <div className="inline-block max-w-6xl text-center justify-center">
        {children}
      </div>
    </section>
  );
}
