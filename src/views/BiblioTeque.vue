<template>
  <div class="container my-5">
    <h1 class="text-center">Bibliothèque</h1>
    <div class="row mt-5">
      <div class="col-lg-3 col-md-4 col-sm-6 mb-4" v-for="book in filteredBooks" :key="book.id">
        <router-link to="/Login" class="nav-link">
        <div class="card">
          <img :src="book.image" class="card-img-top" :alt="book.title" />
          <div class="card-body">
            <h5 class="card-title">{{ book.title }}</h5>
            <p class="card-text">{{ book.author }}</p>
            <!-- <router-link :to="{ name: 'BookDetails', params: { id: book.id } }" class="btn btn-primary">Details</router-link> -->
          </div>
        </div>
      </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    search: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      books: [
        {
          id: 1,
          title: "The Lean Startup",
          author: "Eric Ries",
          image: "https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
        },
        {
          id: 2,
          title: "The Design of Everyday Things",
          author: "Don Norman",
          image: "https://m.media-amazon.com/images/I/416Hql52NCL._SY346_.jpg"
        },
        {
          id: 3,
          title: "The Pragmatic Programmer",
          author: "Andrew Hunt and David Thomas",
          image: "https://m.media-amazon.com/images/I/41as+WafrFL._SX260_.jpg"
        },
        {
          id: 4,
          title: "The Clean Coder",
          author: "Robert C. Martin",
          image: "https://m.media-amazon.com/images/I/41TINACY3hL._SX260_.jpg"
        },
        {
          id: 5,
          title: "Cracking the Coding Interview",
          author: "Gayle Laakmann McDowell",
          image: "https://m.media-amazon.com/images/I/41p1cRZGtaL._SX260_.jpg"
        },
        {
          id: 6,
          title: "The Algorithm Design Manual",
          author: "Steven S Skiena",
          image: "https://m.media-amazon.com/images/I/4154ldEx2xL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
        },
        {
          id: 7,
          title: "Designing Data-Intensive Applications",
          author: "Martin Kleppmann",
          image: "https://m.media-amazon.com/images/I/51ZSpMl1-LL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg"
        },
        {
          id: 8,
          title: "Code Complete",
          author: "Steve McConnell",
          image: "https://m.media-amazon.com/images/I/51FUYfErOXL._SX408_BO1,204,203,200_.jpg"
        }
      ]
    }
  },
  computed: {
    filteredBooks() {
      return this.books.filter(book => {
        return book.title.toLowerCase().includes(this.search.toLowerCase()) || book.author.toLowerCase().includes(this.search.toLowerCase());
      });
    }
  }
}
</script>



<style>
.card {
  transition: transform 0.2s;
}

.card:hover {
  transform: scale(1.05);
}

.card img {
  height: 400px;
  object-fit: cover;
}

.card-title {
  font-weight: bold;
  font-size: 1.25rem;
}

.card-text {
  color: #6c757d;
}
</style>