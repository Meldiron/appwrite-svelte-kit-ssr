import { Appwrite } from 'appwrite';

// Init your Web SDK
export const appwrite = new Appwrite();

appwrite
    .setEndpoint('http://localhost/v1') // Your Appwrite Endpoint
    .setProject('svelteKitSsr') // Your project ID
    ;

export const AppwriteService = {
    register: async (email: string, password: string, name: string | undefined) => {
        return await appwrite.account.create('unique()', email, password, name);
    },
    login: async (email: string, password: string) => {
        return await appwrite.account.createSession(email, password);
    },
    getAccount: async () => {
        console.log(appwrite.headers);
        return await appwrite.account.get();
    },
}