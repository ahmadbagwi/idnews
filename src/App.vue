<template>
  <div id="app">
    <header>
      <div>
        <b-navbar toggleable="sm" type="dark">
          <b-navbar-brand href="#"><img src="/static/img/icons/favicon-32x32.png" style="max-width:24px"/></b-navbar-brand>
          <b-navbar-toggle target="navbar-toggle-collapse">
            <template v-slot:default="{ expanded }">
              Menu <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
              <b-icon v-else icon="chevron-bar-down"></b-icon>
            </template>
          </b-navbar-toggle>
          <b-collapse id="navbar-toggle-collapse" is-nav>
            <b-navbar-nav>
              <router-link to="/"><b-nav-item href="/">Beranda</b-nav-item></router-link>
              <router-link to="/sindo"><b-nav-item href="/sindo">Nasional</b-nav-item></router-link>
              <router-link to="/international"><b-nav-item href="/international">Internasional</b-nav-item></router-link>
              <router-link to="/covid"><b-nav-item href="/covid">Info Covid</b-nav-item></router-link>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
nav.navbar.navbar-dark.navbar-expand-sm {
  z-index: 10000!important;
  background: #35495e;
}

body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
