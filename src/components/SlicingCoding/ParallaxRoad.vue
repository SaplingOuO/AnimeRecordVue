<!-- 參考網站 https://blog.build-school.com/2022/05/06/%E6%BB%BE%E5%8B%95%E8%A6%96%E5%B7%AEparallax%E7%B0%A1%E5%96%AE%E6%95%99%E5%AD%B8%E8%88%87lab/ -->
<script>
export default {
    methods:{
        
    }
}
</script>

<template>
    <div class="keyart-container">
        <div class="keyart-layer" id="parallax-0" speed="2"></div>
        <div class="keyart-layer" id="parallax-1" speed="11"></div>
        <div class="keyart-layer" id="parallax-2" speed="16"></div>
        <div class="keyart-layer" id="parallax-3" speed="36"></div>
        <div class="keyart-layer" id="parallax-4" speed="49"></div>
        <div class="keyart-layer" id="parallax-5" speed="69"></div>
        <div class="keyart-layer" id="parallax-6" speed="100"></div>
    </div>
</template>

<style lang="scss" scope>
$keyart-weight:600px;
$keyart-height:300px;
.keyart-container{
   width: $keyart-weight;
   height: $keyart-height;
   .keyart-layer{
    width: $keyart-weight;
    height: $keyart-height;
    background-size: auto $keyart-height;
    background-position: bottom center;
    position: fixed;
   }
   #parallax-0{background-image: url(../../../public/ParallaxRoad/moto2.png);}
   #parallax-1{background-image: url(../../../public/ParallaxRoad/house1.png);}
   #parallax-2{background-image: url(../../../public/ParallaxRoad/house2.png);}
   #parallax-3{background-image: url(../../../public/ParallaxRoad/house3.png);}
   #parallax-4{background-image: url(../../../public/ParallaxRoad/house4.png);}
   #parallax-5{background-image: url(../../../public/ParallaxRoad/house5.png);}
   #parallax-6{background-image: url(../../../public/ParallaxRoad/house6.png);}
}

.after{
    background-color: azure;
    height: 3333xp;
}
</style>