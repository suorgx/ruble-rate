<script setup>
import axios from "axios";
import { onMounted, ref, computed } from "vue";

import HeaderMain from './components/HeaderMain.vue'
import ValuteCard from './components/ValuteCard.vue'

const data = ref([])
const date = ref((''))
const searchValue = ref((''))
const isLoaded = ref(false)

const filteredData = computed(() => {
  let result = []
  for (let key in data.value) {
    if (data.value[key].Name.includes(searchValue.value)) {
      result.push(data.value[key])
    }
  }
  return result
})

const search = (value) => {
  searchValue.value = value
}

onMounted(() => {
  axios
    .get('https://www.cbr-xml-daily.ru/daily_json.js')
    .then((response) => {
      data.value = response.data.Valute
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
  <header-main
    @emit-value="(value) => search(value)"
    :date="date"
  >
  </header-main>
  <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" v-if="isLoaded">
    <template v-if="filteredData.length">
      <valute-card
        v-for="valute in filteredData"
        :key="valute.ID"
        :name="valute.Name"
        :nominal="valute.Nominal"
        :value="valute.Value"
      ></valute-card>
    </template>
    <span class="text-lg" v-else>Ничего не найдено</span>
  </div>
</template>

<style scoped>

</style>
