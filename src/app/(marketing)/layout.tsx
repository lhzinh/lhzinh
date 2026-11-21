import Breadcrumbs from "@/components/shared/breadcrumbs";

export default function MarketingLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <Breadcrumbs />
      <main className="max-md:px-4">{children}</main>
    </>
  );
}
