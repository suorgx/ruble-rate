<script setup>
import { useValutesStore } from '../store/ValutesStore.js'

const valutesStore = useValutesStore()
const inputValue = ''

function updateValue(value) {
  valutesStore.searchValue = value
}
</script>

<template>
  <input
    type="search"
    id="default-search"
    class="ml-auto flex w-full rounded-2xl bg-white pr-4 pl-8 leading-normal text-black shadow placeholder-black py-1.5 aa-input focus:border-transparent focus:outline-none lg:w-96"
    placeholder="Поиск"
    v-model="inputValue"
    @input="updateValue(inputValue)"
  >
</template>
