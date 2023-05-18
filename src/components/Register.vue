<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">
            <h1 class="text-center">Register</h1>
          </div>
          <div class="card-body">
            <!-- In the Register form section -->
            <form @submit.prevent="submitForm">
              <div class="mb-3">
        <label for="username" class="form-label">Username</label>
        <input type="text" class="form-control" id="username" name="username" v-model="form.username" />
    </div>
              <!-- Update other form inputs with v-model as well -->
              <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input type="email" class="form-control" id="email" name="email" v-model="form.email" />
              </div>

              <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" name="password" v-model="form.password"/>
              </div>
              <button type="submit" class="btn btn-primary">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

  
  <script>
import axios from 'axios';

export default {
  name: 'RegisterPage',
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
    const response = await axios.post('http://localhost/api/register.php', this.form);
    
    if (response.data.success) {
      // Handle successful registration here
      this.$store.commit('setUsername', response.data.username);
      this.$store.commit('setLoggedInState', true);
      this.$router.push('/dashboard');
      this.$store.commit('SET_ID', response.data.id);

    } else {
      // Handle unsuccessful registration here
      alert(response.data.message);
    }
  } catch (error) {
    // Handle errors here
    console.error('Error occurred while registering:', error);
    alert('An error occurred while registering. Please try again later.');
  }
},

  },
};
</script>
  
  <style>
    .container {
      margin-top: 50px;
    }
  
    .card {
      background-color: rgba(255, 255, 255, 0.8);
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
  </style>
  