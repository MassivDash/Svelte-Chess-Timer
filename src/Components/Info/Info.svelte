<script>
  let logo = '/assets/logo.png'
</script>

<style>
  .column {
    border-top: 5px solid white;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 20px;
  }

  p {
    margin-left: 10px;
  }
</style>

<div class="column">
  <p>
    Svelte chess timer is a simple app written in the
    <a href="https://svelte.dev/" target="_black" rel="nofollow">
      Sevlte framework
    </a>
    . This fully operational chess timer clock, will track oponents times in the
    traditional way of counting down to midnight. The old switch-eru button lets
    you rotate the timer, great option if you are really plan on using it. Don't
    forget to switch on the alarm next to your timer, for the buzzer at the end
    of time limit
  </p>
  <p>
    Svelte Chess Timer Source code at
    <a
      href="https://https://github.com/MassivDash/Svelte-Chess-Timer"
      target="_black"
      rel="nofollow">
      github
    </a>
    , moving clock svg component by
    <a href="https://svelte.dev/examples#clock" target="_black" rel="nofollow">
      svelte team
    </a>
  </p>
</div>

<div class="column">
  <a href="https://spaceout.pl/">
    <img src={logo} alt="spaceout.pl" />
  </a>
</div>
