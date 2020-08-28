<template >
  <div >
    <a-card :bordered="false" :bodyStyle="{ padding: '0 0', height: '100%' }" :style="{ height: '100%', margin: '0 5%' }">
      <div class="account-settings-info-main" :class="{ 'mobile': isMobile }">
        <div class="account-settings-info-left">
          <a-menu
            :mode="isMobile ? 'horizontal' : 'inline'"
            :style="{ border: '0', width: isMobile ? '560px' : 'auto'}"
            :selectedKeys="selectedKeys"
            type="inner"
            @openChange="onOpenChange"
            class="menu-left"
          >
            <a-menu-item-group >
              <a-row slot="title" class="menu-item-group-title"><span>记录</span></a-row>
              <a-menu-item key="/reports/Reports/clientlist1" class="menu-item">
                <router-link :to="{ name: 'ClientList1' }">
                  客户名单
                </router-link>
              </a-menu-item>
              <a-menu-item key="/reports/Reports/clientplans" class="menu-item">
                <router-link :to="{ name: 'ClientPlans'}">
                  客户计划
                </router-link>
              </a-menu-item>
            </a-menu-item-group>
            <a-menu-item-group>
              <a-row slot="title" class="menu-item-group-title"><span>传统的报告</span></a-row>
              <a-menu-item key="/reports/LegacyReports/behaviorlist" class="menu-item">
                <router-link :to="{ name: 'BehaviorList'}">
                  客户行为列表
                </router-link>
              </a-menu-item>
              <a-menu-item key="/reports/LegacyReports/budgetlist" class="menu-item">
                <router-link :to="{ name: 'BudgetList'}">
                  客户预算清单
                </router-link>
              </a-menu-item >
              <a-menu-item key="/reports/LegacyReports/casefile" class="menu-item">
                <router-link :to="{ name: 'CaseFile'}">
                  客户案例文件
                </router-link>
              </a-menu-item >
              <a-menu-item key="/reports/LegacyReports/clientlist" class="menu-item">
                <router-link :to="{ name: 'ClientList2'}">
                  客户列表
                </router-link>
              </a-menu-item >
              <a-menu-item key="/reports/LegacyReports/planlist" class="menu-item">
                <router-link :to="{ name: 'PlanList'}">
                  客户计划列表
                </router-link>
              </a-menu-item >
              <a-menu-item key="/reports/LegacyReports/profile" class="menu-item">
                <router-link :to="{ name: 'Profile'}">
                  客户简况
                </router-link>
              </a-menu-item >
              <a-menu-item key="/reports/LegacyReports/profileextract" class="menu-item">
                <router-link :to="{ name: 'ProfileExtract'}">
                  客户额外简况
                </router-link>
              </a-menu-item >
              <a-menu-item key="/reports/LegacyReports/programachivementlist" class="menu-item">
                <router-link :to="{ name: 'ProgramAchievementList'}">
                  客户项目成绩列表
                </router-link>
              </a-menu-item >
              <a-menu-item key="/reports/LegacyReports/schedulelist" class="menu-item">
                <router-link :to="{ name: 'ScheduleList'}">
                  客户计划列表
                </router-link>
              </a-menu-item >
              <a-menu-item key="/reports/LegacyReports/sessionsummary" class="menu-item">
                <router-link :to="{ name: 'SessionSummary'}">
                  客户会议总结
                </router-link>
              </a-menu-item >
              <a-menu-item key="/reports/LegacyReports/sessiontriallist" class="menu-item">
                <router-link :to="{ name: 'SessionTrialList'}">
                  客户会议记录列表
                </router-link>
              </a-menu-item >
              <a-menu-item key="/reports/LegacyReports/targetlist" class="menu-item">
                <router-link :to="{ name: 'TargetList'}">
                  客户目标列表
                </router-link>
              </a-menu-item >
              <a-menu-item key="/reports/LegacyReports/teachingplanlist" class="menu-item">
                <router-link :to="{ name: 'TeachingPlanList'}">
                  客户教学计划列表
                </router-link>
              </a-menu-item >
              <a-menu-item key="/reports/LegacyReports/trialsextract" class="menu-item">
                <router-link :to="{ name: 'TrialsExtract'}">
                  轨迹提取
                </router-link>
              </a-menu-item >
              <a-menu-item key="/reports/LegacyReports/funderaccountlist" class="menu-item">
                <router-link :to="{ name: 'FunderAccountList'}">
                  资助者账户列表
                </router-link>
              </a-menu-item >
              <a-menu-item key="/reports/LegacyReports/userlist" class="menu-item">
                <router-link :to="{ name: 'UserList'}">
                  用户列表
                </router-link>
              </a-menu-item >
              <a-menu-item key="/reports/LegacyReports/userschedulelist" class="menu-item">
                <router-link :to="{ name: 'UserScheduleList'}">
                  用户计划列表
                </router-link>
              </a-menu-item >
            </a-menu-item-group>
            <a-menu-item-group>
              <a-row slot="title" class="menu-item-group-title"><span>摘要</span></a-row>
              <a-menu-item key="/reports/Extracts/behaviorextract" class="menu-item">
                <router-link :to="{ name: 'BehaviorExtra'}">
                  客户的额外行为
                </router-link>
              </a-menu-item >
              <a-menu-item key="/reports/Extracts/eventextract" class="menu-item">
                <router-link :to="{ name: 'EventExtract'}">
                  客户的额外事件
                </router-link>
              </a-menu-item >
              <a-menu-item key="/reports/Extracts/trialsextract" class="menu-item" style="margin-bottom:5px" >
                <router-link :to="{ name: 'TrialsExtra'}">
                  客户的额外细节
                </router-link>
              </a-menu-item >
            </a-menu-item-group>
          </a-menu>
        </div>
        <a-card class="account-settings-info-right">
          <div class="account-settings-info-title">
            <span>{{ $route.meta.title }}</span>
          </div>
          <a-divider style="margin-bottom:10px;margin-top:15px;height:2px;background-color: #ffda59" />
          <route-view ></route-view>
        </a-card>
      </div>
    </a-card>
  </div>
