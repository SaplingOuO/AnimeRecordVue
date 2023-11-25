<!-- 參考網站 https://hamsterism.com/articles/wrapable-typing-animation/ -->
<script>
export default {
    data() {
        return {
            sloganTextArray: ["這是測試文字","這是第二行"],
            animatedText: "",
            textIndex: 0,
            textLength: 0,
        };
    },
    mounted() {
        setTimeout(() => this.typeWriter(), 1000);
    },
    methods: {
        typeWriter() {
            const speed = 100;
            const currentText = this.sloganTextArray[this.textIndex];
            console.log(currentText);
            if (this.textLength < currentText.length) {
                this.animatedText += currentText.charAt(this.textLength);
                this.textLength++;
                setTimeout(this.typeWriter, speed);
            }else{
                // Move to the next text in the array
                this.textIndex++;
                this.textLength = 0;
                this.animatedText += "<br>"; // Add line break
                if (this.textIndex < this.sloganTextArray.length) {
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
    <div>
        <h1 class="mb-0" ref="newlineControl" v-html="`${animatedText}<span id='spanCaret'>&nbsp;</span>`"></h1>
        <!-- <input ref="myInput"> -->
        <textarea row="12" cols="50" ref="myInput"></textarea>
        <br>
        <button @click="changeText">Change Text</button>
    </div>

</template>

<style>
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