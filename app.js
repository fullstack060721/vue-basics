const app = Vue.createApp({
    data() {
      return {
        showBooks: true,
        books: [
            { id: 1, title: 'Name of the wind', author: 'Patrick Rothfuss', img: 'assets/1.jpg', isFav: true },
            { id: 2, title: 'The way of kings', author: 'Brandon Sanderson', img: 'assets/2.jpg', isFav: false },
            { id: 3, title: 'The final empire', author: 'Brandon Sanderson', img: 'assets/3.jpg', isFav: true },
        ],
      }
    },
    methods: {
      toggleShowBooks() {
        this.showBooks =  !this.showBooks
      },

     // toggleFav(book) {
       // book.isFav = !book.isFav
     // }

      toggleFav(book_id) {
        //book.isFav = !book.isFav
        this.books.forEach( b => { if (b.id === book_id) b.isFav = !b.isFav})      
      }
      
    }
  })
  
  app.mount('#app')
