<script setup>
const html = document.querySelector('html')

function toggleTheme() {
  html.classList.toggle('light')
  html.classList.toggle('dark')
}
</script>

<template>
  <div class="absolute top-6 right-0 mr-2 inline-block w-10 select-none align-middle sm:relative sm:top-0">
    <input @click="toggleTheme" type="checkbox" name="toggle" id="switch" class="absolute right-4 block h-6 w-6 cursor-pointer appearance-none rounded-full border-4 border-white bg-blue-900 outline-none duration-200 ease-in checked:right-0 checked:bg-neutral-200 focus:outline-none"/>
    <label for="switch" class="block h-6 cursor-pointer overflow-hidden rounded-full bg-white shadow"></label>
  </div>
</template>
