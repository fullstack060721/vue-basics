const app = Vue.createApp({
    data() {
      return {
        title: 'The Way of Kings',
        author: 'Brandon Sanderson',
        age: 45,
        showBooks: true
      }
    },
    methods: {
        changeTitle(title) {
            this.title = title
        },
        show_hide_books() {
            this.showBooks = !this.showBooks
        }
    }
  })
  
  app.mount('#app')

