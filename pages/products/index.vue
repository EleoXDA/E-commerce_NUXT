<template>
  <div>
    <div>
      <div v-for="p in products">
        <ProductCard :product="p" />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<script setup>
  definePageMeta({
    layout: 'products',
  })

  const {data:products} = await useFetch('https://fakestoreapi.com/products')
</script>