import Image from "next/image";

const Card = (
    {
        children,
        backgroundImage,
    }: Readonly<{
        children: React.ReactNode;
        backgroundImage?: string;
    }>
 ) => {
    return (
        <div className="relative flex flex-col items-center rounded-xl border-2 border-slate-500 p-4 overflow-hidden">
            {backgroundImage && (
                <Image
                    src={backgroundImage}
                    alt=""
                    fill
                    className="object-cover opacity-10 pointer-events-none"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
            )}
            <div className="relative z-10 flex flex-col items-center w-full">
                {children}
            </div>
        </div>
    );
}

const CardTitle = (
    {
        children,
    }: Readonly<{
        children: React.ReactNode;
    }>
) => {
    return (
        <div className="flex flex-col items-center text-slate-100 pt-6 text-xl text-center">
            {children}
        </div>
    );
}

const CardBody = (
    {
        children,
    }: Readonly<{
        children: React.ReactNode;
    }>
) => {
    return (
        <div className="flex flex-col text-slate-200 m-6 p-6 rounded-xl border-2 border-slate-400 w-full h-full bg-slate-800/40 hover:bg-slate-800/90 transition-all duration-300">
            {children}
        </div>
    );
}

export {
    Card,
    CardTitle,
    CardBody
};