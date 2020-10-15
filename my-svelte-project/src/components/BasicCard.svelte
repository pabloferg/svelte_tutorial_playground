<script>
    export let destination
</script>


<div class='bg-white border shadow-md hover:shadow-2xl rounded-lg overflow-hidden'>

        <img class='h-20 w-full object-cover' src={destination.image_url} alt={destination.image_alt}>
        <div class='p-5'>
            <h4 class='font-semibold text-lg' >{destination.card_title}</h4>
            <div class='text-gray-600 text-xs'>
                {destination.image_location}
            </div>
            <div class='mt-3 flex w-auto items-center'>
                <div class='font-bold w-1/3' >
                {destination.card_price}
                </div>
                <div class='font-bold w-1/3'>
                </div>
                {#if destination.discounted}
                    <div class='w-1/3 bg-green-200 rounded-full text-center text-green-800 text-sm m-auto justify-end truncate' >
                        discounted
                    </div>
                {/if}

            </div>
        </div>



</div>

