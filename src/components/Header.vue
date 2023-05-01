<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">IID 2</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link">About</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/services" class="nav-link">Services</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contact" class="nav-link">Contact</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/biblioteque" class="nav-link">Biblioteque</router-link>
            </li>
          </ul>
          <form class="d-flex" :class="{ 'd-none': !showSearchBar }" @submit.prevent="searchBooks">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              v-model="searchValue"
            />
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      searchValue: '',
    }
  },
  methods: {
    searchBooks() {
      this.$emit('search-books', this.searchValue);
    }
  },
  computed: {
    showSearchBar() {
      return this.$route.path === '/biblioteque';
    },
  }
}
</script>

<style>
header {
  background-color: #f8f9fa;
  border-bottom: 1px solid #e9ecef;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

nav .navbar-brand {
  font-weight: bold;
  font-size: 1.5rem;
}

nav .nav-item {
  margin-right: 1rem;
}

nav .form-control {
  border-radius: 2rem;
}

.d-none {
  display: none;
}

/* Style for swiper navigation */
.swiper-container {
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-button-prev,
.swiper-button-next {
  color: #fff;
  font-size: 30px;
  margin: 0 10px;
  cursor: pointer;
}

.swiper-button-prev:hover,
.swiper-button-next:hover {
  color: #007bff;
}
</style>
