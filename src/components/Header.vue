<template>
  <header>
    <div class="menu"><a href="#" class="menu-btn"></a></div>
    <div class="logo"><img src="../assets/logo.png" class="img_logo"></div>
    <div class="cart">MY ACCOUNT | CART</div>
    <div class="category">Men's shoes</div>
    <div class="sort">
      <select v-model="selected">
        <option disabled value="">Sort by</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
          selected: ''
    }
  }
}
</script>

<style>

select{
  padding-left: 10px;
  height: 30px;
  width: 100px;
  border-radius: 0px;
  border: 1px solid gray;
  cursor: pointer;
  background: #fff;
  font-size: 13px;
  box-shadow: none;
  background-image: url('../assets/select.png');
  background-position: 80px center;
  background-repeat: no-repeat;
  /*for WebKit*/
  -webkit-appearance: none;
  /* for FF */
  -moz-appearance: none;
  text-indent: 0.01px;
  text-overflow: '';
  /* for IE */
  -ms-appearance: none;
  appearance: none!important;
}

select::-ms-expand {
 display: none;
}

select:focus {
    outline: none;
}

header {
  padding: 10px 60px 30px 60px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: "menu logo cart"
                       "cat  .    sort"
}
.category{
  padding: 10px 0 0 0;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 16px;
  grid-area: cat;
  align-items: end;
  display: flex;
}

.sort{
  padding: 10px 0 0 0;
  text-align: right;
  grid-area: sort;
}

.menu{
  grid-area: menu;
}

.logo{
  width: 100px;
  grid-area: logo;
  display: flex;
  align-items: center;
  justify-self: center;
}

.cart{
  display: flex;
  align-items: center;
  grid-area: price;
  justify-self: end;
  font-size: 13px;
  grid-area: cart;
}

.menu-btn {
  display: block;
  margin: 24px 0 0 16px;
  padding: 0 0 0 3px;
  width: 36px;
  transform: translate(-50%,-50%);
}

.menu-btn:before,
.menu-btn:after {
  background-color: #000;
  content: '';
  display: block;
  height: 4px;
  transition: all 200ms ease-in-out;
}
.menu-btn:before {
  box-shadow: 0 10px 0 #000;
  margin-bottom: 16px;
}
.menu-btn:hover:before {
  box-shadow: 0 0 0 #000;
  transform: translateY(10px) rotate(45deg);
}
.menu-btn:hover:after{
  transform: translateY(-10px) rotate(-45deg);
}

@media only screen and (min-device-width : 320px) and (max-device-width : 568px) {
  header {
    padding: 10px 10px 10px 10px;
  }

  .cart{
    font-size: 10px;
  }

  .sort{
    padding: 30px 0 0 0;
  }

  .category{
    padding: 30px 0 0 0;
  }

  .logo{
    width: 80px;
  }

}

</style>
