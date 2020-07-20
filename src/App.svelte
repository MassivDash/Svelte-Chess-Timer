<script>
  import Clock from './Components/Clock/Clock.svelte'
  import Navbar from './Components/Navbar/Navbar.svelte'
  import IconButton from './Components/IconButton/IconButton.svelte'

  let started = false
  let reset = false
  let timeOver = false
  let holder

  let otherSidePlaying = null
  $: change = otherSidePlaying

  function handleClick() {
    otherSidePlaying = !otherSidePlaying
  }
</script>

<style>
  main {
    max-width: 100vw;
    text-align: center;
    padding: 1em;
    margin: 0 auto;
    background: repeat url('/assets/greyzz.png');
  }

  section {
    display: flex;
    max-width: 95vw;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  div {
    display: flex;
    width: 100%;
    max-width: 1024px;

    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .controls {
    display: flex;
    flex-direction: row;
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

    section {
      display: flex;
      max-width: 90vw;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 0 25px;
      padding: 10px 25px;
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
  <div class:holder>
    <section>
      <Clock
        {reset}
        {started}
        amIPlaying={started && otherSidePlaying}
        {handleClick} />
    </section>
    <section>
      <Clock
        {reset}
        {started}
        amIPlaying={started && !otherSidePlaying}
        {handleClick} />
    </section>
  </div>
  <div class="controls">
  <IconButton
    iconType={'play'}
    handleClick={() => {
      started = !started
      reset = false
      timeOver = false
    }}
    text={started ? 'Stop' : 'Start'} />

  {#if started}
    <IconButton
      iconType={'reset'}
      handleClick={() => {
        started = false
        reset = true
        timeOver = false
      }}
      text="Reset" />
  {/if}
  </div>
</main>
