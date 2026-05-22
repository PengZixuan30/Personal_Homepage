<script setup>
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// ========== 备案信息（暂时隐藏） ==========
// const icp = '苏ICP备XXXXXXXX号-X'
</script>

<template>
    <footer class="bottom-bar">

        <div class="left">
        <!-- <a href="https://beian.miit.gov.cn/" target="_blank" class="icp">{{ icp }}</a> -->
            <a
                href="https://github.com/PengZixuan30/Personal_Homepage"
                target="_blank"
                rel="noopener"
                class="oss-link"
            >
                <span class="copyright">MIT License &copy; {{ new Date().getFullYear() }} Yello</span>
            </a>
        </div>

        <div class="right">
            <button class="top-btn" @click="scrollToTop">
                ▲ Back Top
            </button>
        </div>

  </footer>
</template>

<style scoped>

.bottom-bar {
  position: relative;
  z-index: 100;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;

  padding: 20px 60px;

  background: rgba(15, 23, 42, 0.85);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(148, 163, 184, 0.15);

  color: #94a3b8;
  font-size: 14px;
}

.bottom-bar a {
  color: #94a3b8;
  text-decoration: none;
  transition: color 0.2s;
}
.bottom-bar a:hover {
  color: white;
}

.left {
  display: flex;
  align-items: center;
  gap: 20px;
}

.icp {
  font-size: 13px;
}
.copyright {
  font-size: 14px;
}

.oss-link {
  font-size: 14px;
  font-weight: 500;
}

.right {
  display: flex;
  align-items: center;
  gap: 12px;
}

.top-btn {
  padding: 6px 14px;

  border: 1px solid rgba(148, 163, 184, 0.2);
  border-radius: 8px;

  background: transparent;
  color: #94a3b8;

  font-size: 14px;
  font-family: inherit;

  cursor: pointer;
  transition: all 0.2s;
}

.top-btn:hover {
  border-color: rgba(148, 163, 184, 0.5);
  color: white;
  background: rgba(255, 255, 255, 0.05);
}

@media (max-width: 768px) {
  .bottom-bar {
    flex-direction: column;
    text-align: center;
    padding: 20px 24px;
    gap: 12px;
  }

  .left,
  .right {
    justify-content: center;
  }
}

</style>