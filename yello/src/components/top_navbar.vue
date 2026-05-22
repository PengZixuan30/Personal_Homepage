<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const closeMenu = () => {
  menuOpen.value = false
}
</script>

<template>
  <nav class="navbar">

    <div class="logo">
      <a href="/">Yello</a>
    </div>

    <div class="links desktop-links">
      <a href="/projects">Projects</a>
      <a href="/about">About</a>
    </div>

    <button
      class="menu-toggle"
      :class="{ open: menuOpen }"
      @click="toggleMenu"
      @mouseenter="menuOpen = true"
      aria-label="菜单"
    >
      <span v-if="!menuOpen" class="icon-hamburger">☰</span>
      <span v-else class="icon-arrow">▼</span>
    </button>

    <Transition name="slide">
      <div
        v-if="menuOpen"
        class="mobile-menu"
        @mouseleave="closeMenu"
      >
        <a href="#skills" @click="closeMenu">Skills</a>
        <a href="/projects" @click="closeMenu">Projects</a>
        <a href="/about" @click="closeMenu">About</a>
      </div>
    </Transition>

  </nav>
</template>

<style scoped>

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 1000;

  width: 80%;
  height: 70px;
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 60px;

  background: rgba(15, 23, 42, 0.7);
  backdrop-filter: blur(10px);
}

.logo a {
  font-size: 28px;
  font-weight: bold;
  color: white;
  text-decoration: none;
}

.links {
  display: flex;
  gap: 32px;
}

.links a {
  color: #cbd5e1;
  text-decoration: none;
  font-size: 18px;
  transition: color 0.2s;
}

.links a:hover {
  color: white;
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  color: #cbd5e1;
  font-size: 22px;
  transition: all 0.3s;
}

.menu-toggle:hover,
.menu-toggle.open {
  color: white;
}

.icon-hamburger {
  display: inline-block;
  transition: transform 0.3s;
}

.icon-arrow {
  display: inline-block;
  animation: flipIn 0.3s ease;
}

@keyframes flipIn {
  from {
    transform: rotateX(90deg);
    opacity: 0;
  }
  to {
    transform: rotateX(0deg);
    opacity: 1;
  }
}

.mobile-menu {
  display: none;
}

.slide-enter-active {
  transition: all 0.3s ease-out;
}
.slide-leave-active {
  transition: all 0.25s ease-in;
}
.slide-enter-from {
  opacity: 0;
  transform: translateY(-12px);
}
.slide-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

@media (max-width: 768px) {

  .navbar {
    width: 80%;
    left: 0;
    right: 0;
    padding: 0 24px;
    justify-content: space-between;
  }

  .desktop-links {
    display: none;
  }

  .menu-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .mobile-menu {
    display: flex;
    flex-direction: column;
    gap: 4px;

    position: absolute;
    top: 70px;
    right: 12px;

    min-width: 160px;
    padding: 8px 0;

    background: rgba(15, 23, 42, 0.95);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(148, 163, 184, 0.15);
    border-radius: 12px;

    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  }

  .mobile-menu a {
    display: block;
    padding: 10px 20px;

    color: #cbd5e1;
    text-decoration: none;
    font-size: 16px;

    border-radius: 6px;
    transition: all 0.15s;
  }

  .mobile-menu a:hover {
    background: rgba(255, 255, 255, 0.08);
    color: white;
  }

}

</style>