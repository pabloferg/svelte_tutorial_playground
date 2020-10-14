<script>

    let image_url = "https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
    let image_alt = "plane in forest"
    let image_location = 'Big Forest'
    let card_title = "Mystery Plane"
    let card_price = "£2,586"
    let card_rating = "5"
    $: discounted = true


</script>


<div class='bg-white border shadow-md rounded-lg overflow-hidden'>

        <img src={image_url} alt={image_alt}>

        <div class='p-5'>
            <h4 class='font-semibold text-lg' >{card_title}</h4>
            <div class='text-gray-600 text-xs'>
                {image_location}
            </div>
            <div class='mt-3 flex w-auto'>
                <div class='font-bold w-1/3' >
                {card_price}
                </div>
                <div class='font-bold w-1/3'>
                </div>
                {#if discounted}
                    <div class='w-1/3 bg-green-200 rounded-full text-center text-green-800 text-sm m-auto justify-end' >
                        discounted
                    </div>
                {/if}

            </div>
        </div>



</div>

