import { defineStore } from "pinia";
import { ref, computed, nextTick } from 'vue'
interface HjObj{
    nation:string
    signOrgan:string
    signOrganCode:string
}
export const useUserStore = defineStore('user', {

    state: () => {
        return {

        };
    },
    actions: {
        
    },
    persist: true
})