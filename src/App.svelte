<script>
  import Clock from './Components/Clock/Clock.svelte'
  import Navbar from './Components/Navbar/Navbar.svelte'
  import IconButton from './Components/IconButton/IconButton.svelte'
  import Info from './Components/Info/Info.svelte'

  let started = false
  let reset = false
  let holder

  let otherSidePlaying = null
  $: change = otherSidePlaying

  function handleClick() {
    otherSidePlaying = !otherSidePlaying
  }

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
  }
</script>

<style>
  main {
    max-width: 100vw;
    text-align: center;
    padding: 0;
    margin: auto;
    background: repeat url('/assets/greyzz.png');
    border-bottom: 5px solid white;
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
    padding: 20px 0;
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
      margin: auto;
      max-width: 1250px;
      display: flex;
      height: 100%;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      border-bottom: 5px solid white;
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
      iconType={started ? 'pause' : 'play'}
      handleClick={() => {
        started = !started
        reset = false
      }}
      text={started ? 'Stop' : 'Start'} />

    <IconButton
      iconType={'reset'}
      handleClick={() => {
        started = false
        reset = true
      }}
      text="Reset" />
  </div>

  <Info />

</main>
