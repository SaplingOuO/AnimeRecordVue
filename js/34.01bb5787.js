"use strict";(self["webpackChunkanimerecordvue"]=self["webpackChunkanimerecordvue"]||[]).push([[34],{7034:function(t,e,i){i.r(e),i.d(e,{default:function(){return y}});var s=i(6252),o=i(3577);const a={key:0,class:"row m-0"},l=(0,s._)("div",{class:"col-lg-1"},null,-1),d={class:"col-lg-10"},n=(0,s._)("div",{class:"display-1 text-center fw-bold"},"專案練習",-1),c=(0,s._)("div",{class:"col-4 m-1",style:{}},[(0,s._)("img",{src:"https://fakeimg.pl/300x150/",class:"img-fluid rounded-start"})],-1),r={class:"col p-0"},h={class:"card-body align-middle"},u={class:"card-title"},p={class:"card-text overflow-auto"},w=(0,s._)("div",{class:"col-lg-1"},null,-1);function g(t,e,i,g,v,m){const k=(0,s.up)("router-link"),y=(0,s.up)("router-view");return v.showView?((0,s.wg)(),(0,s.iD)("div",a,[l,(0,s._)("div",d,[n,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(v.cards,((t,e)=>((0,s.wg)(),(0,s.iD)("div",{class:(0,o.C_)(["card",{"d-none":v.displayNone}]),key:t},[(0,s.Wm)(k,{class:"row g-0 text-decoration-none text-muted",to:t.routerLink,onClick:t=>m.toggleShowView(e)},{default:(0,s.w5)((()=>[c,(0,s._)("div",r,[(0,s._)("div",h,[(0,s._)("h5",u,(0,o.zw)(t.title),1),(0,s._)("p",p,(0,o.zw)(t.description),1)])])])),_:2},1032,["to","onClick"])],2)))),128))]),w])):((0,s.wg)(),(0,s.j4)(y,{key:1}))}i(7658);var v={data(){return{displayNone:0,cards:[],loadData:[{title:"AnimeList",description:"第一個從0開始學習做出來的專案，從中學習到vue、bootstrap、python如何使用"},{title:"PokemonTypeFighting",description:"寶可夢屬性對抗"},{title:"ShopDemo",description:"購物車、後台、會員練習"}],showView:1}},beforeRouteUpdate(t,e,i){t.matched.length>1?this.displayNone=!0:this.displayNone=!1,i()},mounted(){this.displayNone||this.cardData()},methods:{cardData(){for(let t=0;t<this.loadData.length;t++){const e={title:this.loadData[t].title,description:this.loadData[t].description,routerLink:"/MyProject/"+this.loadData[t].title};this.cards.push(e)}},toggleShowView(t){this.loadData[t].title.length>0&&(this.showView=!this.showView)}}},m=i(3744);const k=(0,m.Z)(v,[["render",g]]);var y=k}}]);
//# sourceMappingURL=34.01bb5787.js.map