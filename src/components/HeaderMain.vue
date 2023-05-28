<script setup>
import moment from 'moment'
import SwitchTheme from './SwitchTheme.vue'
import InputSearch from './InputSearch.vue'

const props = defineProps({
  date: String
})

function setFormatDate(value) {
  return moment(value).format('DD.MM.YYYY')
}
</script>

<template>
  <header>
    <nav class="relative mx-auto grid grid-flow-row grid-cols-1 items-center justify-between gap-4 py-6 sm:grid-flow-col sm:grid-cols-2 sm:py-8">
      <div class="w-3/4 text-lg font-medium">
        Курс рубля ЦБ РФ <span v-if="props.date">на {{ setFormatDate(props.date) }}</span>
      </div>
      <input-search></input-search>
      <switch-theme></switch-theme>
    </nav>
  </header>
</template>
