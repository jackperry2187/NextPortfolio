import { Card, CardBody, CardTitle } from "~/components/Card";
import { WebLink } from "~/components/Link";
import {
    PMC_PROFILE_URL,
    PMC_STATS_AS_OF,
    PMC_USERNAME,
    pmcProjectsData,
    type PmcProjectData,
} from "./pmcProjectsData";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// Parsed manually so a YYYY-MM-DD string isn't shifted a day by UTC-to-local conversion.
const formatDate = (date: string) => {
    const [year, month, day] = date.split("-").map(Number);
    if (!year || !month || !day) return date;
    return `${MONTHS[month - 1]} ${day}, ${year}`;
};

const sortedProjects = [...pmcProjectsData].sort((a, b) => b.uploadedAt.localeCompare(a.uploadedAt));

const totals = pmcProjectsData.reduce(
    (acc, { stats }) => ({
        views: acc.views + stats.views,
        downloads: acc.downloads + (stats.downloads ?? 0),
        comments: acc.comments + (stats.comments ?? 0),
        diamonds: acc.diamonds + stats.diamonds,
        favorites: acc.favorites + stats.favorites,
    }),
    { views: 0, downloads: 0, comments: 0, diamonds: 0, favorites: 0 },
);

const Stat = (
    {
        label,
        value,
        size = "sm",
    }: Readonly<{
        label: string;
        value: number;
        size?: "sm" | "lg";
    }>
) => {
    return (
        <div className="flex flex-col items-center">
            <span className={size === "lg" ? "text-2xl text-sky-300" : "text-lg text-slate-100"}>
                {value.toLocaleString()}
            </span>
            <span className="text-xs uppercase tracking-wide text-slate-400">{label}</span>
        </div>
    );
}

const PmcCard = (
    {
        project,
    }: Readonly<{
        project: PmcProjectData;
    }>
) => {
    return (
        <Card backgroundImage={project.backgroundImage}>
            <CardTitle>
                <h3 className="text-2xl">
                    <WebLink href={project.url}>{project.title}</WebLink>
                </h3>
                <p className="pt-1 text-sm text-slate-400">{project.subtitle}</p>
            </CardTitle>
            <CardBody>
                <p className="text-center text-sm text-slate-400">
                    Uploaded {formatDate(project.uploadedAt)}
                    {project.updatedAt && ` · Updated ${formatDate(project.updatedAt)}`}
                </p>
                <div className="flex flex-wrap justify-center gap-x-5 gap-y-3 pt-4">
                    <Stat label="Views" value={project.stats.views} />
                    {project.stats.downloads !== undefined && (
                        <Stat label="Downloads" value={project.stats.downloads} />
                    )}
                    {project.stats.comments !== undefined && (
                        <Stat label="Comments" value={project.stats.comments} />
                    )}
                    <Stat label="Diamonds" value={project.stats.diamonds} />
                    <Stat label="Favorites" value={project.stats.favorites} />
                </div>
            </CardBody>
        </Card>
    );
}

export const PlanetMinecraftProjects = () => {
    return (
        <div className="flex flex-col gap-6 p-3">
            <p className="text-center text-sm text-slate-400">
                Posted to Planet Minecraft as{" "}
                <WebLink href={PMC_PROFILE_URL}>{PMC_USERNAME}</WebLink> between 2013 and 2018.
                Stats as of {PMC_STATS_AS_OF}.
            </p>

            <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 rounded-xl border-2 border-slate-500 bg-slate-800/40 p-4">
                <Stat label="Total Views" value={totals.views} size="lg" />
                <Stat label="Total Downloads" value={totals.downloads} size="lg" />
                <Stat label="Total Comments" value={totals.comments} size="lg" />
                <Stat label="Total Diamonds" value={totals.diamonds} size="lg" />
                <Stat label="Total Favorites" value={totals.favorites} size="lg" />
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                {sortedProjects.map((project) => (
                    <PmcCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
}
