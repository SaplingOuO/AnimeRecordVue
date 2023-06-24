<template>
  <div class="test">
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-1"></div>
      <div class="col-lg-10">
        <div class="d-flex justify-content-around flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom ">

          <h1 class="h2 col-3">AnimeRecord</h1>

          <div class="row btn-toolbar">
            <!-- 關鍵字查詢 -->
            <!-- <input id="searchInput" type="text" class="col-8 col-md-4 light-table-filter rounded-pill" placeholder="請輸入關鍵字" v-model="searchQuery" v-on:input="handleSearchInput"> -->
            
            <!-- 年份下拉選單查詢 -->
            <div id="years" class="col col-md-2 dropdown p-1">
              <!-- <select class="form-select " aria-label="Default select example" v-model="year" v-on:change="handleSearChange">
                <option value="">請選擇年份</option>
                <template v-for="year in years">
                  <vue-year :year="year"></vue-year>
                </template>
              </select> -->
            </div>
          
            <!-- radio關鍵字查詢 -->
            <div id="season" class="col-12 col-md-4 btn-group p-1" role="group" aria-label="Basic radio toggle button group">
              <!-- <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" v-model="selectedSeason" value="" checked> -->
              <label class="btn btn-outline-secondary" for="btnradio1">全</label>
              <!-- <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" v-model="selectedSeason" value="春季"> -->
              <label class="btn btn-outline-secondary" for="btnradio2" title="4~6月">春</label>
              <!-- <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" v-model="selectedSeason" value="夏季"> -->
              <label class="btn btn-outline-secondary" for="btnradio3" title="7~9月">夏</label>
              <!-- <input type="radio" class="btn-check" name="btnradio" id="btnradio4" autocomplete="off" v-model="selectedSeason" value="秋季"> -->
              <label class="btn btn-outline-secondary" for="btnradio4" title="10~12月">秋</label>
              <!-- <input type="radio" class="btn-check" name="btnradio" id="btnradio5" autocomplete="off" v-model="selectedSeason" value="冬季"> -->
              <label class="btn btn-outline-secondary" for="btnradio5" title="1~3月">冬</label>
            <!-- 我的最愛查詢 -->
              <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off">
              <label class="btn btn-outline-secondary" for="btncheck1">♥</label>
            </div>
          </div>

          <div class="">
            <button class="btn p-0 rounded-circle" type="button">
              <figure class="m-0 rounded-circle">
                <img class="img-fluid rounded-circle" src="https://fakeimg.pl/50x50/">
              </figure>
            </button>
          </div>

        </div>

        <!-- 卡片部分已完成2023/3/30 -->
        <!-- 我的最愛圖示未做完 -->
        <div id="cards" class="container">
          <div class="row row-cols-2 row-cols-md-3 row-cols-xl-4 g-0" ref="cardList">
            <!-- 卡片 -->
            <!-- <template v-for="card in cards" >
              <div class="column"> -->
              <!-- 
                [:src, :title, :tag] 
                給Vue.component()使用的組件

                [card.imageSrc, card.title, card.tag]
                匯入資料的變數名稱
              -->
                <!-- <vue-card :src="card.imageSrc" :title="card.title" :tag="card.tag"></vue-card>
              </div>
            </template> -->

            <!-- 卡片範例 -->
            <!-- <div class="col position-relative card">
            <img class="img-fluid card-img-top " src="https://fakeimg.pl/500x500/">
          <div class="position-absolute bottom-0 start-0 badge w-100">
            <h5 class="text-truncate">Title</h5>
          </div>
            <a href="#" class="stretched-link"></a>
            </div>-->
            <!-- 卡片範例end  以下重複範例 -->

          </div>
        </div>

      </div>
      <div class="col-lg-1"></div>
    </div>
  </div>


  <footer>
  </footer>
</div>
</template>

<script>
</script>