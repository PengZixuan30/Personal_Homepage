<script setup>
import { useRouter } from 'vue-router'
import top_navbar from '../components/top_navbar.vue';
import buttom_navbar from '../components/buttom_navbar.vue';

const router = useRouter()

const goToProjects = () => {
  router.push('/projects')
}
</script>

<template>
  <div class="home">

    <top_navbar />

    <section class="hero">
        <h1>Hello! I'm Yello</h1>

        <p>Python / MCDReforged Plugin / Vue</p>

        <button @click="goToProjects">My Projects</button>
    </section>

    <buttom_navbar />

  </div>
</template>

<style scoped>

.home {
  min-height: 100vh;
  background: #0f172a;
  color: white;
}

.hero {
  height: 100vh;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  gap: 20px;
}

.hero h1 {
  font-size: 72px;
}

.hero p {
  font-size: 24px;
  color: #94a3b8;
}

.hero button {
  padding: 12px 24px;

  border: none;
  border-radius: 12px;

  background: #3b82f6;
  color: white;

  font-size: 18px;

  cursor: pointer;
}

button:hover {
  opacity: 0.8;
}

</style>