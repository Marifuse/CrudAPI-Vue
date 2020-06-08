<template>
  <div id="app">
    <nav class="navbar navbar-dark bg-dark fixed-top">
      <a class="navbar-brand">Regular Show</a>
      <form class="form-inline">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-info btn-search my-2 my-sm-0" type="submit">Buscar</button>
      </form>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Chelsea Market', cursive;
  color: #FFF;
}
.btn-search {
  padding: 1em;
  border-radius: 2em;
}
</style>
