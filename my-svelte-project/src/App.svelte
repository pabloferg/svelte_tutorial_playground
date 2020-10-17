<link rel='stylesheet' href='/index.css'>

<script>

    import BasicCard from './components/BasicCard.svelte';
    import NavBar from './components/NavBar.svelte';
    import Dropdown from './components/Dropdown.svelte';
    import TemplateCard from './components/TemplateCard.svelte';




    import Counter from './Counter.svelte';
import { dirty_components } from 'svelte/internal';

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
        "image_location" : "United Kingdom",
        "card_title" : "Hogwarts",
        "card_price" : "£1,234",
        "discounted" : true
    },
    {
        "image_url" : "https://www.gamerevolution.com/assets/uploads/2018/04/Harry-Potter-Hogwarts-Mystery-1280x720.jpg",
        "image_alt" : "picture of hogwarts",
        "image_location" : "United Kingdom",
        "card_title" : "Hogwarts",
        "card_price" : "£1,234",
        "discounted" : true
    }
]


    let show_menu = true

</script>



<div class="antialiased text-gray-900">
    
    <div class="fixed w-full bg-gray-800 text-white flex justify-between">
     <NavBar show_menu={show_menu}/>
     <Dropdown class='' />
    </div>

    <div class='py-16 px-4'>
            <TemplateCard/>
    </div>



    


    <div class="bg-gray-200 min-h-screen py-16 items-center justify-center">

        {#if false}
        {#each destinations as destination}
            <div class='p-5'>
            <BasicCard destination={destination}/>
            </div>
        {/each}
        {/if}

    </div>



</div>

