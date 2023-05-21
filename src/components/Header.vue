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
          <li class="nav-item">
            <router-link to="/dashboard" class="nav-link">Dashboard</router-link>
          </li>
          <li class="nav-item" v-if="isLoggedIn">
            <router-link to="/profile" class="nav-link">Your Profile</router-link>
          </li>
          <!-- {{ profilePictureID }} -->
        </ul>
        <div v-if="isLoggedIn" class="d-flex ">
          <img :src="profilePictureUrl" alt="Profile Picture" class="navbar-profile-picture" />
          <button class="btn btn-outline-danger me-2" @click="logout">Logout</button>
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
      // profilePicture: ''
    }
  },
  methods: {
    searchBooks() {
      this.$emit('search-books', this.searchValue);
    },
    logout() {
  this.$store.commit('setUsername', null);
  this.$store.commit('setLoggedInState', false);
  this.$router.push('/login');
},


  },
  computed: {
    showSearchBar() {
      return this.$route.path === '/biblioteque';
    },
    isLoggedIn() {
      // This will be true if username is not null
      return !!this.$store.state.username ;

    },
    profilePictureID() {
      return this.$store.getters.profilePictureID;
    },
    profilePictureUrl() {
      if (this.$store.state.profilePictureID) {
        return `http://localhost/api/${this.profilePictureID}`;
      } else {
        return 'http://localhost/api/uploads/klb.jpg';
      }
    },
  },
//   created() {
//   this.profilePicture = this.$store.state.profilePicture;
// },

  
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

/* .profile-picture {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 8px;
} */
.navbar-profile-picture {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 5px;
}
</style>
