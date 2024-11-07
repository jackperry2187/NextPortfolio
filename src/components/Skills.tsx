import { Expander } from "./Expander";

const Skills = (
    {
        children,
    }: Readonly<{
        children: React.ReactNode;
    }>
) => {
    return (
        <Expander startsOpen={false} header="Skills">
            {children}
        </Expander>
    )
}

const SkillGroup = (
    {
        children,
        id,
    }: Readonly<{
        children: React.ReactNode;
        id: string;
    }>
) => {
    return (
        <div>
            <ul className="grid grid-cols-2 border-b border-slate-600 p-2 list-disc" id={id}>
                {children}
            </ul>
        </div>
    );
}

const Skill = (
    {
        children,
    }: Readonly<{
        children: React.ReactNode;
    }>
) => {
    return (
        <li>
            {children}
        </li>
    );
}

export {
    Skills,
    SkillGroup,
    Skill
}