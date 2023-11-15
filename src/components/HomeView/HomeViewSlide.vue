<template>
  <div class="bg-success">
    <carousel-3d
      ref="carousel"
      @before-slide-change="onSlideChange"
      :autoplayTimeout="3000"
      :perspectiv="35"
      :animationSpeed="250"
      :width="300"
      :height="300"
      controlsVisible
    >
      <slide class="border-0 rounded" v-for="(item, i) in lists" :index="i" :key="i" >
        <div class="card">
          <div class="img-fluid" style="height: 300px;">
            <img calss="card-img-top" src="http://fakeimg.pl/300x300" style="object-fit: cover; width: 100%; height: 100%">
          </div>
          <div class="position-absolute bottom-0 start-0 w-100 badge bg-dark" style="--bs-bg-opacity: 0.4">
            <h5 class="title text-truncate">{{ item.title }}</h5>
          </div>
          <a href="#" class="stretched-link"></a>
        </div>
      </slide>
    </carousel-3d>
  </div>
</template>

<script>
export default {
  data(){
    return{
      lists:[
        {
          title:'1',
        },
        {
          title:'2',
        },
        {
          title:'3',
        },
      ]
    }
  },
  methods:{
    onSlideChange(temp){
      console.log(this.$refs.carousel, 'xxx');
      this.carouselIndex = temp;
    },
    goSlideIndex(index){
      if(index>this.lists.length - 1 || 0>this.lists.length -1){
        return;
      }
      this.$refs.carousel.goFar(index);
    },
  },
}
</script>
