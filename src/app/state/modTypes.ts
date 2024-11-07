export type ModStore = {
    modrinth: ModrinthInfo | null;
    updateModrinth: () => Promise<void>;
    getModrinth: () => Promise<ModrinthInfo | null>;
    curseforge: CurseforgeInfo | null;
    updateCurseforge: () => Promise<void>;
    getCurseforge: () => Promise<CurseforgeInfo | null>;
    timestamp: number;
}

export type ModrinthResponse = {
    downloads: number;
    followers: number;
}

export type CurseforgeResponse = {
    data: {
        downloadCount: number;
    }
}

export type ModrinthInfo = {
    GRDownloads: number;
    GRFollowers: number;
    EpDownloads: number;
    EpFollowers: number;
}

export type CurseforgeInfo = {
    GRDownloads: number;
    EpDownloads: number;
}