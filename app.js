const app = Vue.createApp({
  template: `<h2>I am the template</h2>
        <p>{{ title }} - by {{ author }}, {{ age }} years old</p>`,
    data() {
      return {
        title: 'The Way of Kings',
        author: 'Brandon Sanderson',
        age: 45
      }
    }
  })
  
  app.mount('#app')