// Generated with gemini-2.5-pro-exp-03-25 through Cursor
'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import { useModStore } from "../state/modState";
import { useShallow } from "zustand/shallow";
import { type CurseforgeInfo, type ModrinthInfo } from "../state/modTypes";
import { Curseforge, Modrinth } from "~/components/icons";
import { type ModStatKeys } from "./projectsData";

// Helper component for consistent link styling & structure
const LinkOuter = ({ children }: { children: React.ReactNode }) => (
    <div className="flex items-center text-center text-sm gap-1"> {/* Added gap-1 for spacing icon and text */}
        {children}
    </div>
);

// Display component for CurseForge link with icon
const CurseforgeLinkDisplay = ({ href }: { href: string }) => (
    <Link href={href} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
        <Curseforge size="sm" />
    </Link>
);

// Display component for Modrinth link with icon
const ModrinthLinkDisplay = ({ href }: { href: string }) => (
    <Link href={href} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
        <Modrinth size="sm" />
    </Link>
);

interface ModProjectClientInfoProps {
  curseforgePagePath: string; // e.g., "minecraft/mc-mods/gentlereminders"
  modrinthPagePath: string;   // e.g., "mod/gentlereminders"
  statKeys: ModStatKeys;
}

export const ModProjectClientInfo: React.FC<ModProjectClientInfoProps> = ({
  curseforgePagePath,
  modrinthPagePath,
  statKeys,
}) => {
  const [modrinthProjectInfo, setModrinthProjectInfo] = useState<ModrinthInfo | null>(null);
  const [curseforgeProjectInfo, setCurseforgeProjectInfo] = useState<CurseforgeInfo | null>(null);

  const [getModrinthData, getCurseforgeData] = useModStore(
    useShallow((state) => [state.getModrinth, state.getCurseforge])
  );

  useEffect(() => {
    const getInfo = async () => {
      try {
        const mInfo = await getModrinthData();
        setModrinthProjectInfo(mInfo);
        const cInfo = await getCurseforgeData();
        setCurseforgeProjectInfo(cInfo);
      } catch (error) {
        console.error("Failed to fetch mod info:", error);
        // Optionally set an error state here
      }
    };

    // Fetch only if data hasn't been loaded yet
    if (!modrinthProjectInfo || !curseforgeProjectInfo) {
      void getInfo();
    }
  }, [modrinthProjectInfo, curseforgeProjectInfo, getModrinthData, getCurseforgeData]);

  // Safely access nested stat keys
  const cDownloads = curseforgeProjectInfo?.[statKeys.curseforgeDownloadsKey] ?? 'Loading';
  const mDownloads = modrinthProjectInfo?.[statKeys.modrinthDownloadsKey] ?? 'Loading';
  const mFollowers = modrinthProjectInfo?.[statKeys.modrinthFollowersKey] ?? 'Loading';

  return (
    <>
      <LinkOuter>
        <CurseforgeLinkDisplay href={`https://www.curseforge.com/${curseforgePagePath}`} />
        <span>: {cDownloads} Downloads</span>
      </LinkOuter>
      <LinkOuter>
        <ModrinthLinkDisplay href={`https://modrinth.com/${modrinthPagePath}`} />
        <span>: {mDownloads} Downloads, {mFollowers} followers</span>
      </LinkOuter>
    </>
  );
}; 