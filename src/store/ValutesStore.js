import { defineStore } from 'pinia'
import { computed } from 'vue'
import axios from 'axios'
const url = 'https://www.cbr-xml-daily.ru/daily_json.js'

export const useValutesStore = defineStore('valutesStore', {
    state: () => ({
        valutes: [],
        date: '',
        isLoaded: false,
        searchValue: ''
    }),
    getters: {
        filteredValutes(state) {
            const searchValue = state.searchValue.toLowerCase()
            return Object.values(state.valutes).filter(valute =>
                valute.Name.toLowerCase().includes(searchValue) || valute.CharCode.toLowerCase().includes(searchValue)
            )
        }
    },
    actions: {
        async getData () {
            await axios
            .get(url)
            .then((response) => {
                this.valutes = response.data.Valute
                this.date = response.data.Date
            })
            .catch((e)=>{
                console.log(e)
            })
            .finally(()=> {
                this.isLoaded = true
            })
        }
    }
})
