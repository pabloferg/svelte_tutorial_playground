<script>
    import {db} from '../firestore.js'
    import User from './User.svelte'

    let users= []
    let email = ''
    let name = ''

    db.collection('users').orderBy('created').onSnapshot( data => {
        users = data.docs
    })

    const addUser = () => {
        const created = new Date().getTime() // epoch
        db.collection('users').add({created, email, name})
        email = ''
        name = ''
    }
</script>

<div>
    <form on:submit|preventDefault={addUser}>
        <input type="text" bind:value={email}>
        <input type="text" bind:value={name}>
        <button>ADD</button>
    </form>
</div>

<div id="users">
    {#each users as user}
        <User id={user.id} user={user.data()}/>
    {/each}
</div>




<style>

</style>
