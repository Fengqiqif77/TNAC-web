<template>
  <div>
    <div class="operate" >
      <a-button type="primary" style="margin-top:50px;margin-left:90%;width: 100px" icon="plus" @click="add">
        添加
      </a-button>
    </div>
    <a-card
      style="margin-top: 24px"
      :bordered="false"
    >
      <span slot="title" style="color:#696969;font-size:25px;font-weight:bold">
        客户信息
      </span>
      <div slot="extra">
        <a-input-search style="margin-right: 16px; width: 272px;" />
        <a-radio-group defaultValue="a">
          <a-radio-button value="a">全部客户</a-radio-button>
          <a-radio-button value="b">活跃客户</a-radio-button>
          <a-radio-button value="c">不活跃用户</a-radio-button>
        </a-radio-group>
      </div>
      <div class="members">
        <a-row>
          <a-col :xs="12" :sm="6" :md="3" v-for="(item, index) in clientsList" :key="index">
            <a >
              <a-avatar style="width:60px;height:60px" size="large" :src="item.avatar"/>
              <p style="margin-top:10px" class="member">{{ item.name }}</p>
            </a>
          </a-col>
        </a-row>
      </div>
    </a-card>
  </div>
</template>

<script>
export default {
    components: {
       name: 'Clients'
    },
    data () {
        return {
            clientsList: []
        }
    },
    mounted () {
    this.getClients()
    },
    methods: {
    getClients () {
      this.$http.get('/workplace/teams').then(res => {
        this.clientsList = res.result
      })
    }
    }
}
</script>
