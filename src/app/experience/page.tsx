import { HiveMind, IDTech, Jenks, MonmouthResearcher, NovaGames, StemPlus, StevensCA, ThinkAlpha } from "./experience";

const Experience = () => {
    return (
        <div className="container flex flex-col items-center justify-center py-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <HiveMind />
                <ThinkAlpha />
                <StevensCA />
                <IDTech />
                <NovaGames />
                <Jenks />
                <MonmouthResearcher />
                <StemPlus />
            </div>
        </div>
    )
}

export default Experience;