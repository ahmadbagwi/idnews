<template>
  <div class="covid">
    <strong><p>Data https://covid19.mathdro.id/api</p></strong>
    <b-container>
      <b-row>
        <b-col col lg="12" xs="12">
          <div class="mt-3">
            <p>Data Covid Indonesia</p>
            <b-button-group>
              <b-button variant="info">Total Kasus {{ indonesia.confirmed }}</b-button>
              <b-button variant="success">Sembuh {{ indonesia.recovered }}</b-button>
              <b-button variant="danger">Meninggal {{ indonesia.deaths }}</b-button>
            </b-button-group>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col col lg="12" xs="6">
          <br><br>
          <p>Data Covid Global</p>
          <div class="m-auto" v-if="$loading==true">
            <b-alert variant="danger" show>Loading...</b-alert>
          </div>
          <b-table responsive striped hover :items="itemsdata"></b-table>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'covid',
  data () {
    return {
      indonesia: '',
      itemsdata: []
    }
  },
  created () {
    this.axios.get('https://covid19.mathdro.id/api/countries/Indonesia/confirmed')
      .then((response) => {
        this.indonesia = response.data[0]
        // console.log(this.indonesia)
      })
      .catch((error) => {
        console.log(error)
      })
    this.axios.get('https://covid19.mathdro.id/api/confirmed')
      .then((response) => {
        this.items = response.data
        this.items.forEach(e => {
          this.itemsdata.push({ 'Negara': e.countryRegion, 'Negara Bagian/Provinsi': e.provinceState, 'Kasus': e.confirmed, 'Sembuh': e.recovered, 'Meninggal': e.deaths })
          this.$loading = false
        })
        // console.log(this.itemsdata)
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
