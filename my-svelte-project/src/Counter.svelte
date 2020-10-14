<script>
	let count = 0;

	function handleClick() {
		count += 1
	}
</script>

<button class="text-red-400 p-10" on:click={handleClick}>	Clicked {count} {count === 1 ? 'time' : 'times'}</button>