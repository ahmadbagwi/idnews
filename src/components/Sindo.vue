<template>
  <div class="hello">
    <strong><p>Berita Indonesia</p></strong>
    <b-container>
      <b-row>
        <div class="m-auto" v-if="$loading==true">
          <b-alert variant="danger" show>Loading...</b-alert>
        </div>
        <b-col cols lg="4" xs="auto" v-for="sindo in sindonews" :key="sindo.id">
          <b-card class="judul" :title="sindo.judul.substring(0,80)" :img-src="sindo.poster">
            <sub>{{ sindo.waktu }}</sub>
            <b-card-text class="konten" v-html="sindo.kutipan.substring(0,150)">
            </b-card-text>
            <router-link :to="{name: 'sindo-show', params: { url: sindo.link }}">
              <b-button button-sm variant="outline-success" size="sm">Baca</b-button>
            </router-link>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'sindo',
  data () {
    return {
      msg: 'Welcome to IdNews',
      sindonews: null
    }
  },
  created () {
    this.axios.get('https://berita-news.herokuapp.com/')
      .then((response) => {
        this.sindonews = response.data.data
        this.$loading = false
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
