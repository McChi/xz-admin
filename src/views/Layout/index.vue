<template>
  <div class="home" ref="home" id="home">
    <div class="background" ref="background">
      <div class="mask" ref="mask"></div>
    </div>
    <el-container>
      <el-aside width="auto">
        <el-scrollbar
          style="height:100%"
          class="menu-scrollbar"
          v-show="!isSmall && isVerticleMenu"
        >
          <el-menu
            :default-active="$route.path"
            :collapse="isCollapse"
            class="el-menu-vertical-demo collapse-menu"
            :background-color="menuBackgroundColor"
            :text-color="menuTextColor"
						:active-text-color="activeTextColor"
            :unique-opened="true"
          >
            <el-image
              :src="logoUrl"
              fit="cover"
              class="logo-verticle"
              v-show="showLogo"
              v-if="!isCollapse"
              @click.native="$router.push({ path: '/home/welcome' })"
            >
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
            <el-divider
              v-if="menuStyle !== 'dark' && isCollapse === false && showLogo"
            ></el-divider>
            <NavMenu :navMenus="menuList"></NavMenu>
          </el-menu>
        </el-scrollbar>
      </el-aside>
      <Drawer
        class="drawer-menu"
        v-show="isSmall"
        v-model="isMenuCollapse"
        width="205"
        placement="left"
        :closable="false"
      >
        <el-scrollbar style="height:100%">
          <el-menu
            :default-active="$route.path"
            class="el-menu-vertical-demo menu-list"
            :active-text-color="activeTextColor"
            :text-color="menuTextColor"
            width="200px"
            :unique-opened="true"
            @select="isMenuCollapse = false"
          >
            <el-image
              :src="logoUrl"
              fit="cover"
              class="logo-verticle"
              v-show="showLogo"
              @click.native="$router.push({ path: '/home/welcome' })"
            >
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
            <el-divider v-if="menuStyle !== 'dark' && showLogo"></el-divider>
            <NavMenu :navMenus="menuList"></NavMenu>
          </el-menu>
        </el-scrollbar>
      </Drawer>
      <el-container class="container-background">
        <div class="menu" v-show="!isVerticleMenu">
          <el-scrollbar class="menu-horizontal-scrollbar" style="outline: none;">
            <el-menu
              :default-active="$route.path"
              class="el-menu-demo menu-horizontal"
              :background-color="menuBackgroundColor"
              :active-text-color="activeTextColor || themeColor"
              :text-color="menuTextColor"
              mode="horizontal"
              style="width: 100%"
            >
              <el-image
                :src="logoUrl"
                fit="contain"
                class="logo-horizontal"
                v-show="showLogo"
                @click.native="$router.push({ path: '/home/welcome' })"
              >
                <div slot="error" class="image-slot">
                  <i class="el-icon-picture-outline"></i>
                </div>
              </el-image>
              <NavMenu class="menu-horizontal-item" :navMenus="menuList"></NavMenu>
            </el-menu>
          </el-scrollbar>
        </div>
        <el-header class="navbar-box" style="height: 50px;">
          <div class="navbar">
            <DropDown ref="dropDown" @showSetting="$refs.setting.isSetting = true" />
            <IconBox ref="iconBox" @showErrorLogBox="$refs.errorLogBox.dialogVisible = true" />
            <MenuButton ref="menuButton" @showMenu="showMenu" />
            <Breadcrumb
              class="breadcrumb"
              v-show="showBreadcrumb && !isMini"
            ></Breadcrumb>
          </div>
          <div class="border" style="border-color: #f0f0f0"></div>
        </el-header>
        <div class="tabs" v-show="showTags">
          <Tag :tagsList="tagsList" class="tag-list" />
        </div>
        <el-main class="top" id="top">
					<transition name="xz-animation" mode="out-in">
						<keep-alive :include="cacheViews">
							<router-view @updateUserInfo="getUserInfo" class="router" />
						</keep-alive>
					</transition>
					<!-- 返回到底部 -->
         <back-top
            :options="{
              target: '#top',
              isMove: true
            }"
          />
        </el-main>
        <el-footer class="footer" height="30px" v-show="showFooter">
          <div class="coppy-right">
            <span>© 2020 xuanzai Whale cloud network.All rights reserved - 粤ICP备19008964号-2</span>
          </div>
        </el-footer>
      </el-container>
    </el-container>
    <settingDrawer ref="setting" />
    <error-log ref="errorLogBox" />
  </div>
</template>
<script>
import Initial from "./js/initial";
import Operation from "./js/operation";
import Property from "./js/property";
import settingDrawer from "./components/drawer";
import IconBox from "./components/icon_box";
import DropDown from "./components/drop_down";
import MenuButton from "./components/menu_button";
export default {
  mixins: [Initial, Operation, Property],
  components: { settingDrawer, IconBox, DropDown, MenuButton }
};
</script>
<style lang="scss" scoped src="./scss/index.scss"></style>