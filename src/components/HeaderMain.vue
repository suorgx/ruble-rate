<script setup>
import {ref} from "vue";
import moment from 'moment';

const inputValue = ref('')

const emit = defineEmits(['emitValue'])

const props = defineProps({
  date: String
})

function updateValue(value) {
  emit('emitValue', value)
}

function setFormatDate(value) {
  return moment(value).format("DD.MM.YYYY");
}

</script>

<template>
  <header>
    <nav class="grid grid-flow-row sm:grid-flow-col gap-4 grid-cols-1 sm:grid-cols-2 mx-auto items-center justify-between py-6 sm:py-8">
      <div class="text-lg font-medium">
        Курс рубля ЦБ РФ <span v-if="props.date">на {{ setFormatDate(props.date) }}</span>
      </div>
      <input
        type="search"
        id="default-search"
        class="flex w-full lg:w-96 ml-auto p-3 text-sm text-gray-900 border border-gray-300 rounded-md bg-white outline-0"
        placeholder="Поиск"
        v-model="inputValue"
        @input="updateValue(inputValue)"
      >
    </nav>
  </header>
</template>
