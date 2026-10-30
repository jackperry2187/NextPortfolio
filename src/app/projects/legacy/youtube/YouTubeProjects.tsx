import { Card, CardBody, CardTitle } from "~/components/Card";
import { WebLink } from "~/components/Link";
import {
    YOUTUBE_CHANNEL_HANDLE,
    YOUTUBE_CHANNEL_URL,
    YOUTUBE_STATS_AS_OF,
    youtubeChannelStats,
    youtubeVideosData,
    type YouTubeVideoData,
} from "./youtubeVideosData";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// Parsed manually so a YYYY-MM-DD string isn't shifted a day by UTC-to-local conversion.
const formatDate = (date: string) => {
    const [year, month, day] = date.split("-").map(Number);
    if (!year || !month || !day) return date;
    return `${MONTHS[month - 1]} ${day}, ${year}`;
};

// Stable sort, so videos sharing an upload date keep the data file's newest-first order.
const sortedVideos = [...youtubeVideosData].sort((a, b) => b.uploadedAt.localeCompare(a.uploadedAt));

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

const YouTubeCard = (
    {
        video,
    }: Readonly<{
        video: YouTubeVideoData;
    }>
) => {
    return (
        <Card backgroundImage={video.thumbnail}>
            <CardTitle>
                <h3 className="text-2xl">
                    <WebLink href={video.url}>{video.title}</WebLink>
                </h3>
            </CardTitle>
            <CardBody>
                <p className="text-center text-sm text-slate-400">
                    {video.duration} · Uploaded {formatDate(video.uploadedAt)}
                </p>
                <div className="flex flex-wrap justify-center gap-x-5 gap-y-3 pt-4">
                    <Stat label="Views" value={video.stats.views} />
                    <Stat label="Likes" value={video.stats.likes} />
                </div>
            </CardBody>
        </Card>
    );
}

export const YouTubeProjects = () => {
    return (
        <div className="flex flex-col gap-6 p-3">
            <p className="text-center text-sm text-slate-400">
                Uploaded to YouTube as{" "}
                <WebLink href={YOUTUBE_CHANNEL_URL}>{YOUTUBE_CHANNEL_HANDLE}</WebLink> between 2012
                and 2013. Stats as of {YOUTUBE_STATS_AS_OF}.
            </p>

            <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 rounded-xl border-2 border-slate-500 bg-slate-800/40 p-4">
                <Stat label="Subscribers" value={youtubeChannelStats.subscribers} size="lg" />
                <Stat label="Total Views" value={youtubeChannelStats.totalViews} size="lg" />
                <Stat label="Videos" value={youtubeChannelStats.videoCount} size="lg" />
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                {sortedVideos.map((video) => (
                    <YouTubeCard key={video.id} video={video} />
                ))}
            </div>
        </div>
    );
}
