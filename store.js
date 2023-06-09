import { createStore } from 'vuex'
import faker from 'faker'
import axios from 'axios';
// import stringSimilarity from 'string-similarity'

function generateRandomBook() {
  let title = '';
  let author = '';

  let titleLength = faker.datatype.number({ min: 1, max: 5 });
  let authorLength = faker.datatype.number({ min: 1, max: 2 });

  for (let i = 0; i < titleLength; i++) {
    title += faker.random.words() + ' ';
  }

  for (let i = 0; i < authorLength; i++) {
    author += faker.name.findName() + ' ';
  }

  return {
    id: faker.datatype.number(),
    title: title.trim(),
    author: author.trim(),
    image: faker.image.imageUrl(),
  };
}

const baseBooks = [
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
  },
  {
    id: 9,
    title: "Startup Lessons",
    author: "Eric Johnson",
    image: "https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
  },
  {
    id: 10,
    title: "The Agile Startup",
    author: "John Ries",
    image: "https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
  },
  // Additional similar books...
];

const books = baseBooks.concat(Array.from({ length: 10000 }, generateRandomBook));

const store = createStore({
  state: {
    id: null,
    books: books,
    username: null,
    email: '',
    profilePictureID: '',
    isLoggedIn: false, // change this based on your actual state
  },
  getters: {
    getBooks: state => state.books,
    isAuthenticated: state => state.isLoggedIn,
    id: state => state.id,
    profilePictureID: state => state.profilePictureID,
  },
  actions: {
    initializeStore({ commit }) {
      commit('INITIALIZE_STORE', books);
    },
    fetchProfilePicture({ commit }, userId) {
      axios.get(`/api/fetchUser.php?id=${userId}`)
        .then(response => {
          const user = response.data.user;

          // Commit the profilePicture mutation to update the store
          commit('setProfilePicture', user.profilePicture);
        })
        .catch(error => {
          console.error('Error fetching profile picture:', error);
        });
    },
    
  },
  mutations: {
    INITIALIZE_STORE(state, books) {
      state.books = books;
    },
    setUsername(state, username) {
      state.username = username;
    },
    setEmail(state, email) {  // add this function
      state.email = email;
    },
    setProfilePicture(state, profilePicture) {
    
      state.profilePictureID = profilePicture;
    },

    setLoggedInState(state, isLoggedIn) {
      state.isLoggedIn = isLoggedIn;
    },
    SET_ID(state, id) {
      state.id = id;
    },
    
  },
  
})

export default store
