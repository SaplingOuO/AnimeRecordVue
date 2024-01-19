<script>

export default {
    data() {
        return {
            // noEffective = 0 , weakness = 0.5 , superEffective = 2
            types: [
                { typeEN: 'Normal', typeCH: '普通', noEffective: [13], weakness: [12, 16] },
                { typeEN: 'Fire', typeCH: '火', weakness: [1, 2, 12, 14], superEffective: [4, 5, 11, 16] },
                { typeEN: 'Water', typeCH: '水', weakness: [2, 4, 14], superEffective: [1, 8, 12] },
                { typeEN: 'Electric', typeCH: '電', noEffective: [8], weakness: [3, 4, 14], superEffective: [2, 9] },
                { typeEN: 'Grass', typeCH: '草', weakness: [1, 4, 7, 9, 11, 14, 16], superEffective: [2, 8, 12] },
                { typeEN: 'Ice', typeCH: '冰', weakness: [1, 2, 5, 16], superEffective: [4, 8, 9, 14] },
                { typeEN: 'Fighting', typeCH: '格鬥', noEffective: [13], weakness: [7, 9, 10, 11, 17], superEffective: [0, 5, 12, 15, 16] },
                { typeEN: 'Poison', typeCH: '毒', noEffective: [16], weakness: [7, 8, 12, 13], superEffective: [4, 17] },
                { typeEN: 'Ground', typeCH: '地面', noEffective: [9], weakness: [4, 11], superEffective: [1, 3, 7, 12, 16] },
                { typeEN: 'Flying', typeCH: '飛行', weakness: [3, 12, 16], superEffective: [4, 6, 11] },
                { typeEN: 'Psychic', typeCH: '超能力', noEffective: [15], weakness: [10, 16], superEffective: [6, 7] },
                { typeEN: 'Bug', typeCH: '蟲', weakness: [1, 6, 7, 9, 13, 16, 17], superEffective: [4, 10, 15] },
                { typeEN: 'Rock', typeCH: '岩石', weakness: [6, 8, 16], superEffective: [1, 5, 9, 11] },
                { typeEN: 'Ghost', typeCH: '幽靈', noEffective: [0], weakness: [15], superEffective: [10, 13] },
                { typeEN: 'Dragon', typeCH: '龍', noEffective: [17], weakness: [16], superEffective: [14] },
                { typeEN: 'Dark', typeCH: '惡', weakness: [6, 15, 17], superEffective: [10, 13] },
                { typeEN: 'Steel', typeCH: '鋼', weakness: [1, 2, 3, 16], superEffective: [5, 12, 17] },
                { typeEN: 'Fairy', typeCH: '妖精', weakness: [1, 7, 16], superEffective: [6, 14, 15] },
            ],
            selectedTypes: [{ type: -1 }, { type: -1 }],
            typeLimit: 0,

            superEffectiveView: [],
            weaknessView: [],
            noEffectiveView: [],
            typeA:0,
            typeB:0,
            superEffectiveIntegrate:0,
            weaknessIntegrate:0,
            noEffectiveIntegrate:0,
        };
    },
    methods: {
        updateType(index) {
            // console.log('----------------');
            // console.log('index:'+index);
            if (this.selectedTypes[0].type != index && this.selectedTypes[1].type != index) {
                if (this.typeLimit == 0) {
                    this.selectedTypes[0].type = index;
                    this.typeLimit += 1;
                } else if (this.typeLimit == 1) {
                    this.selectedTypes[1].type = index;
                    this.typeLimit = 0;
                }
            }

            //屬性優劣
            console.log('----------------');
            try {
                this.typeA = this.selectedTypes[0].type;
                this.typeB = this.selectedTypes[1].type;

                // selectedTypes內兩個都有東西
                if(this.selectedTypes[0].type>=0 && this.selectedTypes[1].type>=0){
                    // superEffective運算
                    this.superEffectiveIntegrate = this.types[this.typeA].superEffective.concat(this.types[this.typeB].superEffective).sort((a,b) => a-b);
                    let typeMap_SE = {};
                    for(let i=0;i<this.superEffectiveIntegrate.length;i++){
                        let currentType =this.types[this.superEffectiveIntegrate[i]].typeCH;
                        if(typeMap_SE[currentType]){
                            typeMap_SE[currentType].magnification *= 2;
                        }else{
                            typeMap_SE[currentType] = {type: currentType, magnification: 2};
                            this.superEffectiveView.push(typeMap_SE[currentType]);
                        }
                    }
                    console.log(this.superEffectiveView);

                    //weakness運算
                    this.weaknessIntegrate = this.types[this.typeA].weakness.concat(this.types[this.typeB].weakness).sort((a,b) => a-b);
                    let typeMap_W = {};
                    for(let i=0;i<this.weaknessIntegrate.length;i++){
                        let currentType = this.types[this.weaknessIntegrate[i]].typeCH;
                        if(typeMap_W[currentType]){
                            typeMap_W[currentType].magnification *= 0.5;
                        }else{
                            typeMap_W[currentType] = {type: currentType, magnification: 0.5};
                            this.weaknessView.push(typeMap_W[currentType]);
                        }
                    }
                    console.log(this.weaknessView);

                    //noEffective運算
                }

                

            } catch (error) {
                console.log('有錯誤');
                return;
            }

        },
        deleteType(index) {
            this.selectedTypes[index].type = -1;
        },
    },
}
</script>

<template>
    <div class="row g-0">
        <div class="col">
            <h1>遇到的寶可夢屬性</h1>
            <div class="w-100" v-for="(selectedType, index) in selectedTypes" :key="index">
                <div v-if="types[selectedType.type]">
                    <button class="fs-1" @click="deleteType(index)">{{ types[selectedType.type].typeCH }}</button>
                </div>
            </div>
                <button v-for="(type, index) in types" :key="type" @click="updateType(index)">{{ type.typeCH }}</button>
            </div>

            <div class="col">
                <h1>有利的屬性招式</h1>
                <h2>{{ superEffectiveView }}</h2>
                <h1>不利的屬性招式</h1>
                <h2>{{ weaknessView }}</h2>
                <h1>沒傷害</h1>
                <h2>{{ noEffectiveView }}</h2>
            </div>
        </div>
</template>

<style></style>