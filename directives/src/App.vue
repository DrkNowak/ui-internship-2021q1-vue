<template>
  <div id="app">
    <nav>
      <router-link class="nav-el" to="/">home</router-link>
      <router-link class="nav-el" to="/test">test</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.nav-el:not(:first-child)::before {
  content: '|';
  margin: 0 5px;
}
</style>
