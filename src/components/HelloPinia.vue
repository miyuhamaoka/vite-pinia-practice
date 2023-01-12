<script setup>
import {useStoreCounter} from "../stores/example";

const counter = useStoreCounter();
const patch = () => {
  counter.$patch({
    count: 100,
    user: {
      name: 'hama'
    }
  })
}
</script>


<template>
    <h2>Hello Pinia</h2>
  <p>カウント: {{ counter.count }}</p>
  <button @click="counter.$reset">リセット</button>
  <button @click="patch">パッチ</button>
</template>
