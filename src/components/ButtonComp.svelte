<script>
	export let text;

	let buttonText = 'Button';

	function handleClick() {
		buttonText = 'Button Clicked';
	}
</script>

<h1>{text}</h1>

<button on:click={handleClick}>{buttonText}</button>
