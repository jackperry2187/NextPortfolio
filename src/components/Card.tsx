const Card = (
    {
        children,
    }: Readonly<{
        children: React.ReactNode;
    }>
 ) => {
    return (
        <div className="flex flex-col items-center rounded-xl border-2 border-slate-500 overflow-auto">
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
        <div className="flex flex-col text-slate-200 m-6 p-6 rounded-xl border-2 border-slate-400">
            {children}
        </div>
    );
}

export {
    Card,
    CardTitle,
    CardBody
};