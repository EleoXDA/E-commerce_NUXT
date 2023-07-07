<template>
  <div>
    <img :src="product.image" :alt="product.title" />
    <p> {{ product.title }}</p>
    <NuxtLink :to="`/products/${product.id}`">
      <p>View Details</p>
    </NuxtLink>
  </div>
</template>

<script setup>
  const { product } = defineProps(['product'])
</script>

<style scoped>

</style>