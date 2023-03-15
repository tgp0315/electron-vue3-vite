import { defineStore, createPinia } from 'pinia'
// import store from 'store2'



const userWebsiteStore = defineStore('websiteStore', {
  state() {
    return {
      websites: []
    }
  },

  actions: {
    add(item) {
      this.websites.unshift(item)
      // store.set('websites', this.websites)
    },
    delete(index) {
      this.websites.splice(index, 1)
      // store.set('websites', this.websites)
    }
  },
  persist: true
})

export default userWebsiteStore