<template>
  <div class="container">
    <h2>Profile</h2>
    <form @submit.prevent="updateProfile">
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" class="form-control" id="username" v-model="username">
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" class="form-control" id="password" v-model="password">
      </div>
      <div class="form-group">
        <label for="profilePicture">Profile Picture</label>
        <input type="file" class="form-control-file" id="profilePicture" @change="onFileChange">
      </div>
      <!-- {{ this.profilePicture }} -->
      <!-- {{ profilePictureUrl }}<br>
      {{ profilePictureID }}<br>
      {{ profilePicture }}
      {{ id }} -->
      <img :src="profilePictureUrl" alt="Profile Picture" v-if="profilePictureUrl" class="profile-picture"/>

      <button type="submit" class="btn btn-primary">Update Profile</button>
    </form>
  </div>
  
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: this.$store.state.username,
      password: '',
      email: this.$store.state.email,
      profilePicture: null,
      profilePictureId: this.$route.params.profilePictureId,
    };
  },
  created() {
    console.log(this.$store.state.profilePicture);
    
  this.$store.dispatch('fetchProfilePicture', this.id);
}
,
  computed: {
    id() {
      return this.$store.getters.id;

    },
    profilePictureID() {
      return this.$store.getters.profilePictureID;
      
      
    },
    
    profilePictureUrl() {
  let url = '';
  if (this.profilePictureID) {
    url = `http://localhost/api/${this.profilePictureID}`;
  } else {
    url = 'http://localhost/api/uploads/klb.jpg'; // Return a default picture or just an empty string
  }
  console.log('Used profile picture URL: ', url);
  return url;
}


  },
  
  methods: {
    onFileChange(e) {
      this.profilePicture = e.target.files[0];
    },
    
    updateProfile() {
      if (!this.profilePicture) {
        alert('Please select a profile picture before updating your profile.');
        return;
      }
      let formData = new FormData();
      formData.append('id', this.id);
      formData.append('username', this.username);
      formData.append('password', this.password);
      formData.append('email', this.email);
      if (this.profilePicture != null) {
        formData.append('profilePicture', this.profilePicture);
      }
      console.log(formData);
      axios.post('/api/updateProfile.php', formData)
        .then(response => {
          console.log("Response data:", response.data);
          if (response.data.message === 'Profile updated') {
            // Update username and profile picture in the store
            this.$store.commit('setUsername', this.username);
            this.$store.commit('setProfilePicture', response.data.user.profilePicture);
            console.log("Updated Profile Picture:", this.$store.state.profilePicture); // Add this line

            alert('Profile updated successfully!');
          } else {
            alert('Profile updated successfully!');
          }
        })
        .catch(error => {
          console.log(error.response);
          alert('Profile update failed. Please check the console for more details.');
        });
    }
  }
};
</script>


<style scoped>
/* Add your CSS here */
.profile-picture {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
}
</style>