</template>

<script>
import { RouteView } from '@/layouts'
import { baseMixin } from '@/store/app-mixin'

export default {
  components: {
    RouteView
  },
  mixins: [baseMixin],
  data () {
    return {
      // horizontal  inline
      mode: 'inline',

      openKeys: [],
      selectedKeys: [],

      // cropper
      preview: {},
      option: {
        img: '/avatar2.jpg',
        info: true,
        size: 1,
        outputType: 'jpeg',
        canScale: false,
        autoCrop: true,
        // 只有自动截图开启 宽度高度才生效
        autoCropWidth: 180,
        autoCropHeight: 180,
        fixedBox: true,
        // 开启宽度和高度比例
        fixed: true,
        fixedNumber: [1, 1]
      },

      pageTitle: ''
    }
  },
  mounted () {
    this.updateMenu()
  },
  methods: {
    onOpenChange (openKeys) {
      this.openKeys = openKeys
    },
    updateMenu () {
      const routes = this.$route.matched.concat()
      this.selectedKeys = [ routes.pop().path ]
    }
  },
  watch: {
    '$route' (val) {
      this.updateMenu()
    }
  }
}
</script>

<style lang="less" scoped>
  .account-settings-info-main {
    width: 100%;
    display: flex;
    height: 100%;
    overflow: auto;
    background-color: #eeeeee;

    &.mobile {
      display: block;

      .account-settings-info-left {
        border-right: unset;
        border-bottom: 1px solid #e8e8e8;
        width: 100%;
        height: 50px;
        overflow-x: auto;
        overflow-y: scroll;
      }
      .account-settings-info-right {
        padding: 20px 40px;
      }
    }

    .account-settings-info-left {
      border-right: 1px ;
      width: 260px;

      .menu-left{
              background-color: #eeeeee;
      }

      .menu-item-group-title{
        background-color: #eeeeee;
        color: rgba(0,0,0,.85);
        text-align: center;
        font-size: 16px;
        height: 6px;
        line-height: 9px;
      }
      .menu-item{
        background-color: white;
        width: 95%;
        margin-left: 2.5%;
        margin-bottom:-1px;
        font-size: 14px;
        height: 25px;
        line-height: 25px;
      }
    }

    .account-settings-info-right {
      flex: 1 1;
      padding: 3px 20px;
      margin: 8px 0;

      .account-settings-info-title {
        color: rgba(0,0,0,.85);
        font-size: 23px;
        font-weight: 500;
        line-height: 28px;
        margin-bottom: 12px;
      }
    }
  }

</style>
