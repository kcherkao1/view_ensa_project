<template>
  <div class="container my-5">
    <h1 class="text-center bib">Selected Book</h1>
    <div class="row mt-5">
      <div class="col-lg-12">
        <div class="card mb-4">
          <div class="card-body">
            <h5 class="card-title">{{ selectedBook.title }}</h5>
            <p class="card-text">{{ selectedBook.author }}</p>
            <p class="card-text">{{ selectedBook.description }}</p>
            <div class="rating">
              <span class="rating-text">Rating:</span>
              <span class="stars">
                <template v-for="star in 5" :key="star">
                  <span
                    class="star"
                    @click="rateBook(selectedBook.id, star)"
                    :class="{ active: star <= selectedBook.rating }"
                  >
                    ★
                  </span>
                </template>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <h1 class="text-center bib">Recommended Books</h1>
    <div class="row mt-5">
      <div class="col-lg-3 col-md-4 col-sm-6 mb-4" v-for="book in recommendedBooks" :key="book.id">
        <router-link to="/Login" class="nav-link">
          <div class="card">
            <img :src="book.image" class="card-img-top" :alt="book.title" />
            <div class="card-body">
              <h5 class="card-title">{{ book.title }}</h5>
              <p class="card-text">{{ book.author }}</p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>


<script>
import { mapGetters } from 'vuex';
import stringSimilarity from 'string-similarity';

export default {
  props: {
    author: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true
    }
  },
  computed: {
    ...mapGetters(['getBooks']),
    bookToCompare() {
      return this.getBooks.find(book => book.id === this.id);
    },
    selectedBook() {
      if (!this.bookToCompare) {
        return {};
      }
      return this.bookToCompare;
    },
    recommendedBooks() {
      if (!this.bookToCompare) {
        return [];
      }

      return this.getBooks.filter(book => {
        if (typeof book.title === 'string' && typeof book.author === 'string') {
          const titleSimilarity = stringSimilarity.compareTwoStrings(this.bookToCompare.title, book.title);
          const authorSimilarity = stringSimilarity.compareTwoStrings(this.bookToCompare.author, book.author);
          // Adjust the similarity thresholds as needed
          const similarityThreshold = 0.4;
          return (
            (titleSimilarity > similarityThreshold || authorSimilarity > similarityThreshold) &&
            book.id !== this.bookToCompare.id
          );
        }
        return false;
      });
    }
  },
  methods: {
    rateBook(bookId, rating) {
      this.selectedBook.rating = rating;
    }
  }
};
</script>
