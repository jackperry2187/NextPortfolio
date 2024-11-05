
type CurseforgeResponse = {
    data: {
        downloadCount: number;
    }
}

type CurseforgeInfo = {
    GRDownloads: number;
    EpDownloads: number;
}

export const getCurseforgeInfo = async (): Promise<CurseforgeInfo> => {
    const GentleReminders: CurseforgeResponse = await fetch(`https://api.curseforge.com/v1/mods/1124888`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'x-api-key': "$2a$10$uzfm11K.3f8pYOYkvrnnt.Ugsj4.wsX4qutoD3w9OEfvtXn6/9kOi" // TODO: move to env
        }
    }).then((res) => res.json() as Promise<CurseforgeResponse>);

    const Epitheca: CurseforgeResponse = await fetch(`https://api.curseforge.com/v1/mods/1102378`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'x-api-key': "$2a$10$uzfm11K.3f8pYOYkvrnnt.Ugsj4.wsX4qutoD3w9OEfvtXn6/9kOi" // TODO: move to env
        }
    }).then((res) => res.json() as Promise<CurseforgeResponse>);

    return {
        GRDownloads: GentleReminders.data.downloadCount,
        EpDownloads: Epitheca.data.downloadCount
    }
}