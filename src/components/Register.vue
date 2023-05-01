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
  <!-- Update other form inputs with v-model as well -->
  <div class="mb-3">
  <label for="registerEmail" class="form-label">Email address</label>
  <input type="email" class="form-control" id="registerEmail" v-model="form.email" />
</div>

  <div class="mb-3">
    <label for="password" class="form-label">Password</label>
    <input type="password" class="form-control" id="registerFormPassword" />

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
        username: '',
        email: '',
        password: ''
      }
    };
  },
  methods: {
    async submitForm() {
  try {
    const response = await axios.post('http://localhost/api/register.php', this.form);
    // Handle successful registration here
    console.log(response.data); // Use the response variable to avoid the no-unused-vars error
  } catch (error) {
    // Handle errors here
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
  