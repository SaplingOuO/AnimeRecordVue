<template>
  <div class="animeCard">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-1"></div>
        <div class="col-lg-10">
          <div
            class="d-flex justify-content-around flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <img class="h2 col-3" src="../../../public/MyProject/logo.png" />
            <div class="row col-9">
              <!-- 關鍵字查詢 -->
              <input type="text" class="col-8 col-xl-4 rounded-pill" placeholder="請輸入關鍵字" @input="handleSearchInput">
              <!-- 年份下拉選單查詢 -->
              <div id="years" class="col col-xl-2 dropdown p-1">
                <select class="form-select " v-model="searchYear" @change="selectedYear">
                  <option value="" selected>所有年份</option>
                  <option v-for="yearOption in yearOptions" :key="yearOption" :value="yearOption" v-text="yearOption"
                    @change="selectedYear"></option>
                </select>
              </div>

              <!-- radio關鍵字查詢 -->
              <div id="season" class="col col-xl btn-group p-1">
                <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off"
                  v-model="searchSeason" value="" checked @change="selectedSeason">
                <label class="btn btn-outline-secondary" for="btnradio1">全</label>
                <input type="radio" class="btn-check" name="btnradio" id="btnradio5" autocomplete="off"
                  v-model="searchSeason" value="冬季" @change="selectedSeason">
                <label class="btn btn-outline-secondary" for="btnradio5" title="1~3月">1~3月</label>
                <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off"
                  v-model="searchSeason" value="春季" @change="selectedSeason">
                <label class="btn btn-outline-secondary" for="btnradio2" title="4~6月">4~6月</label>
                <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off"
                  v-model="searchSeason" value="夏季" @change="selectedSeason">
                <label class="btn btn-outline-secondary" for="btnradio3" title="7~9月">7~9月</label>
                <input type="radio" class="btn-check" name="btnradio" id="btnradio4" autocomplete="off"
                  v-model="searchSeason" value="秋季" @change="selectedSeason">
                <label class="btn btn-outline-secondary" for="btnradio4" title="10~12月">10~12月</label>
                <!-- 我的最愛查詢 -->
                <!-- <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off" />
                <label class="btn btn-outline-secondary" for="btncheck1">♥</label> -->
              </div>
            </div>
            <!-- 使用者頭像 -->
            <!-- <div class="">
              <button class="btn p-0 rounded-circle" type="button">
                <figure class="m-0 rounded-circle">
                  <img class="img-fluid rounded-circle" src="https://fakeimg.pl/50x50/" />
                </figure>
              </button>
            </div> -->
          </div>

          <!-- 卡片部分已完成2023/3/30 -->
          <!-- 我的最愛圖示未做完 -->
          <div id="cards" class="container">
            <div class="row row-cols-2 row-cols-md-3 row-cols-xl-4 g-0 " ref="cardList">
              <!-- 卡片 -->
              <!-- <img :src="require(`@/assets/animeImages/0000114480.JPG`)"> -->
              <div v-for="card in cards" :key="card">
                <div class="column">
                  <!-- 
                  [:src, :title, :tag] 
                  給Vue.component()使用的組件

                  [card.imageSrc, card.title, card.tag]
                  匯入資料的變數名稱
                  -->
                  <!-- <vueCard :src="card.imageSrc" :title="card.title" :tag="card.tag"></vueCard> -->
                  <div class="col position-relative card" :tag="card.tag">
                    <div class="img-fluid" style="height: 300px">
                      <img class="card-img-top mx-auto d-block" :src="card.imageSrc"
                        style="object-fit: cover; width: 100%; height: 100%" />
                    </div>
                    <div class="position-absolute bottom-0 start-0 w-100 badge bg-dark" style="--bs-bg-opacity: 0.4">
                      <h5 class="title text-truncate">{{ card.title }}</h5>
                    </div>
                    <button class="stretched-link" @click="showModal(card.title)" data-bs-toggle="modal" data-bs-target="#recordField"></button>
                  </div>
                </div>
              </div>

              <!-- 卡片範例 -->
              <!-- <div class="col position-relative card">
                <img class="img-fluid card-img-top " src="https://fakeimg.pl/500x500/">
                <div class="position-absolute bottom-0 start-0 badge w-100">
                  <h5 class="text-truncate">Title</h5>
                </div>
                <a href="#" class="stretched-link"></a>
              </div> -->
              <!-- 卡片範例end  以下重複範例 -->
            </div>
          </div>
        </div>
        <div class="col-lg-1">
        </div>
      </div>
    </div>
    <!-- 彈出視窗 -->
    <div class="modal fade" id="recordField" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <!-- 標題 -->
            <h5 class="modal-title" id="exampleModalLabel">{{ selectedCardTitle }}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <!-- 集數 -->
            <input v-model="episodeNumber" type="number" min="1" class="form-control text-center" placeholder="集數">
            <!-- 輸入筆記 -->
            <div class="row g-0">
              <input v-model="noteContent" class="col form-control" type="text" placeholder="筆記">
              <button class="col-2 btn btn-primary" @click="saveNote">送出</button>
            </div>
            <!-- 筆記 -->
            <div class="m-2">
              <li v-for="(note, index) in showModalData.filter(n => n.selectedCardTitle === selectedCardTitle)" :key="index" class="border-top border-bottom">
                第{{  note.episodeNumber  }}集 {{  note.noteContent  }}
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>

    <footer></footer>
  </div>
