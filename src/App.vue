<template>
  <div id="app">
    <Header @search-books="onSearchBooks" />
    <router-view :search="searchValue" />
  </div>
</template>

<script>
import Header from '@/components/Header'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Swiper, { Navigation, Pagination, Scrollbar } from 'swiper';

Swiper.use([Navigation, Pagination, Scrollbar]);

export default {
  name: 'App',
  components: {
    Header
  },
  data() {
    return {
      searchValue: ''
    };
  },
  methods: {
    onSearchBooks(value) {
      this.searchValue = value;
    }
  }
}
</script>

<style>
  /* Your styles */
</style>
