<script>

    let shown = false 

    export function show() {
        shown = !shown;
				dispatch('show', shown);
        }

        

</script>


<div class=''>

    <header class='sm:flex'>



        <div class='flex items-center justify-between px-4 py-3'>
            <div>
                <button type='button' on:click={show} class='sm:hidden block text-gray-500 hover:text-white focus:text-white focus:outline-none'>
                        <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                        </svg>
                </button>
            </div>


            <div>
                <img class='h-6 w-auto' src='/img/ball_white.png' alt='nispero'>
            </div>

        </div>


        <div class='sm:hidden'>
            {#if shown}
                <div class='px-2 py-3 pb-4 sm:hidden'>
                    <a href=" " class='block px-2 py-0 text-white font-semibold hover:bg-gray-500 rounded'>Scouting</a>
                    <a href=" " class='mt-1 block px-2 py-1 text-white font-semibold hover:bg-gray-500 rounded'>Matches</a>
                    <a href=" " class='mt-1 block px-2 py-1 text-white font-semibold hover:bg-gray-500 rounded'>Performance</a>
                </div>
            {/if}
        </div>

        <div class='sm:block hidden sm:flex items-center'>
                <div class='px-2 py-3 pb-auto sm:flex p-auto'>
                    <a href=" " class=' px-4 py-auto text-white font-semibold hover:bg-gray-500 rounded'>Scouting</a>
                    <a href=" " class='  px-4 py-auto text-white font-semibold hover:bg-gray-500 rounded'>Matches</a>
                    <a href=" " class='  px-4 py-auto text-white font-semibold hover:bg-gray-500 rounded'>Performance</a>
                </div>
        </div>

    </header>


</div>


