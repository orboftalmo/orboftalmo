import { Container } from "@/components/ui/Container";
import { Breadcrumb, type BreadcrumbItem } from "@/components/ui/Breadcrumb";

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumb,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumb: BreadcrumbItem[];
}) {
  return (
    <section className="border-b border-line bg-navy-deep py-16 text-white sm:py-20">
      <Container>
        <div className="mb-6">
          <Breadcrumb items={breadcrumb} variant="dark" />
        </div>
        {eyebrow && (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70">{description}</p>
        )}
      </Container>
    </section>
  );
}
