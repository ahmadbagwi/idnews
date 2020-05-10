<template>
  <div class="hello">
    <div>
      <b-container>
        <b-row>
          <b-col col lg="12">
            <b-jumbotron :header="h" :lead="l">
              <p>{{ p }}</p>
              <b-button variant="outline-primary" href="https://wa.me/6285719191852">Order PWA</b-button>
            </b-jumbotron>
          </b-col>
        </b-row>
        <b-row>
          <b-col col lg="12">
            <strong><p>Kelebihan PWA</p></strong>
            <b-list-group>
              <b-list-group-item variant="info">Ringan dan cepat</b-list-group-item>
              <b-list-group-item variant="primary">Berjalan saat offline</b-list-group-item>
              <b-list-group-item variant="secondary">PWA dapat mengcover web dan app sekaligus</b-list-group-item>
              <b-list-group-item variant="success">Setelah diinstall, tidak perlu buka url</b-list-group-item>
              <b-list-group-item variant="danger">UI UX seperti aplikasi native (Playstore)</b-list-group-item>
              <b-list-group-item variant="warning">Hemat biaya (web dan app dalam 1 paket)</b-list-group-item>
              <b-list-group-item variant="info">Modern</b-list-group-item>
              <b-list-group-item variant="primary">Sedang berkembang</b-list-group-item>
              <b-list-group-item variant="dark">Waktu development lebih cepat</b-list-group-item>
            </b-list-group>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      h: 'PWA Test app',
      l: 'Progressive Web Application',
      p: 'Adalah aplikasi web yang berjalan layaknya aplikasi native, anda dapat menginstall web PWA pada smartphone dan berjalan persis seperti aplikasi dari Playstore, brand besar seperti tokopedia dan twitter telah mengaplikasikan konsep PWA, bahkan konversi alibaba mengingkat menjadi 76% dengan PWA'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

.display-3 {
    font-size: 2.5rem!important;
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
