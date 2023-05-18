<template>
    <div class="container-fluid">
      <div class="row">
        <nav class="col-md-2 d-none d-md-block bg-light sidebar">
          <div class="sidebar-sticky">
            <ul class="nav flex-column">
              <li class="nav-item">
                <router-link class="nav-link" to="/dashboard" active-class="active">
                  Dashboard
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/profile" active-class="active">
                  Your Profile
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/biblioteque" active-class="active">
                  Your Books
                </router-link>
              </li>
            </ul>
          </div>
        </nav>
  
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
          <h2>Welcome, {{ username }}</h2>
          <button class="btn btn-primary" @click="logout">Logout</button>
        </main>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      username() {
        return this.$store.state.username;
      },
    },
    methods: {
      logout() {
        this.$store.commit('setUsername', null);
        this.$router.push('/login');
      },
      
    },
    
  };
  </script>
  
  <style scoped>
  nav .nav-link {
    color: #333;
    transition: color 0.3s ease;
  }
  
  nav .nav-link:hover {
    color: #007bff;
  }
  
  main {
    padding: 20px;
    background-color: #f8f9fa;
  }
  
  button {
    margin-top: 20px;
  }
  </style>
  