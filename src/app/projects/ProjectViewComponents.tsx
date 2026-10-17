import Link from "next/link";
import { Expander } from "~/components/Expander";
import { GitHub } from "~/components/icons";

export const ProjectRow = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="grid grid-cols-1 gap-5 p-3 md:grid-cols-2 xl:grid-cols-3">
      {children}
    </div>
  );
};

export const ModProjectRow = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="grid grid-cols-1 gap-5 p-3 lg:grid-cols-3">{children}</div>
  );
};

export const ProjectTitle = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <h3 className="text-3xl">{children}</h3>;
};

export const ProjectDescription = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Expander header="Description" startsOpen>
      <div className="p-2">{children}</div>
    </Expander>
  );
};

export const GitHubLink = ({
  href,
}: Readonly<{
  href: string;
}>) => {
  return (
    <Link href={href} className="hover:text-blue-400">
      <GitHub size="sm" />
    </Link>
  );
};