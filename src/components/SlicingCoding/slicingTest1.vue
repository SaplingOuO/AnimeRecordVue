<script>
export default {
  data() {
    return {
      showSidebar: true,
      menuIcon: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.showSidebar = !this.showSidebar;
      this.menuIcon = !this.menuIcon;
    }
  }
};
</script>

<template>
  <div class="row w-100 m-0">
    <!-- 側邊欄 -->
    <div v-if="showSidebar" class="bg-primary Sidebar">
        <div class="row">
          <!-- 捷徑&標題 -->
          <div class="p-0">
            <button @click="toggleSidebar" type="button" class="btn lineST">
              <i></i>
              <i></i>
              <i></i>
            </button>
          </div>
          <!-- 主要按鈕 -->
          <div class="btn">
            首頁
          </div>
          <div class="btn">
            Shorts
          </div>
          <div class="btn">
            訂閱內容
          </div>
          <div class="btn">
            YouTube Music
          </div>
          <!-- 用戶內容 -->
          <div class="row m-0">
            <hr class="m-0">
            <div class="btn">
              你的內容 >
            </div>
            <div class="btn">
              你的頻道
            </div>
            <div class="btn">
              觀看紀錄
            </div>
            <div class="btn">
              播放清單
            </div>
            <div class="btn">
              你的影片
            </div>
            <div class="btn">
              稍後觀看
            </div>
            <div class="btn">
              喜歡的影片
            </div>
            <div class="btn">
              已下載的內容
            </div>
          </div>
          <!-- 訂閱內容 -->
          <div>
            <div>
              訂閱內容
            </div>
            <div class="btn">
              XXXX
            </div>
          </div>
        </div>
    </div>
    <div class="col p-0">
      <!-- 搜尋欄 -->
      <div class="col bg-info Search d-flex">
            <button @click="toggleSidebar" type="button" class="btn lineST align-items-center">
              <i></i>
              <i></i>
              <i></i>
            </button>
      </div>
      <!-- 主內容 -->
      <div class="col bg-success">
        333
      </div>
    </div>
  </div>
</template>

<style>
.Sidebar {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 240px;
  z-index: 1000;
}
.Search {
  height: 56px;
}
.lineST {
  height: 56px;
}
.lineST i {
  display: block;
  height: 1px;
  width: 20px;
  background: #FFF;
  box-shadow: 0 1px 6px #000;
  margin: 5px;
  opacity: 1;
}
</style>