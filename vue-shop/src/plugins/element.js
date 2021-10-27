import Vue from 'vue'
import {
  Button, Input, Form, FormItem, Message, Container, Main, Header,
  Aside,
  Menu,
  Submenu,
  MenuItem,
  Breadcrumb,
  BreadcrumbItem,
  Card,
  Row,
  Col,
  Table,
  TableColumn,
  Switch,
  Tooltip,
  Pagination,
  Dialog,
  MessageBox,
  Tag,
  Tree,
  Select,
  Option,
  Cascader,
  Alert,
  Tabs,
  TabPane,
  Step, Steps, CheckboxGroup, Checkbox,
  Upload
} from 'element-ui'
Vue.use(Upload)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Cascader)
Vue.use(Alert)
Vue.use(Select)
Vue.use(Option)
Vue.use(Switch)
Vue.use(Tree)
Vue.use(Tag)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Button)
Vue.use(Form)
Vue.use(Input)
Vue.use(FormItem)
Vue.use(Container)
Vue.use(Main)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.use(Tooltip)
Vue.use(Dialog)
Vue.use(Pagination)
Vue.use(Steps)
Vue.use(Step)
Vue.use(CheckboxGroup)
Vue.use(Checkbox)
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
