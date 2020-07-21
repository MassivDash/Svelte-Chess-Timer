<script>
  export let handleClick
  export let active

  import PlayIcon from '../../IconButton/Svg/play_arrow-24px.svg'
  import PauseIcon from '../../IconButton/Svg/pause-24px.svg'
</script>

<style>
  button {
    border: 0;
    margin: 5px;
    padding: 5px;
    min-height: 50px;
    min-width: 50px;
  }
</style>

<button on:click={active ? () => handleClick() : null}>

  {#if !active}
    <PlayIcon width="24px" title="Start the clock" aria-label="Start the clock"/>
  {/if}

  {#if active}
    <PauseIcon width="24px" fill="#ff3e00" title="Stop the clock" aria-label="Stop the clock"/>
  {/if}

</button>
