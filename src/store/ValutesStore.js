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
