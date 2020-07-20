<script>
  import { onMount } from 'svelte'
  import { slide } from 'svelte/transition'
  import PlayButton from './PlayButton/PlayButton.svelte'
  import IconButton from '../IconButton/IconButton.svelte'

  import moment from 'moment'
  let chessTime = 20
  export let started
  export let amIPlaying
  export let handleClick
  export let reset

  let holder
  let buttonsHolder
  let opacityOn
  let configClass

  let sound = false
  let rotate = false
  let alarm = false
  let config = false
  export let timeOver = false
  let refTime = moment().utcOffset(0)
  refTime.set({ hour: 0, minute: 0, second: 0, millisecond: 0 })
  refTime.subtract(chessTime, 'minutes')

  let myAudio = new Audio('/assets/alarm.wav')

  function handleSet() {
    if (!started) {
      refTime = refTime.set({ hour: 0, minute: 0, second: 0, millisecond: 0 })
      refTime = refTime.subtract(chessTime, 'minutes')
    }
  }

  function handleRotate() {
    rotate = !rotate
  }

  // these automatically update when `time`
  // changes, because of the `$:` prefix
  $: hours = refTime.hours()
  $: minutes = refTime.minutes()
  $: seconds = refTime.seconds()

  onMount(() => {
    const interval = setInterval(() => {
      if (amIPlaying) {
        if (refTime.hours() === 0) {
          sound && myAudio.play()
          timeOver = true
        }
        refTime = refTime.add(1, 'seconds')
      }

      if (reset) {
        started = false
        timeOver = false
        handleSet()
      }
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  })
</script>

<style>
  div {
    transition: 2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .holder {
    display: flex;
    flex-direction: column;
    max-width: 220px;
    margin: 20px auto;
    cursor: pointer;
  }

  @media (min-width: 640px) {
    .holder {
      display: flex;
      flex-direction: column;
      max-width: 1000px;
      margin: auto;
      cursor: pointer;
    }
  }

  svg {
    width: 100%;
    height: 100%;
  }

  .clock-face {
    stroke: #333;
    fill: white;
  }

  .minor {
    stroke: #999;
    stroke-width: 0.5;
  }

  .major {
    stroke: #333;
    stroke-width: 1;
  }

  .hour {
    stroke: #333;
  }

  .minute {
    stroke: #666;
  }

  .second,
  .second-counterweight {
    stroke: #ff3e00;
  }

  .second-counterweight {
    stroke-width: 3;
  }

  .buttonsHolder {
    display: flex;
    width: 90%;
    min-width: 30px;
    justify-content: center;
    align-items: center;
  }

  .rotate {
    transform: rotate(180deg);
  }

  .opacityOn {
    display: flex;
    opacity: 1;
    justify-content: space-evenly;
    align-items: center;
    min-height: 60px;
  }

  input[type="number"] {
    text-align: center;
    background: transparent;
    border: 0;
}

  input[type='range'] {
    -webkit-appearance: none;
    margin: 20px 30px;
    width: 70%;
  }
  input[type='range']:focus {
    outline: none;
  }
  input[type='range']::-webkit-slider-runnable-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    background: #ff3e00;;
    border-radius: 1.3px;
  }
  input[type='range']::-webkit-slider-thumb {
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    height: 36px;
    width: 16px;
    border-radius: 3px;
    background: #ffffff;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -14px;
  }
  input[type='range']:focus::-webkit-slider-runnable-track {
    background: #ff3e00;;
  }
  input[type='range']::-moz-range-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    background: #ff3e00;
    border-radius: 1.3px;
  }
  input[type='range']::-moz-range-thumb {
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    border: 1px solid #000000;
    height: 36px;
    width: 16px;
    border-radius: 3px;
    background: #ffffff;
    cursor: pointer;
  }
  input[type='range']::-ms-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    border-width: 16px 0;
    color: transparent;
  }
  input[type='range']::-ms-fill-lower {
    background: #ff3e00;
    border-radius: 2.6px;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  }
  input[type='range']::-ms-fill-upper {
    background: #ff3e00;
    border-radius: 2.6px;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  }
  input[type='range']::-ms-thumb {
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    height: 36px;
    width: 16px;
    border-radius: 3px;
    background: #ffffff;
    cursor: pointer;
  }
  input[type='range']:focus::-ms-fill-lower {
    background: #ff3e00;
  }
  input[type='range']:focus::-ms-fill-upper {
    background: #ff3e00;
  }

  label {
    margin: 20px
  }

</style>

<div class:rotate>
  <div class:holder={true} on:click={amIPlaying ? handleClick : null}>
    <svg viewBox="-50 -50 100 100">
      <circle class="clock-face" r="48" />

      <!-- markers -->
      {#each [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55] as minute}
        <line class="major" y1="35" y2="45" transform="rotate({30 * minute})" />

        {#each [1, 2, 3, 4] as offset}
          <line
            class="minor"
            y1="42"
            y2="45"
            transform="rotate({6 * (minute + offset)})" />
        {/each}
      {/each}

      <!-- hour hand -->
      <line
        class="hour"
        y1="2"
        y2="-20"
        transform="rotate({30 * hours + minutes / 2})" />

      <!-- minute hand -->
      <line
        class="minute"
        y1="4"
        y2="-30"
        transform="rotate({6 * minutes + seconds / 10})" />

      <!-- second hand -->
      <g transform="rotate({6 * seconds})">
        <line class="second" y1="10" y2="-38" />
        <line class="second-counterweight" y1="10" y2="2" />
      </g>
    </svg>
  </div>

  <p>
    {timeOver ? '' : `${Math.abs(refTime.hours() - 23) === 0 ? '' : `${Math.abs(refTime.hours() - 23)}:`}${Math.abs(refTime.minutes() - 60) === 60 ? '59' : Math.abs(refTime.minutes() - 59)}:${Math.abs(refTime.seconds() - 60) === 60 ? '59' : Math.abs(refTime.seconds() - 59)}`}
  </p>
  <p>{timeOver ? 'Time over' : ''}</p>

  <div class:buttonsHolder>
    <PlayButton {handleClick} active={amIPlaying} />
    <IconButton iconType={'rotate'} handleClick={handleRotate} />
    <IconButton
      iconType={sound ? 'alarmOn' : 'alarmOff'}
      handleClick={() => {
        if (!sound) myAudio.pause()
        sound = !sound
      }}
      fill={sound ? '#ff3e00' : '#333'} />
    <IconButton iconType={'config'} handleClick={() => (config = !config)} />
  </div>

  {#if config}
    <div in:slide out:slide class:opacityOn>

      <label>
        <input type="number" bind:value={chessTime} min="1" max="720" />
        <input type="range" bind:value={chessTime} min="1" max="720" />
        <IconButton iconType={'done'} handleClick={handleSet} />
      </label>

    </div>
  {/if}

</div>
