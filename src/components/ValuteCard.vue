<script setup>
defineProps({
  charCode: String,
  name: String,
  nominal: Number,
  numCode: String,
  previous: Number,
  value: Number
})
</script>

<template>
  <div class="overflow-hidden grid gap-1 p-6 bg-white rounded-md hover:bg-gray-100">
    <div class="text-xl tracking-tight text-gray-900">
      {{nominal}} {{name}}
    </div>
    <div class="text-2xl font-medium text-gray-900">
      {{value.toFixed(2)}} &#8381;
    </div>
  </div>
</template>
