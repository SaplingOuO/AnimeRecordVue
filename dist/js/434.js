"use strict";(self["webpackChunkanimerecordvue"]=self["webpackChunkanimerecordvue"]||[]).push([[434],{7434:function(t,e,n){n.r(e),n.d(e,{default:function(){return o}});var i=n(6252);const r=["innerHTML"],s={row:"12",cols:"50",ref:"myInput"},a=(0,i._)("br",null,null,-1);function h(t,e,n,h,x,u){return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("h1",{class:"mb-0",ref:"newlineControl",innerHTML:`${x.animatedText}<span id='spanCaret'> </span>`},null,8,r),(0,i._)("textarea",s,null,512),a,(0,i._)("button",{onClick:e[0]||(e[0]=(...t)=>u.changeText&&u.changeText(...t))},"Change Text")])}var x={data(){return{sloganTextArray:["這是測試文字","這是第二行"],animatedText:"",textIndex:0,textLength:0}},mounted(){setTimeout((()=>this.typeWriter()),1e3)},methods:{typeWriter(){const t=100,e=this.sloganTextArray[this.textIndex];this.textLength<e.length?(this.animatedText+=e.charAt(this.textLength),this.textLength++,setTimeout(this.typeWriter,t)):(this.textIndex++,this.textLength=0,this.textIndex<this.sloganTextArray.length&&(this.animatedText+="<br>",setTimeout(this.typeWriter,1e3)))},changeText(){this.sloganTextArray=this.$refs.myInput.value.split("\n"),this.animatedText="",this.textIndex=0,this.textLength=0,setTimeout((()=>this.typeWriter()),1e3)}}},u=n(3744);const l=(0,u.Z)(x,[["render",h]]);var o=l}}]);
//# sourceMappingURL=434.js.map