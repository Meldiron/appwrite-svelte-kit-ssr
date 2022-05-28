<script lang="ts">
	import Register from '$lib/comps/Register.svelte';
	import Profile from '$lib/comps/Profile.svelte';
	import Login from '$lib/comps/Login.svelte';

	export let profile: { email: string; name: string } | null;
</script>

<h1>Register</h1>

<Register />

<hr />

<h1>Login</h1>

<Login />

<h1>Account</h1>

<Profile {profile} />
