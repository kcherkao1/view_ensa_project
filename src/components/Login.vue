<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">
            <ul class="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                <a
                  class="nav-link active"
                  id="login-tab"
                  data-bs-toggle="tab"
                  href="#login"
                  role="tab"
                  aria-controls="login"
                  aria-selected="true"
                >
                  Login
                </a>
              </li>
            </ul>
          </div>
          <div class="card-body">
            <div class="tab-content" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="login"
                role="tabpanel"
                aria-labelledby="login-tab"
              >
                <form @submit.prevent="submitForm">
                  <div class="mb-3">
                    <label for="email" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="email" name="email" v-model="form.email" />
                  </div>
                  <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" id="password" name="password" v-model="form.password" />
                  </div>
                  <button type="submit" class="btn btn-primary">Login</button>
                  <span class="ml-2">Not registered yet? <router-link to="/register">Register now</router-link></span>
                  <!-- Display error message if it exists -->
    <div v-if="errorMessage" class="alert alert-danger mt-3">{{ errorMessage }}</div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'LoginForm',
  data() {
    return {
      form: {
        email: '',
        password: ''
      },
      errorMessage: '', // Add a new error message variable
      profilePicture: '' // Add the profilePicture property
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await axios.post('/api/login.php', this.form);
        console.log(response.data);
        if (response.data.success) {
    // Handle successful login
    this.$store.commit('setUsername', response.data.username);
    this.$router.push('/dashboard');
    this.$store.commit('setLoggedInState', true);
    this.$store.commit('SET_ID', response.data.id);
    this.$store.commit('setEmail', response.data.email);
    this.profilePicture = response.data.profilePicture; // Assign the profilePicture value
    


        } else {
          // Handle unsuccessful login
          console.log(response.data.message);
          console.log(response.data.debug); // Log the detailed error message
          // Show an error message to the user
          this.errorMessage = response.data.message;
        }
      } catch (error) {
        // Handle errors
        console.log('Error occurred while logging in:', error);
        this.errorMessage = 'An error occurred while logging in. Please try again later.';
      }
    }
  }
};
</script>

<style>
body {
  background: url('https://source.unsplash.com/1600x900/?data,science') no-repeat center center fixed;
  background-size: cover;
}

.card {
  margin-top: 100px;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
