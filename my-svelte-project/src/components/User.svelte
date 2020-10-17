<link rel='stylesheet' href='/index.css'>

<script>
    import {db} from '../firestore.js'
    export let id
    export let user

    const deleteUser = () => {
        db.collection('users').doc(id).delete()
    }

    const updateUser = () => {
        db.collection('users').doc(id).update({
            "email":user.email,
            "name":user.name
        })
    }

</script>

<div class="user text-red-600">
    <input on:change={updateUser} type="text" bind:value={user.email}>
    <input on:change={updateUser} type="text" bind:value={user.name}>
    <button on:click={deleteUser}>X</button>

</div>




<style>

</style>
