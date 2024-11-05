import Link from "next/link";

export const WebLink = (
    {
        children,
        href,
    }: Readonly<{
        children: React.ReactNode;
        href: string;
    }>
) => {
    return (
        <Link href={href} className="underline underline-offset-4 hover:text-blue-400">{children}</Link>
    );
}