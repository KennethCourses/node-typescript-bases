export const httpClientPlugin = {
    get: async (url: string) => {
        const resp = await fetch(url);
        return await resp.json();
    }
}