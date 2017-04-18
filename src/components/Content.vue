<template>
  <div class="grid">

    <div class="card">
      <img src="../assets/image01.png" alt="item">
      <div class="items">
        <div class="item_title">Mizonu Wave Ignitus</div>
        <div class="item_category">Soccer shoes</div>
        <div class="item_price">$380</div>
      </div>
    </div>

    <div class="card">
      <img src="../assets/image01.png" alt="item">
      <div class="items">
        <div class="item_title">Mizonu Wave Ignitus</div>
        <div class="item_category">Soccer shoes</div>
        <div class="item_price">$380</div>
      </div>
    </div>

    <div class="card">
      <img src="../assets/image01.png" alt="item">
      <div class="items">
        <div class="item_title">Mizonu Wave Ignitus</div>
        <div class="item_category">Soccer shoes</div>
        <div class="item_price">$380</div>
      </div>
    </div>

    <div class="card">
      <img src="../assets/image01.png" alt="item">
      <div class="items">
        <div class="item_title">Mizonu Wave Ignitus</div>
        <div class="item_category">Soccer shoes</div>
        <div class="item_price">$380</div>
      </div>
    </div>

    <div class="card">
      <img src="../assets/image01.png" alt="item">
      <div class="items">
        <div class="item_title">Mizonu Wave Ignitus</div>
        <div class="item_category">Soccer shoes</div>
        <div class="item_price">$380</div>
      </div>
    </div>

    <div class="card">
      <img src="../assets/image01.png" alt="item">
      <div class="items">
        <div class="item_title">Mizonu Wave Ignitus</div>
        <div class="item_category">Soccer shoes</div>
        <div class="item_price">$380</div>
      </div>
    </div>

    <div class="card">
      <img src="../assets/image01.png" alt="item">
      <div class="items">
        <div class="item_title">Mizonu Wave Ignitus</div>
        <div class="item_category">Soccer shoes</div>
        <div class="item_price">$380</div>
      </div>
    </div>

    <div class="card">
      <img src="../assets/image01.png" alt="item">
      <div class="items">
        <div class="item_title">Mizonu Wave Ignitus</div>
        <div class="item_category">Soccer shoes</div>
        <div class="item_price">$380</div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        items: []
      }
    },
    methods: {
      getItems: function() {
        var url = 'http://46.101.254.173/public/api/stores/test_s/?format=json';
        this.$http.get(url).then(function(response) {
          this.getcolor = JSON.parse(response.data.result);
          console.log(response.data.result)
        },  function(error) {
          console.log("Error get!")
        })
      },

    },
    created: function() {
      this.getItems()
    },
  }
</script>

<style>
  .grid {
    padding: 0 60px 0 60px;
    display: grid;
    grid-column-gap: 30px;
    grid-row-gap: 30px;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-template-rows: min-content min-content;
  }

  .card {

    border: 1px solid #ccc;
  }

  img {
    width: 100%; /* ширина картинки */
    height: auto; /* высота картинки */
  }

  .items{
    padding: 0 20px 20px 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
           "title price"
           "category price";
  }

  .item_title{
    font-weight: 400;
    grid-area: title;
  }

  .item_category{
    color: gray;
    font-size: 14px;
    font-weight: 200;
    font-style: italic;
    grid-area: category;
  }

  .item_price{
    color: red;
    font-weight: bold;
    display: flex;
    justify-content: right;
    align-items: center;
    grid-area: price;
  }

  @media only screen and (min-device-width : 320px) and (max-device-width : 568px) {
    .grid {
      padding: 0 5px 0 5px;
      display: grid;
      grid-column-gap: 10px;
      grid-row-gap: 10px;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      grid-template-rows: min-content min-content;
    }
  }

</style>
