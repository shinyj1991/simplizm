<template>
  <div class="ui-guide">
    <h1>UI GUIDE</h1>
    <section>
      <h2>INPUT</h2>
      <div class="mb20">
        <input type="text" placeholder="input type text">
      </div>
      <div class="mb20">
        <select>
          <option>Select box</option>
        </select>
      </div>
      <div class="mb20">
        <input type="date">
      </div>
      <div class="mb20">
        <input type="time">
      </div>
      <div class="mb20">
        <input type="datetime-local">
      </div>
      <div class="mb20">
        <input type="email" placeholder="input type email">
      </div>
      <div class="mb20">
        <input type="url" placeholder="input type url">
      </div>
      <div class="mb20">
        <input type="password" placeholder="input type password">
      </div>
      <div class="mb20">
        <input type="search" placeholder="input type search">
      </div>
      <div class="mb20">
        <input type="number" placeholder="input type number">
      </div>
      <div class="mb20">
        <input type="tel" placeholder="input type tel">
      </div>
      <div>
        <textarea style="height: 300px;" placeholder="textarea"></textarea>
      </div>
    </section>
    <section>
      <h2>INPUT</h2>
    </section>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
.ui-guide {padding: 50px;
  h1 {font-weight: 700; font-size: 48px; color: #000000;}
  h2 {margin: 0 0 30px; font-weight: 700; font-size: 36px; color: #000000;}
  > section {margin: 50px 0 0;}
}
</style>