const app = Vue.createApp({
    data() {
      return {
        showBooks: true,
        books: [
            { title: 'Name of the wind', author: 'Patrick Rothfuss', img: 'assets/1.jpg', isFav: true },
            { title: 'The way of kings', author: 'Brandon Sanderson', img: 'assets/2.jpg', isFav: false },
            { title: 'The final empire', author: 'Brandon Sanderson', img: 'assets/3.jpg', isFav: true },
        ],
        a1 : 1,
        a2 : 1
        // computed 
        // filteredBooks: ...
      }
    },
    methods: {
      toggleShowBooks() {
        this.showBooks =  !this.showBooks
      },
      toggleFav(book) {
        book.isFav = !book.isFav
        a1++
        a2++
      },
      getBooks() {
          // this also works but slower performance becuase
          // its not computed innto a getter,
          // so better to use computed 
        return this.books.filter(book => book.isFav)
      }
    },

    computed: {
      filteredBooks() {
        return this.books.filter(book => book.isFav)
      },
      now() {
          return this.a2
      }
    }
    
  })
  
  app.mount('#app')
