<template>
  <div class="international">
    <strong><p>Berita Internasional</p></strong>
    <b-container>
      <b-row>
        <div class="m-auto" v-if="$loading==true">
          <b-alert variant="danger" show>Loading...</b-alert>
        </div>
        <b-col cols lg="4" xs="auto" v-for="news in newsid" :key="news.id">
          <b-card class="judul" :title="news.title" :img-src="news.urlToImage">
            <sub>{{ news.publishedAt }}</sub>
            <b-card-text class="konten" v-html="news.content">
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'international',
  data () {
    return {
      msg: 'Welcome to IdNews',
      newsid: ''
    }
  },
  created () {
    this.$newsapi.v2.topHeadlines({
      // country: 'id',
      // pageSize: 6
      // category: 'business'
      // sources: 'id-source'
      sources: 'bbc-news,the-verge'
    })
      .then(response => {
        this.newsid = response.articles
        this.$loading = false
        // console.log(response)
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

.judul h4{
    font-size: 0.9rem;
    font-weight: 600;
}

.judul p{
  font-size: 0.8rem;
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
