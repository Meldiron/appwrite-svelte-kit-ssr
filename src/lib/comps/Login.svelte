<script lang="ts">
	import { AppwriteService } from '$lib/appwrite';

	let loginEmail = '';
	let loginPassword = '';

	async function login() {
		const response = await AppwriteService.login(loginEmail, loginPassword);
		console.log(response);
	}
</script>

<form on:submit|preventDefault={login}>
	<input type="text" placeholder="Email" bind:value={loginEmail} />
	<input type="password" placeholder="Password" bind:value={loginPassword} />

	<button type="submit">Login</button>
</form>