</template>

<script>
import ACGList from "../../assets/MyProject/gamerAcg-List.json";

export default {
  data() {
    return {
      cards: [], //卡片本體
      loadedCount: 24, //一次所顯示的個數
      searchInput: '', 
      searchData: [], 
      searchSeason: '',
      seasonOptions: [
        { label: '全', value: '' },
        { label: '春', value: '春季' },
        { label: '夏', value: '夏季' },
        { label: '秋', value: '秋季' },
        { label: '冬', value: '冬季' },
      ],
      searchYear: '',
      yearOptions: [],

      showModalData: [], //彈出視窗的資料
      selectedCardTitle: '',
      episodeNumber: '',
      noteContent: '',
    };
  },
  mounted() {
    this.cardData();
    this.loadCards();
    this.localStorageData();
    this.isSearch = false;
    // this.handleScroll();
    window.addEventListener('scroll', this.handleScroll);
    this.gatAllYears();
  },
  setup() {

  },
  methods: {
    //載入卡片資料
    cardData() {
      for (let i = 0; i < ACGList.length; i++) {
        const card = {
          imageSrc: "../animeImages/" + ACGList[i].image,
          title: ACGList[i].cn,
          tag:
            ACGList[i].cn +
            "," +
            ACGList[i].en +
            "," +
            ACGList[i].jp +
            "," +
            ACGList[i].releaseDate +
            "," +
            ACGList[i].season,
        };
        // 將所有資料傳入searchData
        this.searchData.push(card);
        // return card;
      }
    },
    //將資料放進卡片
    loadCards() {
      // console.log(this.loadedCount);
      for (let i = 0; i < this.loadedCount; i++) {
        const card = {
          imageSrc: "../animeImages/" + ACGList[i].image,
          title: ACGList[i].cn,
          tag:
            ACGList[i].cn +
            "," +
            ACGList[i].en +
            "," +
            ACGList[i].jp +
            "," +
            ACGList[i].releaseDate +
            "," +
            ACGList[i].season,
        };
        this.cards.push(card);
        // window.globalCards.push(card); // 將卡片加入全域變數
      }
    },
    //偵測滾輪是否到最底下
    handleScroll() {
      const cardList = this.$refs.cardList;
      if(cardList){
        const rect = cardList.getBoundingClientRect();
        // console.log(rect.bottom);
        // console.log(window.innerHeight);
        if (rect.bottom-1 <= window.innerHeight) {
          if (!this.isSearch) {
            this.loadMore();
          }
        }
      }
    },
    //增加下一輪卡片
    loadMore() {
      if (!this.loading) {
        this.loading = true;
        for (let i = this.loadedCount; i < this.loadedCount + 24; i++) {
          if (i >= ACGList.length) {
            break;
          }
          const card = {
            imageSrc: "../animeImages/" + ACGList[i].image,
            title: ACGList[i].cn,
          };
          this.cards.push(card);
          //   window.globalCards.push(card); // 將卡片加入全域變數
        }
        this.loadedCount += 24;
        this.loading = false;
        // console.log("新增24張卡片加載成功");
        // console.log(this.cards);
      }
    },
    //搜尋輸入框(搜尋1)
    handleSearchInput: function (event) {
      this.searchInput = event.target.value;
      this.cards = this.searchFunction();
    },
    //季節選擇(搜尋2)
    selectedSeason: function () {
      this.cards = this.searchFunction();
    },
    //年份選擇(搜尋3)
    selectedYear: function () {
      this.cards = this.searchFunction();
    },
    gatAllYears() {
      for (let i = 0; i < ACGList.length; i++) {
        const yearstr = ACGList[i].releaseDate.slice(0, 4);
        if (this.yearOptions.indexOf(yearstr) == -1) {
          if(yearstr>1900){
            this.yearOptions.push(yearstr);
          }else{
            this.yearOptions.push('未上映');
          }
        }
      }
    },
    //選擇搜尋方法
    searchFunction() {
      if (!this.searchInput && !this.searchSeason && !this.searchYear) {
        this.cards = [];
        this.loadCards();
        this.isSearch = false;
        return this.cards;
      } else {
        this.isSearch = true;
        return this.searchData.filter((card) => {
          if (String(card.tag).toLowerCase().indexOf(this.searchInput.trim().toLowerCase()) === -1) {
            return false;
          }
          if (this.selectedSeason && String(card.tag).toLowerCase().indexOf(this.searchSeason.trim().toLowerCase()) === -1) {
            return false;
          }
          if (this.selectedYear && String(card.tag).toLowerCase().indexOf(this.searchYear.trim().toLowerCase()) === -1) {
            return false;
          }
          return true;
        })
      }
    },
    //讀取localStorage資料
    localStorageData(){
      let animeNotes = JSON.parse(localStorage.getItem('animeNotes')) || [];
      if(animeNotes){
        for(let i=0; i < animeNotes.length; i++){
          const note = {
            selectedCardTitle: animeNotes[i].title, // 選中的卡片標題
            episodeNumber: animeNotes[i].episode,  // 儲存集數
            noteContent: animeNotes[i].note,  // 儲存筆記內容
          }
          this.showModalData.push(note);
        }
      }
    },
    //彈出視窗
    showModal(title) {
      this.selectedCardTitle = title;
    },
    //儲存筆記
    saveNote() {
      if (this.episodeNumber && this.noteContent) {
        
        // 讀取現有筆記
        let animeNotes = JSON.parse(localStorage.getItem('animeNotes')) || [];

        const noteData = {
          selectedCardTitle: this.selectedCardTitle,
          episodeNumber: this.episodeNumber,
          noteContent: this.noteContent,
        };

        const existingNoteIndex = animeNotes.findIndex(note => 
          note.title === this.selectedCardTitle && note.episode === this.episodeNumber
        );

        if (existingNoteIndex >= 0) {
          // 更新已存在的筆記
          animeNotes[existingNoteIndex] = noteData;
          this.showModalData[existingNoteIndex].noteContent = this.noteContent;
          // console.log('上 showModalData'+this.showModalData);
          // console.log('上 animeNotes'+animeNotes);
          console.log('----------------------------');
        } else {
          // 添加新筆記
          animeNotes.push(noteData);
          this.showModalData.push(noteData);
          // console.log('下 showModalData'+this.showModalData);
          // console.log('下 animeNotes'+animeNotes);
        }

        // 儲存回 localStorage
        localStorage.setItem('animeNotes', JSON.stringify(animeNotes));

        // 清空輸入框
        this.$nextTick(() => {
          this.episodeNumber = '';
          this.noteContent = '';
        });
        // 提示成功訊息
        alert('筆記已儲存！');

        this.$forceUpdate();
      } else {
        alert('請輸入集數和筆記內容。');
      }
    }
  },
};
</script>