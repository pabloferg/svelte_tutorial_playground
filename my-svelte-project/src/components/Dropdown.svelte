<script>
    let shown = false 

        export function show() {
            shown = !shown;
                    dispatch('show', shown);
            }
</script>

<div class='p-1 relative mr-5 '>

    <button on:click={show} class='relative z-10 block h-10 w-10  rounded-full overflow-hidden border-2 border-gray-600 focus:outline-none focus:border-gray-400'>
        <img class="h-full w-full object-cover" src="https://pbs.twimg.com/profile_images/1289593791096279048/Dfejz0nm_400x400.jpg" alt='user avatar'>
    </button>
    

    {#if shown}
    <button on:click={show} class='fixed inset-0 h-full w-full bg-black opacity-50 cursor-default focus:outline-none' tabindex='-1'></button>


    <div class="absolute right-0 mt-2 w-40 bg-white rounded-lg py-2 shadow-lg">
        <a href=' ' class='block px-4 py-2 text-gray-800 hover:bg-gray-700 hover:text-white'>Account settings</a>
        <a href=' ' class='block px-4 py-2 text-gray-800 hover:bg-gray-700 hover:text-white'>Support</a>
        <a href=' ' class='block px-4 py-2 text-gray-800 hover:bg-gray-700 hover:text-white'>Sign out</a>
    </div>
    

    {/if}
</div>