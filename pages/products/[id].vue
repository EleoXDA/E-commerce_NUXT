<template>
  <div>
    <Head>
      <Title>E-Commerce | {{ product.title }}</Title>
      <Meta name="E-Commerce" :content="product.description" />
    </Head>
    <ProductDetails :product="product"/>
  </div>
</template>

<script setup>
  const {id} = useRoute().params
  const uri = "https://fakestoreapi.com/products/" + id

  const {data: product} = await useFetch(uri, {key:id})

  if(!product) {
    throw createError({statusCode: 404, statusMessage: 'Product not found', fatal: true})
  }

  definePageMeta({
    layout: 'products',
  })
</script>