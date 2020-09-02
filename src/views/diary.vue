<template>
  <div>
    <mavon-editor
      v-model="value"
      @change="updateDoc"
      style="z-index: 2"
      @save="markDownSave"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ""
    };
  },
  methods: {
    markDownSave(val) {
      console.log(val);
    },
    updateDoc(mark, html) {
      console.log(mark);
      console.log(html);
    }
  }
};
</script>

<style lang="scss" scoped></style>
