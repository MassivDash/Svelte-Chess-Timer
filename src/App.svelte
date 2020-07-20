<script>
  import Clock from './Clock.svelte'
  import Navbar from './Navbar.svelte'

  let started = false
  let reset = false
  let holder

  let otherSidePlaying = null
  $: change = otherSidePlaying

  function handleClick() {
    otherSidePlaying = !otherSidePlaying
  }
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
	margin: 0 auto;
	background: repeat url('/assets/greyzz.png');
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  section {
    display: flex;
    max-width: 90vw;
    flex-direction: column;
    align-items: center;
	justify-content: center;
	margin: 25px;
	padding: 25px;
  }

  div {
    display: flex;
    width: 100%;
	max-width: 1024px;
	
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 640px) {
    div {
      display: flex;
      width: 100%;
      max-width: 1024px;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }

    main {
      max-width: none;
	  display: flex;
	  height: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
</style>

<main>
  <Navbar />
  <h1>Svelte Chess Timer</h1>
  <div class:holder>
    <section>
      <Clock reset={reset} started={started} amIPlaying={started && otherSidePlaying} {handleClick} />
    </section>
    <section>
      <Clock reset={reset} started={started} amIPlaying={started && !otherSidePlaying} {handleClick} />
    </section>
  </div>
  <button on:click={() => {started = !started; reset = false }}>{started ? 'Stop' : 'Start'}</button>

	{#if started}
	<button on:click={() => {started = false; reset = true}}>
		Reset
	</button>
{/if}

</main>
