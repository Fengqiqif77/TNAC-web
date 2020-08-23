<template>
  <div>
    <a-row :gutter="24">
      <a-col :xl="12" :lg="12" :md="24" :sm="24" :xs="24">
        <a-card
          class="agenda"
          :loading="loading"
          style="margin-bottom: 20px;"
          :bordered="false"
          :body-style="{ padding: 0 }">
          <span slot="title" style="color:#696969;font-size:25px;font-weight:bold">日程安排</span>
          <a slot="extra" style="font-size:15px">查看日历>></a>
          <div class="agenda-list">
            <a-list :dataSource="agendadata">
              <a-list-item :key="index" v-for="(item,index) in activities">
                <a-list-item-meta style="{ height: '100%' }">
                  <div slot="title" style="width:100px;height:50px;margin-left:20px;text-align:center;line-height:50px">
                    <span style="color:#696969;font-size:20px;font-weight:bold"> {{ item.time }} </span>
                  </div>
                </a-list-item-meta>
                <div class="list-item" style="width:500px;margin-left:8px;height:28px;line-height:28px">
                  <span style="color:#696969;font-size:18px" slot="title"> {{ item.name }} </span>
                  <p slot="description" style="font-size:13px;color:#C0C0C0"> {{ item.site }} </p>
                </div>
                <div style="margin: 0 5px">
                  <a-button style="margin-right:20px" size="normal" type="primary" >进行准备</a-button>
                </div>
              </a-list-item >
            </a-list>
          </div>
        </a-card>
      </a-col>
      <a-col :xl="12" :lg="12" :md="24" :sm="24" :xs="24">
        <a-card
          class="Notification"
          :loading="loading"
          style="margin-bottom: 20px;"
          :bordered="false"
          :body-style="{ padding: 0 }">
          <span slot="title" style="color:#696969;font-size:25px;font-weight:bold">注意事项</span>
          <a slot="extra" style="font-size:15px">查看注意事项>></a>
          <div class="agenda-list">
            <a-list :dataSource="Notification-data">
              <a-list-item :key="index" v-for="(item,index) in notes">
                <a-list-item-meta >
                  <div slot="title" style=";margin-left:20px;height:20px;width:400px">
                    <div slot="title" style="color:#696969;font-size:17px">
                      <span> {{ item.name }} </span>
                      在<span>{{ item.time }}</span>的预约计划已经修改
                    </div>
                    <p style="font-size:13px;color:#C0C0C0">分类：消息</p>
                  </div>
                </a-list-item-meta>
                <div style="text-align:center;width:100px;margin-right:5%">
                  <span style="color:#696969;font-size:16px;font-weight:bold" >七月 15</span>
                  <p >{{ item.time }}</p>
                </div>
                <!-- <a-popconfirm title="是否要删除此行？" @confirm="remove(record.key)"> -->
                  <a-icon slot="actions" style="font-size:22px;width:60px;margin:0 4%" theme="twoTone" two-tone-color="#FF0070" type="close-square" />
                <!-- </a-popconfirm> -->
              </a-list-item>
            </a-list>
          </div>
        </a-card>
      </a-col>
    </a-row>
    <a-row :gutter="24">
      <a-col :xl="12" :lg="12" :md="24" :sm="24" :xs="24">
        <a-card
          class="clients"
          :loading="loading"
          style="margin-bottom: 20px;"
          :bordered="false"
          :body-style="{ padding: 0 }">
          <span slot="title" style="color:#696969;font-size:25px;font-weight:bold">客户</span>
          <div slot="extra">
            <a-input-search placeholder="搜索..." style="margin-right: 16px; width: 272px;color:#C0C0C0;" />
            <a style="font-size:15px">上锁/解锁>></a>
          </div>
          <div class="clients-list">
            <a-row>
              <a-col :xs="24" :sm="12" :md="6" v-for="(item, index) in clients_data" :key="index">
                <div style="margin-left:20px;margin-top:10px">
                  <a-avatar style="width:60px;height:60px" class="avatar" :src="item.user.avatar"/>
                  <p style="color:#808080;width:60px;text-align:center;margin-top:5px">{{ item.user.nickname }}
                  </p>
                </div>
              </a-col>
            </a-row>
          </div>
        </a-card>
      </a-col>
      <a-col :xl="12" :lg="12" :md="24" :sm="24" :xs="24">
        <a-card
          class="conversation"
          :loading="loading"
          style="margin-bottom: 20px;"
          :bordered="false"
          :body-style="{ padding: 0 }">
          <span slot="title" style="color:#696969;font-size:25px;font-weight:bold">会话</span>
          <div slot="extra">
            <a style="font-size:15px">查看会话>></a>
          </div>
          <a-list :dataSource="Conver-data">
            <a-list-item :key="index" v-for="(item,index) in converList">
              <a-list-item-meta style="{ height: '100%' }">
                <div slot="title" style="height:20px;width:400px;margin-left:20px">
                    <a-icon style="font-size:22px;margin-left:10px" slot="avatar" theme="twoTone" two-tone-color="#FFFF90" type="star" />
                    <span slot="title" style="color:#696969;font-size:17px;margin-left:10px"> {{ item.name }}</span>
                </div>
              </a-list-item-meta>
              <div style="text-align:center;width:100px;margin-right:5%;margin-top:10px">
                <span style="color:#696969;font-size:16px;font-weight:bold" >{{ item.date }}</span>
                <p>{{ item.time }}</p>
              </div>
              <a-icon @click="edit(item)" slot="actions" style="font-size:22px;width:60px;margin:0 4%" theme="twoTone" type="eye" />
            </a-list-item>
          </a-list>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import TaskForm from './modules/TaskForm'
const activities = []
const notes = []
const converList = []
// const clients_data = []
for (let i = 1; i < 5; i++) {
  activities.push({
    time: '0' + i + ':00 PM',
    name: '小明' + i + '号',
    site: 'Residence 13' + i
  })
  notes.push({
    category: 'Information',
    time: '0' + i + ':00 PM',
    name: '小明' + i + '号'
  })
  converList.push({
    date: '六月 03',
    time: '0' + (2 * i) + ':00 PM',
    name: '小红' + i + '号'
  })
}

export default {
  name: 'AgendaList',
  components: {
    TaskForm
  },
  data () {
    return {
      activities,
      notes,
      clients_data: [],
      converList
    }
  },
  mounted () {
    this.getClients()
  },
  methods: {
    getClients () {
      this.$http.get('/workplace/activity')
        .then(res => {
          this.clients_data = res.result
        })
  },
    remove (key) {
      const newData = this.data.filter(item => item.key !== key)
      this.data = newData
  },
    edit (record) {
      console.log('record', record)
      this.$dialog(TaskForm,
        // component props
        {
          record,
          on: {
            ok () {
              console.log('ok 回调')
            },
            cancel () {
              console.log('cancel 回调')
            },
            close () {
              console.log('modal close 回调')
            }
          }
        },
    {
          title: '详情',
          width: 700,
          centered: true,
          maskClosable: false
        })
    }
  }
}
</script>
