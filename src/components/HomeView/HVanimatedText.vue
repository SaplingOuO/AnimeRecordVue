<!-- 參考網站 https://hamsterism.com/articles/wrapable-typing-animation/ -->
<script>
export default {
    data() {
        return {
            sloganTextArray: [
                "此網站於2023年建立",
                "已成立"+`${this.getAge()}`+"年",
                "作品集請點右下Menu",
            ],
            animatedText: "",
            textIndex: 0,
            textLength: 0,
        };
    },
    mounted() {
        setTimeout(() => this.typeWriter(), 1000);
    },
    methods: {
        getAge(){
            let Y = new Date().getFullYear();
            return Y-2023;
        },
        typeWriter() {
            const speed = 100;
            const currentText = this.sloganTextArray[this.textIndex];
            if (this.textLength < currentText.length) {
                this.animatedText += currentText.charAt(this.textLength);
                this.textLength++;
                setTimeout(this.typeWriter, speed);
                
            }else{
                //換行
                this.textIndex++;
                this.textLength = 0;
                if (this.textIndex < this.sloganTextArray.length) {
                    this.animatedText += "<br>";
                    setTimeout(this.typeWriter, 1000);
                }
            }
        },
        changeText(){
            this.sloganTextArray = this.$refs.myInput.value.split('\n');
            // this.sloganText = this.$refs.myInput.value;
            this.animatedText = "";
            this.textIndex = 0;
            this.textLength = 0;
            setTimeout(() => this.typeWriter(), 1000);
        }
    },
}
</script>

<template>
    <div class="fs-1 fw-bolder lh-1 text-center" ref="newlineControl" v-html="`${animatedText}<span id='spanCaret'>&nbsp;</span>`"></div>
</template>

<style>
h1{
    font-family: monospace;
}
#spanCaret {
  border-left: 5px solid rgb(0, 0, 0);
  margin-left: 3px;
  animation: blink-caret 1s infinite;
}
@keyframes blink-caret {
  from {
    border-color: transparent;
  }
  to {
    border-color: rgb(0, 0, 0);
  }
}
</style>