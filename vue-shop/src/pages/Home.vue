<template>
  <el-container class="home-container" style="background-color: rgba(223, 223, 223, 0.315)
  ;">
    <!-- 头部 -->
    <el-header>
      <div>
        <img src="../assets/docker.png" alt="">
        <span>docker后台管理系统</span>
      </div>
      <el-button type="primary" size="mini" @click="logout">退出</el-button>
    </el-header>
    <!-- 主体 -->
    <el-container>
      <!-- 侧边栏 -->
      <el-aside :width="isCollapse? '64px':'200px'" class="">
        <!-- 侧边栏头部折叠button -->
        <div class="toggle-button" @click="toggleCollapse">|||</div>
        <!-- 侧边栏菜单     unique-opened默认false为只折叠一个子菜单 -->
        <el-menu background-color="#0584c7" text-color="#fff" active-text-color="#004080" unique-opened
          :collapse="isCollapse" :collapse-transition="false" class="el-menu-vertical-demo" router
          :default-active="activePath">
          <!-- 一级菜单 -->
          <el-submenu :index="item.id+''" v-for="item in menulist" :key="item.id">
            <!-- 一级菜单模板 -->
            <template slot="title">
              <!-- 图标 -->
              <i :class="iconsObj[item.id]"></i>
              <!-- 文本 -->
              <span>{{item.authName}}</span>
            </template>

            <!-- 二级菜单 -->
            <el-menu-item :index="'/'+subItem.path" v-for="subItem in item.children" :key="subItem.id"
              @click="saveNavState('/' + subItem.path)">
              <!-- 二级菜单模板 -->
              <template slot="title">
                <!-- 图标 -->
                <i class="el-icon-menu"></i>
                <!-- 文本 -->
                <span>{{subItem.authName}}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 右侧主体 -->
      <router-view></router-view>
    </el-container>
  </el-container>
</template>
<script>
  export default {
    name: 'home',
    // 左侧菜单数据获取存放
    data() {
      return {
        menulist: [],
        iconsObj: {
          125: 'iconfont icon-user',
          103: 'iconfont icon-tijikongjian',
          101: 'iconfont icon-shangpin',
          102: 'iconfont icon-danju',
          145: 'iconfont icon-baobiao'
        },
        isCollapse: false,
        activePath: ''
      }
    },

    // 等数据代理 数据监控完成后获取菜单数据
    created() {
      this.getMenuList()
      this.activePath = window.sessionStorage.getItem('activePath')
    },
    methods: {
      logout() {
        window.sessionStorage.clear('token')
        this.$router.push('/login')
      },
      // 创建getMenuList函数获取菜单数据
      async getMenuList() { // await 和async 表示翻译返回的promise数据
        const { data: res } = await this.$http.get('menus') // 没有请求参数  地址为服务器的menus路径
        if (res.meta.status !== 200) return this.$message.error(res.meta.msg)
        this.menulist = res.data
        console.log(res)
      },
      toggleCollapse() {
        this.isCollapse = !this.isCollapse
      },
      saveNavState(activePath) {
        window.sessionStorage.setItem('activePath', activePath)
        this.activePath = activePath
      }
    }
  }
</script>
<style lang="less" scoped>
  .el-header {
    background-color: #078dd6;
    display: flex;
    justify-content: space-between;
    padding-left: 0;
    align-items: center;
    color: #004080;
    font-size: 24px;

    div {
      display: flex;
      align-items: center;
      overflow: hidden;

      img {
        padding-right: 20px;
        height: 100%;
        width: 200px;
      }

      span {
        margin-left: 15px;
      }
    }
  }

  .el-aside {
    background-color: #078dd6;

    .el-menu {
      border-right: none;
    }
  }

  .el-main {
    background-color: #5d8fd1;
  }

  .home-container {
    height: 100%;
  }

  .el-button:hover {
    background-color: #078ff9;
  }

  .toggle-button {
    background-color: #078dd6;
    font-size: 10px;
    line-height: 24px;
    color: #fff;
    text-align: center;
    letter-spacing: 0.2em;
    cursor: pointer;
  }

  .iconfont {
    margin-right: 10px;
  }
</style>