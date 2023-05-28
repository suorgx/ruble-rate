import { defineStore } from 'pinia'
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
        filteredValutes() {
            const searchValue = this.searchValue.toLowerCase()
            return Object.values(this.valutes).filter(valute =>
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
                console.log(typeof this.valutes)
                console.log(this.valutes)
            })
        }
    }
})
