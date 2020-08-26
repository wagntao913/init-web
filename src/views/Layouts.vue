<template>
  <a-layout class="layouts">
    <a-layout-sider theme="light">
      <div class="logo" />
      <a-menu theme="light" mode="inline" :default-selected-keys="['1']">
        <a-menu-item key="1">
          <a-icon type="user" />
          <span>
            5454
            <router-link to="about"></router-link>
          </span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="video-camera" />
          <span>nav 2</span>
        </a-menu-item>
        <a-menu-item key="3">
          <a-icon type="upload" />
          <span>nav 3</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-content style="background: #fff">
        <!-- Content -->
        <transition>
          <router-view />
        </transition>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  data() {
    return {
      collapsed: false
    };
  }
};
</script>

<style lang="less">
.layouts {
  height: 100vh;
  .a-layout-sider {
    height: 100vh;
  }
  .logo {
    height: 56px;
    background: #eee;
  }
  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
  }
  .trigger:hover {
    color: #1890ff;
  }
}
</style>
