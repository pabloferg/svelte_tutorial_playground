<link rel='stylesheet' href='/index.css'>

<script>

    import BasicCard from './components/BasicCard.svelte';
    import NavBar from './components/NavBar.svelte';


    import Counter from './Counter.svelte';

    let destinations =  [
            {
        "image_url" : "https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
        "image_alt" : "plane in forest",
        "image_location" : "Big Forest",
        "card_title" : "Mystery Plane",
        "card_price" : "£2,586",
        "discounted" : true
    },
    {
        "image_url" : "https://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/Spain/Valencia/santa-maria-valencia-attractions-guide-lead.jpg",
        "image_alt" : "picture of Valencia",
        "image_location" : "Valencia",
        "card_title" : "Valencia City",
        "card_price" : "£834",
        "discounted" : false
    },
    {
        "image_url" : "https://www.gamerevolution.com/assets/uploads/2018/04/Harry-Potter-Hogwarts-Mystery-1280x720.jpg",
        "image_alt" : "picture of hogwarts",
        "image_location" : "Hogwarts",
        "card_title" : "Hogwarts",
        "card_price" : "£4384",
        "discounted" : true
    }
]





</script>



<div class="antialiased text-gray-900">
    <div class="bg-gray-800  text-white ">
     <NavBar/>
    </div>

    <p>Hola! Welcome to my page.</p>

    <div class="bg-gray-200 min-h-screen p-0  items-center justify-center">

        {#each destinations as destination}
            <div class='p-5'>
            <BasicCard destination={destination}/>
            </div>
        {/each}


    </div>



</div>

