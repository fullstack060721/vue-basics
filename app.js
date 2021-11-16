const app = Vue.createApp({
    data() {
      return {
        showBooks: true,
        books: [
          { title: 'Name of the wind', author: 'Patrick rothfuss' },
          { title: 'The way of kings', author: 'Brandon sanderson' },
          { title: 'The final empire', author: 'Brandon sanderson' },
        ],
      }
    },
    methods: {
      toggleShowBooks() {
        this.showBooks =  !this.showBooks
      },
    }
  })
  
  app.mount('#app')
