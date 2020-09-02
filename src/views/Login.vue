<template>
  <div class="page-content">
    <a-card
      hoverable
      style="width: 300px;opacity: 0.82;border-radius:5px;background:rgba(255,255,255,0.5)"
    >
      <a-form-model
        layout="vertical"
        :model="formInline"
        @submit="loginClick()"
        @submit.native.prevent
      >
        <a-form-model-item>
          <a-input v-model="formInline.user" placeholder="Username">
            <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
          </a-input>
        </a-form-model-item>
        <a-form-model-item>
          <a-input
            v-model="formInline.password"
            type="password"
            placeholder="Password"
          >
            <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
          </a-input>
        </a-form-model-item>
        <a-form-model-item>
          <a-button type="" html-type="submit" block ghost>
            Log in
          </a-button>
        </a-form-model-item>
      </a-form-model>
    </a-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formInline: {
        user: "",
        password: ""
      }
    };
  },
  watch: {
    $route: {
      deep: true,
      immediate: true,
      handler(route) {
        this.redirect = route.query && route.query.redirect;
      }
    }
  },
  methods: {
    loginClick() {
      console.log(this.formInline);
      const params = {
        username: this.formInline.user,
        password: this.formInline.password
      };
      this.$store.dispatch("Login", params).then(() => {
        this.$router.push({
          path: this.redirect || "/"
        });
      });
    }
  }
};
</script>
<style lang="less" scoped>
.page-content {
  width: 100%;
  height: 100vh;
  display: flex;
  align-content: center;
  align-items: center;
  text-align: center;
  justify-content: center;
  background: url(../assets/bg1.jpg) no-repeat;
  background-size: cover;
  .ant-card-bordered {
    border: none;
  }
}
</style>
