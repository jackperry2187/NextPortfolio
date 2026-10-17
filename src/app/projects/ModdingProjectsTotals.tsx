"use client";

import { useShallow } from "zustand/shallow";
import { useModStore } from "../state/modState";
import { type ModStatKeys } from "./projectsData";

const Stat = ({
  label,
  value,
}: Readonly<{
  label: string;
  value: number | "Loading";
}>) => {
  return (
    <div className="flex flex-col items-center">
      <span className="text-2xl text-sky-300">
        {typeof value === "number" ? value.toLocaleString() : value}
      </span>
      <span className="text-xs uppercase tracking-wide text-slate-400">
        {label}
      </span>
    </div>
  );
};

export const ModdingProjectsTotals = ({
  statKeys,
}: Readonly<{
  statKeys: ModStatKeys[];
}>) => {
  const [modrinthInfo, curseforgeInfo] = useModStore(
    useShallow((state) => [state.modrinth, state.curseforge]),
  );

  const totals = statKeys.reduce(
    (acc, keys) => ({
      curseforgeDownloads:
        acc.curseforgeDownloads +
        (curseforgeInfo?.[keys.curseforgeDownloadsKey] ?? 0),
      modrinthDownloads:
        acc.modrinthDownloads +
        (modrinthInfo?.[keys.modrinthDownloadsKey] ?? 0),
      modrinthFollowers:
        acc.modrinthFollowers +
        (modrinthInfo?.[keys.modrinthFollowersKey] ?? 0),
    }),
    { curseforgeDownloads: 0, modrinthDownloads: 0, modrinthFollowers: 0 },
  );

  const value = modrinthInfo && curseforgeInfo ? undefined : "Loading";

  return (
    <div className="mx-3 mb-1 flex flex-wrap justify-center gap-x-10 gap-y-4 rounded-xl border-2 border-slate-500 bg-slate-800/40 p-4">
      <Stat
        label="Total CurseForge Downloads"
        value={value ?? totals.curseforgeDownloads}
      />
      <Stat
        label="Total Modrinth Downloads"
        value={value ?? totals.modrinthDownloads}
      />
      <Stat
        label="Total Modrinth Followers"
        value={value ?? totals.modrinthFollowers}
      />
    </div>
  );
};
