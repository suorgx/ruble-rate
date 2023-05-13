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
  <div class="overflow-hidden grid gap-1 p-6 bg-white rounded-md hover:bg-gray-100 relative">
    <div class="text-xl tracking-tight text-gray-900">
      {{ nominal }} {{ name }}
    </div>
    <div class="flex justify-between gap-1 text-2xl font-medium text-gray-900">
      <span>{{value.toFixed(2)}} &#8381;</span>
      <span :class="Number(value) > Number(previous) ? 'text-emerald-500' : 'text-red-500'">
        {{ Number(value) > Number(previous) ? '+' : null }}{{ (Number(value) - Number(previous)).toFixed(2) }}
      </span>
    </div>
    <div class="absolute top-2 right-2 text-sm text-gray-900">
      {{ charCode }}
    </div>
  </div>
</template>
