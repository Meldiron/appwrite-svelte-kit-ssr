<script lang="ts">
	import { AppwriteService } from '$lib/appwrite';

	export let profile: { email: string; name: string } | null;

	async function loadProfile() {
		const response = await AppwriteService.getAccount();

		if (!profile) {
			profile = {
				email: response.email,
				name: response.name
			};
		}
	}
</script>

<p>Email: {profile?.email}</p>
<p>Name: {profile?.name}</p>

<button on:click={loadProfile}>Load profile</button>
