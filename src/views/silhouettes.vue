<template>
  <div>
    <a-card-grid
      class="project-card-grid"
      :key="i"
      v-for="(item, i) in projects"
    >
      <a-card hoverable style="width: 240px">
        <img
          slot="cover"
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
        <a-card-meta title="Europe Street beat">
          <template slot="description">
            www.instagram.com
          </template>
        </a-card-meta>
      </a-card>
    </a-card-grid>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: "sdsds",
          cover:
            "https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png",
          description: "sdsdsdsdsds"
        },
        {
          title: "sdsds",
          cover:
            "https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png",
          description: "sdsdsdsdsds"
        },
        {
          title: "sdsds",
          cover:
            "https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png",
          description: "sdsdsdsdsds"
        },
        {
          title: "sdsds",
          cover:
            "https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png",
          description: "sdsdsdsdsds"
        }
      ]
    };
  }
};
</script>

<style lang="sass" scoped></style>
