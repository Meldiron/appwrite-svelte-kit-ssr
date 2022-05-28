<script lang="ts">
	import { AppwriteService } from '$lib/appwrite';

	let registerEmail = '';
	let registerPassword = '';
	let registerName = '';

	async function register() {
		const response = await AppwriteService.register(registerEmail, registerPassword, registerName);
		console.log(response);
	}
</script>

<form on:submit|preventDefault={register}>
	<input type="text" placeholder="Email" bind:value={registerEmail} />
	<input type="text" placeholder="Name" bind:value={registerName} />
	<input type="password" placeholder="Password" bind:value={registerPassword} />

	<button type="submit">Register</button>
</form>
