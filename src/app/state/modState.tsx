'use client'

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { CurseforgeResponse, ModrinthResponse, ModStore } from "./modTypes";

export const useModStore = create<ModStore>()(
    persist(
        (set, get) => ({
            modrinth: null,
            updateModrinth: async () => {
                const GentleReminders = await fetch(`https://api.modrinth.com/v2/project/BSVV3neR`, {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                    }
                }).then((res) => res.json() as Promise<ModrinthResponse>);
            

                const Effigies = await fetch(`https://api.modrinth.com/v2/project/2seiKgF8`, {
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

                set({ modrinth: {
                    GRDownloads: GentleReminders.downloads,
                    GRFollowers: GentleReminders.followers,
                    EfDownloads: Effigies.downloads,
                    EfFollowers: Effigies.followers,
                    EpDownloads: Epitheca.downloads,
                    EpFollowers: Epitheca.followers
                }});
            },
            getModrinth: async () => {
                if (get().modrinth === null) await get().updateModrinth();
                return get().modrinth;
            },
            curseforge: null,
            updateCurseforge: async () => {
                const GentleReminders: CurseforgeResponse = await fetch(`https://api.curseforge.com/v1/mods/1124888`, {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'x-api-key': "$2a$10$uzfm11K.3f8pYOYkvrnnt.Ugsj4.wsX4qutoD3w9OEfvtXn6/9kOi" // TODO: move to env
                    }
                }).then((res) => res.json() as Promise<CurseforgeResponse>);
            
                const Effigies: CurseforgeResponse = await fetch(`https://api.curseforge.com/v1/mods/1441117`, {
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

                set({ curseforge: {
                    GRDownloads: GentleReminders.data.downloadCount,
                    EfDownloads: Effigies.data.downloadCount,
                    EpDownloads: Epitheca.data.downloadCount
                }});
            },
            getCurseforge: async () => {
                if (get().curseforge === null) await get().updateCurseforge();
                return get().curseforge;
            },
            timestamp: Date.now(),
        }),
        {
            name: 'ModStore',
            storage: createJSONStorage(() => localStorage),
            onRehydrateStorage: (_state) => {
                return (state) => {
                    if (state?.timestamp && Date.now() - state.timestamp > 1000 * 60 * 60 * 24) {
                        void state.updateModrinth();
                        void state.updateCurseforge();
                    }
                }
            }
        }
    ),
);