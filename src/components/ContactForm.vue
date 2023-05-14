<template>
    <div class="container my-5">
      <h1 class="text-center bib">Contact Us</h1>
      <form>
        <div class="mb-3">
          <label for="name" class="form-label">Name</label>
          <input type="text" class="form-control" id="name" placeholder="Enter your name">
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input type="email" class="form-control" id="email" placeholder="Enter your email">
        </div>
        <div class="mb-3">
          <label for="message" class="form-label">Message</label>
          <textarea class="form-control" id="message" rows="5" placeholder="Enter your message"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Send</button>
      </form>
    </div>
  </template>
  
  <style>
  .form-control {
    transition: box-shadow 0.3s ease-in-out;
  }
  
  .form-control:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
  
  .btn-primary {
    transition: background-color 0.3s ease-in-out;
  }
  
  .btn-primary:hover {
    background-color: #007bff;
  }
  </style>
  