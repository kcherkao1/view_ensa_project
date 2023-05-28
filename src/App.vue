<template>
  <div id="app">
    <Header @search-books="onSearchBooks" />
    <router-view :search="searchValue" />
    <chatbot></chatbot>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Header from '@/components/Header'
import chatbot from '@/components/chatbot'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Swiper, { Navigation, Pagination, Scrollbar } from 'swiper';

Swiper.use([Navigation, Pagination, Scrollbar]);

export default {
  
  name: 'App',
  components: {
    Header,
    chatbot,
  },
  data() {
    return {
      searchValue: ''
    };
  },
  methods: {
    ...mapActions([
      'initializeStore'
    ]),
    onSearchBooks(value) {
      this.searchValue = value;
    }
  },
  created() {
    this.initializeStore();
  },
}
</script>
<style>
  /* Your styles */
</style>
