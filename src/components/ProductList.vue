<!-- ProductListコンポーネントから商品情報を取得 -->
<!-- <script setup>
import { onMounted, ref } from 'vue';
import shop from '../api/shop.js';
const products = ref([]);
onMounted(() => {
  shop.getProducts((data) => (products.value = data));
});
</script> -->
<!-- storeに保存されたproductsから商品情報を取得 -->
<script setup>
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useStoreProducts } from '../stores/products';
import { useStoreCart } from '../stores/cart';

const { products } = storeToRefs(useStoreProducts());
const { getProducts } = useStoreProducts();
const { addCart } = useStoreCart();

onMounted(() => {
  getProducts();
});
</script>

<template>
  <ul>
    <li v-for="product in products" v-bind:key="product.id">
      {{ product.title }} - ¥{{ product.price.toLocaleString() }}
      <!-- 在庫数0になったらボタンを押せなくする(disabled) -->
      <button @click="addCart(product)" :disabled="!product.inventory">カートへ</button>
    </li>
  </ul>
</template>
