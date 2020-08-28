<template>
  <a-table :columns="columns" :data-source="data" rowKey="user_id">
    <!-- <template slot="name" slot-scope="text">
      <span>{{ text }}</span>
    </template> -->
  </a-table>
</template>
<script>
import { getUserList } from "@/api/user";
export default {
  data() {
    return {
      data: [],
      columns: [
        {
          title: "用户名",
          dataIndex: "account_name",
          key: "account_name"
        },
        {
          title: "姓名",
          dataIndex: "real_name",
          key: "real_name"
        },
        {
          title: "手机号",
          dataIndex: "mobile",
          key: "mobile"
        },
        {
          title: "操作",
          key: "action",
          scopedSlots: { customRender: "action" }
        }
      ]
    };
  },
  methods: {
    getList() {
      getUserList()
        .then(res => {
          console.log(res);
          if (res) {
            this.data = res.user;
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.getList();
  }
};
</script>
