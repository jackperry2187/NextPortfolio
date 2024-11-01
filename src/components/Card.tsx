const Card = (
    {
        children,
    }: Readonly<{
        children: React.ReactNode;
    }>
 ) => {
    return (
        <div className="flex flex-col items-center bg-zinc-600 rounded-xl border-2 border-zinc-500 scroll-auto">
            {children}
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
        <div className="flex flex-col text-slate-200 bg-slate-800 m-6 p-6 rounded-xl border-2 border-zinc-500">
            {children}
        </div>
    );
}

export {
    Card,
    CardTitle,
    CardBody
};