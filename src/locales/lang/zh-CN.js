import antd from 'ant-design-vue/es/locale-provider/zh_CN'
import momentCN from 'moment/locale/zh-cn'

const components = {
  antLocale: antd,
  momentName: 'zh-cn',
  momentLocale: momentCN
}

const locale = {
  'message': '-',
  'menu.home': '主页',
  'menu.dashboard': '仪表盘',
  'menu.dashboard.analysis': '分析页',
  'menu.dashboard.monitor': '监控页',
  'menu.dashboard.workplace': '工作台',
  'menu.dashboard.communication': '会话',
  'Clients': '客户',
  'Calendar': '日程安排',
  'Reports': '报告',
  'Library': '资料库',
  'Administration': '管理'
}

export default {
  ...components,
  ...locale
}
