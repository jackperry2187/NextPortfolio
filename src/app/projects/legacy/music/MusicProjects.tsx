import Link from "next/link";
import { Card, CardBody, CardTitle } from "~/components/Card";
import { SoundCloud, YouTube } from "~/components/icons";
import { WebLink } from "~/components/Link";
import {
    MUSIC_SOUNDCLOUD_HANDLE,
    MUSIC_SOUNDCLOUD_PROFILE_URL,
    MUSIC_STATS_AS_OF,
    MUSIC_YOUTUBE_CHANNEL_HANDLE,
    MUSIC_YOUTUBE_CHANNEL_URL,
    musicSongsData,
    musicTotals,
    type MusicSongData,
} from "./musicSongsData";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// Parsed manually so a YYYY-MM-DD string isn't shifted a day by UTC-to-local conversion.
const formatDate = (date: string) => {
    const [year, month, day] = date.split("-").map(Number);
    if (!year || !month || !day) return date;
    return `${MONTHS[month - 1]} ${day}, ${year}`;
};

// Stable sort, so songs sharing an upload date keep the data file's newest-first order.
const sortedSongs = [...musicSongsData].sort((a, b) => b.uploadedAt.localeCompare(a.uploadedAt));

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

const PlatformLink = (
    {
        href,
        children,
    }: Readonly<{
        href: string;
        children: React.ReactNode;
    }>
) => {
    return (
        <Link href={href} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            {children}
        </Link>
    );
}

const MusicCard = (
    {
        song,
    }: Readonly<{
        song: MusicSongData;
    }>
) => {
    return (
        <Card backgroundImage={song.thumbnail}>
            <CardTitle>
                <h3 className="text-2xl">{song.title}</h3>
                <div className="flex items-center justify-center gap-4 pt-3">
                    <PlatformLink href={song.youtube.url}>
                        <YouTube size="sm" />
                    </PlatformLink>
                    <PlatformLink href={song.soundcloud.url}>
                        <SoundCloud size="sm" />
                    </PlatformLink>
                </div>
            </CardTitle>
            <CardBody>
                <p className="text-center text-sm text-slate-400">
                    Released {formatDate(song.uploadedAt)}
                </p>
                <div className="flex flex-wrap justify-center gap-x-5 gap-y-3 pt-4">
                    <Stat label="YT Views" value={song.youtube.views} />
                    <Stat label="YT Likes" value={song.youtube.likes} />
                    <Stat label="SC Listens" value={song.soundcloud.listens} />
                    <Stat label="SC Likes" value={song.soundcloud.likes} />
                </div>
            </CardBody>
        </Card>
    );
}

export const MusicProjects = () => {
    return (
        <div className="flex flex-col gap-6 p-3">
            <p className="text-center text-sm text-slate-400">
                Written and produced as JWolf, posted to{" "}
                <WebLink href={MUSIC_YOUTUBE_CHANNEL_URL}>{MUSIC_YOUTUBE_CHANNEL_HANDLE}</WebLink>{" "}
                and{" "}
                <WebLink href={MUSIC_SOUNDCLOUD_PROFILE_URL}>{MUSIC_SOUNDCLOUD_HANDLE}</WebLink>{" "}
                between 2019 and 2020. Stats as of {MUSIC_STATS_AS_OF}.
            </p>

            <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 rounded-xl border-2 border-slate-500 bg-slate-800/40 p-4">
                <Stat label="Songs" value={musicTotals.uploads} size="lg" />
                <Stat label="YouTube Views" value={musicTotals.youtubeViews} size="lg" />
                <Stat label="YouTube Likes" value={musicTotals.youtubeLikes} size="lg" />
                <Stat label="SoundCloud Listens" value={musicTotals.soundcloudListens} size="lg" />
                <Stat label="SoundCloud Likes" value={musicTotals.soundcloudLikes} size="lg" />
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                {sortedSongs.map((song) => (
                    <MusicCard key={song.id} song={song} />
                ))}
            </div>
        </div>
    );
}
