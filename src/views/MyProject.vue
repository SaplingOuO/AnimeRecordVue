<script>
export default {
    data() {
        return {
            displayNone: 0,
            cards: [],
            loadData: [
                {
                    title: 'AnimeList',
                    description: '第一個從0開始學習做出來的專案，從中學習到vue、bootstrap、python如何使用',
                    // imageSRC: '',
                },
                {
                    title: 'PokemonTypeFighting',
                    description: '寶可夢屬性對抗',
                    // imageSRC: 'ABC',
                },
                {
                    title: 'ShopDemo',
                    description: '購物車、後台、會員練習',
                    // imageSRC: 'ABC',
                },
            ],
            showView: 1,
        };
    },
    beforeRouteUpdate(to, from, next) {
        if (to.matched.length > 1) {
            this.displayNone = true;
        } else {
            this.displayNone = false;
        }
        next();
    },
    mounted() {
        if (!this.displayNone) {
            this.cardData();
        }
    },
    methods: {
        //載入資料
        cardData() {
            for (let i = 0; i < this.loadData.length; i++) {
                const card = {
                    title: (this.loadData[i].title),
                    description: (this.loadData[i].description),
                    // imageSRC:'Image'+i+':'+(this.loadData[i].imageSRC),
                    routerLink: '/MyProject/' + this.loadData[i].title,
                };
                this.cards.push(card);
            }
        },
        toggleShowView(index) {
            if(this.loadData[index].title.length > 0){
                this.showView = !this.showView;
            }
        },
    }
};
</script>

<template>
    <div class="row m-0" v-if="showView">
        <div class="col-lg-1"></div>
        <div class="col-lg-10">
        <div class="display-1 text-center fw-bold">專案練習</div>
            <div class="card" :class="{ 'd-none': displayNone }" v-for="(card, index) in cards" :key="card">
                <router-link class="row g-0 text-decoration-none text-muted" :to="card.routerLink" @click="toggleShowView(index)">
                    <div class="col-4 m-1" style="">
                        <img src="https://fakeimg.pl/300x150/" class="img-fluid rounded-start" />
                    </div>
                    <div class="col p-0 ">
                        <div class="card-body align-middle">
                            <h5 class="card-title">{{ card.title }}</h5>
                            <p class="card-text overflow-auto">{{ card.description }}</p>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
        <div class="col-lg-1"></div>
    </div>
    <router-view v-else></router-view>
</template>

<style></style>