<script>
export default {
    data() {
        return {
            displayNone: 0,
            cards: [],
            loadData: [
                {
                    title: 'animatedText',
                    description: '讓文字像輸入的方式顯示出來',
                    // imageSRC: 'ABC',
                },
                {
                    title: 'ABC',
                    description: 'ABC',
                    // imageSRC: 'ABC',
                },
                {
                    title: 'ABC',
                    description: 'ABC',
                    // imageSRC: 'ABC',
                },
                {
                    title: 'ABC',
                    description: 'ABC',
                    // imageSRC: 'ABC',
                },
                {
                    title: 'ABC',
                    description: 'ABC',
                    // imageSRC: 'ABC',
                },
                {
                    title: 'ABC',
                    description: 'ABC',
                    // imageSRC: 'ABC',
                },
            ],
            showView:1,
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
                    title: 'Card title' + i + ':' + (this.loadData[i].title),
                    description: 'Description' + i + ':' + (this.loadData[i].description),
                    // imageSRC:'Image'+i+':'+(this.loadData[i].imageSRC),
                    routerLink: '/MyComponents/' + this.loadData[i].title,
                };
                this.cards.push(card);
            }
        },
        toggleShowView(){
            this.showView = !this.showView;
        },
    }
};
</script>

<template>
    
    <div class="row m-0" v-if="showView">
        <div class="col-lg-1"></div>
        <div class="col-lg-10" :class="{ 'd-none': displayNone }">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 g-0 justify-content-around">
                <div v-for="card in cards" :key="card">
                    <div class="col p-0 card m-3" style="width: 18rem">
                        <img src="https://fakeimg.pl/300/" class="card-img-top" />
                        <div class="card-body">
                            <h5 class="card-title">{{ card.title }}</h5>
                            <p class="card-text">{{ card.description }}</p>
                            <router-link class="btn btn-primary" :to="card.routerLink" @click="toggleShowView">點擊查看</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-1"></div>
    </div>
    <router-view v-else></router-view>
</template>

<style></style>