<script>
  export let handleClick
  export let iconType
  export let text
  export let fill = '#333'

  import PlayIcon from './Svg/play_arrow-24px.svg'
  import RotateIcon from './Svg/autorenew-24px.svg'
  import ResetIcon from './Svg/restore-24px.svg'
  import DoneIcon from './Svg/done-24px.svg'
  import AlarmOnIcon from './Svg/alarm_on-24px.svg'
  import AlarmOffIcon from './Svg/alarm_off-24px.svg'
  import ConfigIcon from './Svg/timer-24px.svg'
  import PauseIcon from './Svg/pause-24px.svg'
  import LightbulbIcon from './Svg/lightbulb-24px.svg'
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

<button on:click={handleClick} title={iconType} aria-label={`This button will ${iconType} timer`}>

  {#if iconType === 'rotate'}
    <RotateIcon width="24px" {fill} />
  {/if}

  {#if iconType === 'reset'}
    <ResetIcon width="24px" {fill} />
  {/if}

  {#if iconType === 'play'}
    <PlayIcon width="24px" {fill} />
  {/if}

  {#if iconType === 'done'}
    <DoneIcon width="24px" {fill} />
  {/if}

  {#if iconType === 'alarmOn'}
    <AlarmOnIcon width="24px" {fill} />
  {/if}

  {#if iconType === 'alarmOff'}
    <AlarmOffIcon width="24px" {fill} />
  {/if}

  {#if iconType === 'config'}
    <ConfigIcon width="24px" {fill} />
  {/if}

  {#if iconType === 'pause'}
    <PauseIcon width="24px" fill="#ff3e00" />
  {/if}
  {#if iconType === 'lightbulb'}
  <LightbulbIcon width="24px" {fill} />
{/if}
  {#if text}
    <p>{text}</p>
  {/if}

</button>
