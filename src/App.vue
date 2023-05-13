<script setup>
import axios from "axios";
import { onMounted, ref, computed } from "vue";

import HeaderMain from './components/HeaderMain.vue'
import FooterMain from './components/FooterMain.vue'
import ValuteCard from './components/ValuteCard.vue'

const valutes = ref([])
const date = ref((''))
const searchValue = ref((''))
const isLoaded = ref(false)

const filteredData = computed(() => {
  let result = []
  for (let key in valutes.value) {
      if (valutes.value[key].Name.toLowerCase().includes(searchValue.value.toLowerCase()) || valutes.value[key].CharCode.toLowerCase().includes(searchValue.value.toLowerCase())) {
      result.push(valutes.value[key])
    }
  }
  return result
})

const updateSearchValue = (value) => {
  searchValue.value = value
}

onMounted(() => {
  axios
    .get('https://www.cbr-xml-daily.ru/daily_json.js')
    .then((response) => {
      valutes.value = response.data.Valute
      date.value = response.data.Date
    })
    .catch((e)=>{
      console.log(e)
    })
    .finally(()=> {
      isLoaded.value = true
    })
})
</script>

<template>
  <template v-if="isLoaded">
    <header-main
      @emit-value="(value) => updateSearchValue(value)"
      :date="date"
    ></header-main>

    <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      <template v-if="filteredData.length">
        <valute-card
          v-for="valute in filteredData"
          :key="valute.ID"
          :name="valute.Name"
          :nominal="valute.Nominal"
          :value="valute.Value"
          :char-code="valute.CharCode"
          :previous="valute.Previous"
        ></valute-card>
      </template>
      <span class="text-lg" v-else>Ничего не найдено</span>
    </div>

    <footer-main></footer-main>
  </template>
</template>
