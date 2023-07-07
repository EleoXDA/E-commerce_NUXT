<template>
  <div>
    <img :src="product.image">
    <p>{{ product.title }}</p>
    <p>{{ product.price }}</p>
    <p>{{ product.id }}</p>
  </div>
</template>

<script setup>
  const { product } = defineProps(['product'])
</script>

<style scoped>

</style>