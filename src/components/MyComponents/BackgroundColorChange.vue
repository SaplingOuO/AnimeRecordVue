<script>
export default {
    data() {
        return {
            colorCustomArray: [[238, 119, 82],[231, 60, 126],[5, 166, 213],[35, 213, 103]],
            R_rangeValue: 255,
            G_rangeValue: 255,
            B_rangeValue: 255,
            currentIndex: 0,
            customRange: true,
        }
    },
    components: {
    },
    methods:{
        showCustomRange(index){
            this.R_rangeValue = this.colorCustomArray[index][0];
            this.G_rangeValue = this.colorCustomArray[index][1];
            this.B_rangeValue = this.colorCustomArray[index][2];
            this.currentIndex = index;
            this.customRange = !this.customRange;
        },
        activeColor(index){
            return 'rgb('+this.colorCustomArray[index][0]+','+this.colorCustomArray[index][1]+','+this.colorCustomArray[index][2]+')'
        },
        updateColorArray(index){
            this.colorCustomArray[index][0] = this.R_rangeValue;
            this.colorCustomArray[index][1] = this.G_rangeValue;
            this.colorCustomArray[index][2] = this.B_rangeValue;
        },
        backGroundColorChange(){
            return {
                background: 'linear-gradient(-45deg, rgb('+ this.colorCustomArray[3] +'),rgb('+ this.colorCustomArray[2] +'),rgb('+ this.colorCustomArray[1] +'),rgb('+ this.colorCustomArray[0] +'))',
                'background-size' : '400% 400%',
                animation: 'gradient 15s ease infinite',
                height: '100vh',
            };
        },
    }
}
</script>

<template>
    <div class="cube" v-bind:style= "backGroundColorChange()">
        <div class="position-absolute top-50 start-50 translate-middle">
            <div style="width: 200px;">
                <div class="d-flex justify-content-between">
                    <button v-on:click="showCustomRange(0)" class="color_1 btn" style="height: 40px; width: 40px;" v-bind:style="{ 'background-color' : activeColor(0) }"></button>
                    <button v-on:click="showCustomRange(1)" class="color_2 btn" style="height: 40px; width: 40px;" v-bind:style="{ 'background-color' : activeColor(1) }"></button>
                    <button v-on:click="showCustomRange(2)" class="color_3 btn" style="height: 40px; width: 40px;" v-bind:style="{ 'background-color' : activeColor(2) }"></button>
                    <button v-on:click="showCustomRange(3)" class="color_4 btn" style="height: 40px; width: 40px;" v-bind:style="{ 'background-color' : activeColor(3) }"></button>
                </div>
                <div class="colorChange" :class="{ 'd-none' : customRange}">
                    <div class="R_customRange">
                        <label for="R_customRange" class="form-label">Red</label>
                        <div class="btn btn-dark  disabled float-end">{{ R_rangeValue }}</div>
                        <input v-model="R_rangeValue" type="range" class="form-range" min="0" max="255" id="R_customRange" @input="updateColorArray(currentIndex)">
                    </div>
                    <div class="G_customRange">
                        <label for="G_customRange" class="form-label">Green</label>
                        <div class="btn btn-dark  disabled float-end">{{ G_rangeValue }}</div>
                        <input v-model="G_rangeValue" type="range" class="form-range" min="0" max="255" id="G_customRange" @input="updateColorArray(currentIndex)">
                    </div>
                    <div class="B_customRange">
                        <label for="B_customRange" class="form-label">Blue</label>
                        <div class="btn btn-dark  disabled float-end">{{ B_rangeValue }}</div>
                        <input v-model="B_rangeValue" type="range" class="form-range" min="0" max="255" id="B_customRange" @input="updateColorArray(currentIndex)">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>

@keyframes gradient {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}
</style> 