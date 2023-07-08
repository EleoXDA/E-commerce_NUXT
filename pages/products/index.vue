<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
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

  useHead({
    title: 'E-Commerce | Products',
    meta: [
      {
        name: 'E-Commerce',
        content: 'E-Commerce | Products',
      },
    ],
  })
</script>