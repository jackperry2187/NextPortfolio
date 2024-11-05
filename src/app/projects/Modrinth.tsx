type ModrinthResponse = {
    downloads: number;
    followers: number;
}

type ModrinthInfo = {
    GRDownloads: number;
    GRFollowers: number;
    EpDownloads: number;
    EpFollowers: number;
}

export const getModrinthInfo = async (): Promise<ModrinthInfo> => {
    const GentleReminders = await fetch(`https://api.modrinth.com/v2/project/BSVV3neR`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        }
    }).then((res) => res.json() as Promise<ModrinthResponse>);

    const Epitheca = await fetch(`https://api.modrinth.com/v2/project/GQBNryV8`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        }
    }).then((res) => res.json() as Promise<ModrinthResponse>);

    return {
        GRDownloads: GentleReminders.downloads,
        GRFollowers: GentleReminders.followers,
        EpDownloads: Epitheca.downloads,
        EpFollowers: Epitheca.followers
    }
}