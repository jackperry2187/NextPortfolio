import { useCallback, useState } from "react";
import CaretDownFill from "./icons/CaretDownFill";
import CaretDown from "./icons/CaretDown";

export const Expander = (
    {
        children,
        startsOpen,
        header,
    }: Readonly<{
        children: React.ReactNode;
        startsOpen: boolean;
        header: string;
    }>
) => {
    const [expanded, setExpanded] = useState(startsOpen);

    const onExpandedChange = useCallback(() => {
        setExpanded((expanded) => !expanded);
    }, [setExpanded]);

    return (
        <div className="flex flex-col p-2">
            <div className="text-center border-b border-slate-600 text-xl pt-2">
                {header} 
                <button onClick={onExpandedChange}>
                    {expanded ? <CaretDownFill /> : <CaretDown />}
                </button>
            </div>
            {expanded ? children : null}
        </div>
    );
}