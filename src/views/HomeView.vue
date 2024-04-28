<script setup lang="ts"></script>

<template>
  <div>
    div

    <div class="container full-height">
      <img class="image" src="../assets/alan-turing.jpg" alt="Alan Turing" />
      <h1 class="title">
        “I believe that sometimes the people who don't expect anything are the
        ones who achieve the most.”
      </h1>
    </div>
    <div class="container full-height"></div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10rem;
  padding: 0 10rem 0 0;
}

.full-height {
  height: 100svh;
}

.image {
  height: 100%;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
