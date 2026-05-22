<script setup>
import { ref, onMounted } from 'vue'
import { getProjects } from '../api/index.js'
import top_navbar from '../components/top_navbar.vue'
import buttom_navbar from '../components/buttom_navbar.vue'

const projects = ref([])
const loading = ref(true)
const error = ref(null)

onMounted(async () => {
  try {
    const data = await getProjects()
    projects.value = data.projects
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
})

const goToLink = (link) => {
  if (link) {
    window.open(link, '_blank', 'noopener,noreferrer')
  }
}
</script>

<template>
  <div class="home">

    <top_navbar />

    <section class="hero">
      <h1>My Projects</h1>

      <p v-if="loading" class="status">Loading...</p>

      <p v-else-if="error" class="status error">{{ error }}</p>

      <div v-else class="project-list">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="project-card"
        >
          <h3>{{ project.name }}</h3>
          <p>{{ project.description }}</p>
          <button v-if="project.link" @click="goToLink(project.link)">Go to</button>
          <button v-if="project.download" @click="goToLink(project.download)">Download</button>
        </div>
      </div>
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
  min-height: 100vh;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  gap: 32px;
}

.hero h1 {
    font-size: 48px;
}

.status {
  font-size: 20px;
  color: #94a3b8;
}
.status.error {
  color: #f87171;
}

.project-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  max-width: 900px;
}

.project-card {
  width: 280px;
  padding: 24px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  background: rgba(30, 41, 59, 0.8);
  border: 1px solid rgba(148, 163, 184, 0.15);
  border-radius: 12px;

  transition: all 0.2s;
}

.project-card:hover {
  border-color: rgba(148, 163, 184, 0.4);
  transform: translateY(-4px);
}

.project-card h3 {
  font-size: 22px;
  margin: 0 0 8px;
}

.project-card p {
  font-size: 16px;
  color: #94a3b8;
  margin: 0;
}

.project-card button{
  font-size: 20px;
  padding: 6px 28px;
  margin-top: 12px;

  border: none;
  border-radius: 12px;
  background: #3b82f6;
  color: white;
}

.project-card button:hover {
    opacity: 0.8;
}

</style>
