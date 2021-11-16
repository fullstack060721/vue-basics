const app = Vue.createApp({
    data() {
      return {
        showBooks: true,
        books: [
            { title: 'Name of the wind', author: 'Patrick Rothfuss', img: 'assets/1.jpg' },
            { title: 'The way of kings', author: 'Brandon Sanderson', img: 'assets/2.jpg' },
            { title: 'The final empire', author: 'Brandon Sanderson', img: 'assets/3.jpg' },
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
