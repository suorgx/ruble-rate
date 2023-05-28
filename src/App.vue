<script setup>
import { useValutesStore } from './store/ValutesStore.js'

import HeaderMain from './components/HeaderMain.vue'
import FooterMain from './components/FooterMain.vue'
import ValuteCard from './components/ValuteCard.vue'

const valutesStore = useValutesStore()

valutesStore.getData()
</script>

<template>
  <template v-if="valutesStore.isLoaded">
    <header-main :date="valutesStore.date"></header-main>

    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3" v-if="valutesStore.filteredValutes.length">
      <valute-card
        v-for="valute in valutesStore.filteredValutes"
        :key="valute.ID"
        :name="valute.Name"
        :nominal="valute.Nominal"
        :value="valute.Value"
        :char-code="valute.CharCode"
        :previous="valute.Previous"
      ></valute-card>
    </div>

    <span class="text-lg" v-else>Ничего не найдено</span>

    <footer-main></footer-main>
  </template>
</template>
