<template>
  <div class="nav">
    <div class="branding-container">
      <div class="branding">
        <div class="branding-rect"></div>
      </div>
    </div>
    <div class="media-info">
      <img src="@/assets/images/image-avatar.jpg" alt="" class="user-avatar">
    </div>
  </div>
</template>

<script>
export default {
  name: 'navigation'
}
</script>

<style lang="scss" scoped>
@import '@/assets/base.css';

.nav {
  height: 100vh;
  width: 80px;
  background-color: #1e2139;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20x;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  z-index: 4;
}

.branding-container {
  width: 100%;
  height: 102px;
  background-color: #7b5cfa;
  border-bottom-right-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.branding {
  width: 40px;
  height: 40px;
  position: relative;
  background-color: white;
  border-radius: 50%;
}

.branding-rect {
  background: #7b5cfa;
  position: absolute;
  width: 100%;
  height: 100%;
  clip-path: polygon(80% 0, 20% 0, 50% 50%);
}

.media-info {
  align-items: center;
  justify-content: center;
  display: flex;
  align-items: center;

}

.user-avatar {
  border-radius: 50%;
  width: 40px;
  height: 40px;
}

@media screen and (max-width: 1024px) {
  .nav {
    height: 80px;
    width: 100vw;
    flex-direction: row;
    justify-content: space-between;
    border-radius: 0;
  }

  .branding-container {
    width: 80px;
    height: 100%;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }

  .branding {
    width: 40px;
    height: 40px;
    position: relative;
    background-color: white;
    border-radius: 50%;
  }

  .media-info {
    width: 90px;
    height: 100%;
    border-left: 1px solid rgb(73, 79, 110);
    border-top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>