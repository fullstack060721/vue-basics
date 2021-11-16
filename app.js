const app = Vue.createApp({
    data() {
      return {
        showBooks: true,
        books: [
            { title: 'Name of the wind', author: 'Patrick Rothfuss', img: 'assets/1.jpg', isFav: true },
            { title: 'The way of kings', author: 'Brandon Sanderson', img: 'assets/2.jpg', isFav: false },
            { title: 'The final empire', author: 'Brandon Sanderson', img: 'assets/3.jpg', isFav: true },
        ],
        _now : Date.now()
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
       // this._now = Date.now()
      },
      // this also works but slower performance becuase
      // its not computed innto a getter,
      // so better to use computed 
      getFilteredBooks() {
        return this.books.filter(book => book.isFav)
      }
    },

    computed: {
      filteredBooks() {
         
        this._now = Date.now()
        console.log('computed -----------------')
        return this.books.filter(book => book.isFav)
      },
      now() {
        console.log('computed NOW -----------------')
          return this._now
      }
    }
    
  })
  
  app.mount('#app')
