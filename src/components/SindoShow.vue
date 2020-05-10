<template>
  <div class="sindoshow">
    <b-container>
      <b-row>
        <div class="m-auto" v-if="$loading==true">
            <b-alert variant="danger" show>Loading...</b-alert>
          </div>
        <b-col col lg="8" xs="12" class="m-auto" v-for="sindo in sindodetail" :key="sindo.id">
          <b-card class="judul" :title="sindo.judul" :img-src="sindo.poster">
            <sub>{{ sindo.waktu }}</sub>
            <b-card-text class="konten" v-html="sindo.konten">
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'sindoshow',
  data () {
    return {
      msg: 'Welcome to IdNews',
      sindodetail: {}
    }
  },
  created () {
    this.axios.get(`https://berita-news.herokuapp.com/detail/?url=${this.$route.params.url}`)
      .then((response) => {
        this.sindodetail = response.data.data
        this.$loading = false
        // console.log(this.sindodetail)
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
