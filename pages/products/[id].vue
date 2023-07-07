<template>
  <div>
    <h1>Product details for {{ id }}</h1>
  </div>
</template>

<script setup>
  const { id } = useRoute().params
</script>