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
                    id="register-tab"
                    data-bs-toggle="tab"
                    href="#register"
                    role="tab"
                    aria-controls="register"
                    aria-selected="true"
                  >
                    Register
                  </a>
                </li>
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link"
                    id="login-tab"
                    data-bs-toggle="tab"
                    href="#login"
                    role="tab"
                    aria-controls="login"
                    aria-selected="false"
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
                  id="register"
                  role="tabpanel"
                  aria-labelledby="register-tab"
                >
                <form @submit.prevent="submitForm">
                
  <div class="mb-3">
    <label for="uniqueLoginEmail" class="form-label">Email address</label>
    <input type="email" class="form-control" id="uniqueLoginEmail" />
  </div>
  <div class="mb-3">
    <label for="uniqueLoginPassword" class="form-label">Password</label>
    <input type="password" class="form-control" id="uniqueLoginPassword" />
  </div>
  <button type="submit" class="btn btn-primary">Login</button>
</form>
                </div>
                <div
                  class="tab-pane fade"
                  id="login"
                  role="tabpanel"
                  aria-labelledby="login-tab"
                >
                  <form>
                    <div class="mb-3">
                      <label for="loginEmail" class="form-label">Email address</label>
                      <input type="email" class="form-control" id="loginEmail" v-model="form.email"/>
                    </div>
                    <div class="mb-3">
                      <label for="loginPassword" class="form-label">Password</label>
                      <input type="password" class="form-control" id="loginPassword" v-model="form.email"/>
                    </div>
                    <button type="submit" class="btn btn-primary">Login</button>
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
      }
    };
  },
  methods: {
  async submitForm() {
    try {
      const response = await axios.post('http://localhost/api/login.php', this.form);

      if (response.data.success) {
        // Handle successful login
        console.log(response.data.message);

        // Save user data or token to a store or localStorage if necessary
        // this.$store.commit('setUser', response.data.user); // If you're using Vuex
        // localStorage.setItem('user', JSON.stringify(response.data.user)); // If you're using localStorage

        // Redirect to a protected page (e.g., a dashboard)
        this.$router.push('/dashboard');
      } else {
        // Handle unsuccessful login
        console.log(response.data.message);
        // Show an error message to the user
        alert(response.data.message);
      }
    } catch (error) {
      // Handle errors
      console.log("Error occurred while logging in:", error);
      alert('An error occurred while logging in. Please try again later.');
    }
  },
},

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
  