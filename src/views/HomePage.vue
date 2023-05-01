<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <section class="hero-section">
          <div class="container">
            <div class="row justify-content-center align-items-center">
              <div class="col-md-12 col-lg-8">
                <h1 class="text-center mb-4" ref="typedText"></h1>
                <h2 class="text-center mb-5">
                  "Data engineers turn raw data into useful insights."
                </h2>
                <div class="d-flex justify-content-center mb-4">
    <button class="btn btn-primary me-3" @click="register">Register</button>
    <button class="btn btn-secondary" @click="login">Login</button>
  </div>
                <div class="d-flex justify-content-center">
                  <a href="#" class="social-icon me-3">
                    <i class="bi bi-facebook"></i>
                  </a>
                  <a href="#" class="social-icon me-3">
                    <i class="bi bi-instagram"></i>
                  </a>
                  <a href="#" class="social-icon me-3">
                    <i class="bi bi-linkedin"></i>
                  </a>
                  <a href="#" class="social-icon">
                    <i class="bi bi-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>
  
<script>
import { useRouter } from 'vue-router'
import Typed from 'typed.js'
import Swiper from 'swiper'

export default {
  setup() {
    const router = useRouter()

    const register = () => {
      router.push({ name: 'Register' })
    }

    const login = () => {
      router.push({ name: 'Login' })
    }

    return { register, login }
  },

  mounted() {
    // Initialize typed.js for the hero section text
    const typedText = this.$refs.typedText
    new Typed(typedText, {
      strings: [
        'Informatique et Ingénierie des Données',
        'Informatique et Ingénierie des Données',
        'Informatique et Ingénierie des Données'
      ],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1000,
      loop: true
    })

    // Initialize Swiper for the hero section slider
    new Swiper('.swiper-container', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    })
  }
}
</script>

  
  <style>
  .hero-section {
    height: calc(100vh - 80px);
    display: flex;
    align-items: center;
    background-color: #212529;
  }
  
  .hero-section h1 {
    color: #fff;
    font-size: 4rem;
    font-weight: bold;
    text-shadow: 2px 2px #000;
  }
  
  .hero-section h1 span {
    color: #d5d5d5;
  }
  
  .hero-section h2 {
    color: #d5d5d5;
    font-size: 1.5rem;
  }
  
  .hero-section button {
    font-size: 1.2rem;
    font-weight: bold;
  }
  
  .swiper-pagination {
    bottom: 10px;
  }
  
  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  
  .swiper-button-prev {
    left: 10px;
  }
  
  .swiper-button-next {
    right: 10px;
  }

  .social-icon {
    color: #d5d5d5;
    font-size: 1.5rem;
    text-decoration: none;
  }

  .social-icon:hover {
    color: #fff;
  }
  </style>
  