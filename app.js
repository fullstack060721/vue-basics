const app = Vue.createApp({
    data() {
      return {
        title: 'The Way of Kings',
        author: 'Brandon Sanderson',
        age: 45
      }
    },
    methods: {
        changeTitle(title) {
            this.title = title
        }
    }
  })
  
  app.mount('#app')

