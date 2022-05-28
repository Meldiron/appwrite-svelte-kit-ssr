import { AppwriteService, appwrite } from '$lib/appwrite';
import * as cookie from 'cookie';

export async function get({ request }: any) {
	// Get cookie from request
	const cookies = cookie.parse(request.headers.get("cookie") || '');
	const projectId = 'svelteKitSsr';
	const authCookie = cookies[`a_session_${projectId.toLowerCase()}_legacy`];

	// If cookies present, set it on Appwerite SDK client
	if (authCookie) {
		const authCookies: any = {};
		authCookies[`a_session_${projectId}`] = authCookie;
		appwrite.headers['X-Fallback-Cookies'] = authCookies;
	}


	// Get account info
	try {
		const profile = await AppwriteService.getAccount();

		return {
			body: {
				profile: {
					email: profile.email,
					name: profile.name
				}
			}
		};
	} catch (err) {
		console.log(err);
		// Its fine, we dont have profile
	}

	// If get failed, return no profile (user not signed in)
	return {
		body: {
			profile: null
		}
	};
}