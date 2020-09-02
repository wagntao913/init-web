<template>
  <a-layout class="layouts">
    <a-layout>
      <a-layout-sider
        theme="light"
        v-model="collapsed"
        breakpoint="lg"
        :trigger="null"
        collapsible
      >
        <!-- <div class="logo" /> -->
        <a-menu
          theme="light"
          :style="{ height: 'calc(100vh)' }"
          mode="inline"
          :default-selected-keys="['home']"
        >
          <a-menu-item
            v-for="menu in menuList"
            :key="menu.path"
            @click="linkClick(menu.path)"
          >
            <a-icon :type="menu.icon" />
            <span> {{ menu.title }} </span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout style="min-height: 100vh;">
        <a-layout-header
          :style="{
            zIndex: 1,
            width: '100%',
            background: '#fff',
            borderBottom: '1px solid #eee',
            height: '44px'
          }"
        >
          <div
            style="display: flex;justify-content: space-between;align-item:center;"
          >
            <a-icon
              class="trigger"
              :type="collapsed ? 'menu-unfold' : 'menu-fold'"
              @click="() => (collapsed = !collapsed)"
            />
            <a-dropdown
              class="right-header-content"
              :overlayStyle="{ zIndex: 100 }"
            >
              <a class="ant-dropdown-link" @click="e => e.preventDefault()">
                <a-avatar
                  src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
                ></a-avatar>
                张无忌
              </a>
              <a-menu slot="overlay">
                <a-menu-item key="0">
                  <a>个人中心</a>
                </a-menu-item>
                <a-menu-item key="1">
                  <a>退出登录</a>
                </a-menu-item>
              </a-menu>
            </a-dropdown>
          </div>
        </a-layout-header>
        <a-layout-content :style="{ background: '#fff', padding: '15px' }">
          <transition fade>
            <router-view />
          </transition>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  data() {
    return {
      collapsed: false,
      menuList: [
        {
          title: "首页",
          path: "home",
          icon: "home"
        },
        {
          title: "时间线",
          path: "timeLine",
          icon: "bars"
        },
        {
          title: "剪影",
          path: "Silhouettes",
          icon: "picture"
        },
        {
          title: "小记",
          path: "diary",
          icon: "read"
        },
        {
          title: "设置",
          path: "settings",
          icon: "read"
        }
      ]
    };
  },
  methods: {
    linkClick(route) {
      this.$router.push(route);
    }
  }
};
</script>

<style lang="less">
.layouts {
  height: 100vh;
  .a-layout-sider {
    min-height: 100vh;
  }
  .logo {
    height: 44px;
    border: 1px solid #eee;
    // background: #eee;
  }
  .trigger {
    font-size: 18px;
    line-height: 44px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
  }
  .trigger:hover {
    color: @primary-color;
    background: rgba(0, 0, 0, 0.025);
  }
  .right-header-content {
    z-index: 100;
    height: 44px;
    color: rgba(0, 0, 0, 0.65);
    // background: #eee;
    margin-right: 25px;
    padding: 0px 10px;
  }
  .right-header-content:hover {
    color: @primary-color;
    background: rgba(0, 0, 0, 0.025);
  }
  /deep/ .ant-menu-inline {
    height: ~"calc(100vh)";
  }
  /deep/ .ant-layout-header {
    height: 64px;
    padding: 0px;
    line-height: 44px;
    background: #001529;
  }
}
</style>
