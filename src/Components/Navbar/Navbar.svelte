<script>
  import IconButton from '../IconButton/IconButton.svelte'
</script>

<navbar>
  <IconButton iconType={'config'} fill={'#ff3e00'} />
  SVELTE CHESS TIMER
</navbar>

<style>
  navbar {
    display: flex;
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 1.4em;
    font-weight: 400;
    justify-content: space-between;
    padding: 20px;
    align-items: center;
    border-bottom: 5px solid white;
  }

  @media (min-width: 640px) {
    navbar {
      justify-content: space-around;
      width: 100%;
      margin-bottom: 30px;
    }
  }
</style>
