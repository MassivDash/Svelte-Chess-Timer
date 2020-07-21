<script>
  import Clock from './Components/Clock/Clock.svelte'
  import Navbar from './Components/Navbar/Navbar.svelte'
  import IconButton from './Components/IconButton/IconButton.svelte'

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

  h2 {
    font-size: 17px;
    margin-left: 5px;
  }

  div {
    display: flex;
    width: 100%;
    max-width: 1024px;

    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .column {
    border-top: 5px solid white;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    max-width: 100%;
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

  .payton {
    font-family: 'Paytone One', sans-serif;
    font-size: 50px;
    color: #ff3e00;
    line-height: 0em;
    text-align: center;
  }
</style>

<svelte:head>
  <link
    href="https://fonts.googleapis.com/css2?family=Paytone+One&display=swap"
    rel="stylesheet" />
</svelte:head>

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

  <div class="column">
    <h2>Developed by</h2>
    <a href="https://spaceout.pl/">
      <h2>spaceout.pl</h2>
    </a>
  </div>

</main>

<p class="payton">s</p>
