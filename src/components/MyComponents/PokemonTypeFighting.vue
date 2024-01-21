<script>

export default {
    data() {
        return {
            // 使用招式的倍率 noEffective = 0 , weakness = 0.5 , superEffective = 2
            types: [
                { typeEN: 'Normal', typeCH: '普通', noEffective: [13], superEffective: [6] },
                { typeEN: 'Fire', typeCH: '火', weakness: [1, 4, 5, 11, 16, 17], superEffective: [2, 8, 12] },
                { typeEN: 'Water', typeCH: '水', weakness: [1, 2, 5, 16], superEffective: [3, 4] },
                { typeEN: 'Electric', typeCH: '電', weakness: [3, 9, 16], superEffective: [8] },
                { typeEN: 'Grass', typeCH: '草', weakness: [2, 3, 4, 8], superEffective: [1, 5, 7, 9, 11] },
                { typeEN: 'Ice', typeCH: '冰', weakness: [5], superEffective: [1, 6, 12, 16] },
                { typeEN: 'Fighting', typeCH: '格鬥', weakness: [11, 12, 15], superEffective: [9, 10, 17] },
                { typeEN: 'Poison', typeCH: '毒', weakness: [4, 6, 7, 11, 17], superEffective: [8, 10] },
                { typeEN: 'Ground', typeCH: '地面', noEffective: [3], weakness: [7, 12], superEffective: [2, 4, 5] },
                { typeEN: 'Flying', typeCH: '飛行', noEffective: [8], weakness: [4, 6, 11], superEffective: [3, 5, 12] },
                { typeEN: 'Psychic', typeCH: '超能力', weakness: [6, 10], superEffective: [11, 13, 15] },
                { typeEN: 'Bug', typeCH: '蟲', weakness: [4, 6, 8], superEffective: [1, 9, 12] },
                { typeEN: 'Rock', typeCH: '岩石', weakness: [0, 1, 7, 9], superEffective: [2, 4, 6, 8, 16] },
                { typeEN: 'Ghost', typeCH: '幽靈', noEffective: [0, 6], weakness: [7, 11], superEffective: [13, 15] },
                { typeEN: 'Dragon', typeCH: '龍', weakness: [1, 2, 3, 4], superEffective: [5, 14, 17] },
                { typeEN: 'Dark', typeCH: '惡', noEffective: [10], weakness: [13, 15], superEffective: [6, 11, 17] },
                { typeEN: 'Steel', typeCH: '鋼', noEffective: [7], weakness: [0, 4, 5, 9, 10, 11, 12, 14, 16, 17], superEffective: [1, 6, 8] },
                { typeEN: 'Fairy', typeCH: '妖精', noEffective: [14], weakness: [6, 11, 15], superEffective: [7, 16] },
            ],
            selectedTypes: [{ type: -1 }, { type: -1 }],
            typeLimit: 0,

            typeA: 0,
            typeB: 0,
            superEffectiveIntegrate: 0,
            weaknessIntegrate: 0,
            noEffectiveIntegrate: 0,
            allArray: [],
            superEffectiveView: [],
            weaknessView: [],
            normalView: [],
            noEffectiveView: [],
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
            // console.log('----------------');
            try {
                this.typeA = this.selectedTypes[0].type;
                this.typeB = this.selectedTypes[1].type;

                // selectedTypes內兩個都有東西
                if (this.selectedTypes[0].type >= 0 && this.selectedTypes[1].type >= 0) {


                    // superEffective運算

                    this.superEffectiveIntegrate = this.types[this.typeA].superEffective.concat(this.types[this.typeB].superEffective).sort((a, b) => a - b);
                    this.superEffectiveIntegrate.forEach((value) => {
                        this.allArray.push({ type: this.types[value].typeCH, magnification: 2 })
                        if (this.superEffectiveIntegrate != null) {
                            this.superEffectiveIntegrate = this.types[this.typeA].superEffective.concat(this.types[this.typeB].superEffective).sort((a, b) => a - b);
                        }
                    })

                    //weakness運算
                    this.weaknessIntegrate = this.types[this.typeA].weakness.concat(this.types[this.typeB].weakness).sort((a, b) => a - b);
                    this.weaknessIntegrate.forEach((value) => {
                        this.allArray.push({ type: this.types[value].typeCH, magnification: 0.5 })
                        if (this.weaknessIntegrate != null) {
                            this.weaknessIntegrate = this.types[this.typeA].weakness.concat(this.types[this.typeB].weakness).sort((a, b) => a - b);
                        }
                    })


                    //noEffective運算
                    if (this.types[this.typeA].noEffective != null) {
                        this.noEffectiveIntegrate = this.types[this.typeA].noEffective.sort((a, b) => a - b);
                        this.noEffectiveIntegrate.forEach((value) => {
                            this.allArray.push({ type: this.types[value].typeCH, magnification: 0 })
                        });
                    }
                    if (this.types[this.typeB].noEffective != null) {
                        this.noEffectiveIntegrate = this.types[this.typeB].noEffective.sort((a, b) => a - b);
                        this.noEffectiveIntegrate.forEach((value) => {
                            this.allArray.push({ type: this.types[value].typeCH, magnification: 0 })
                        });
                    }

                    // 整合計算
                    const res = Object.values(this.allArray.reduce((a, b) => {
                        const key = b.type;
                        a[key] = a[key] || { type: b.type, magnification: 1 };

                        // 將att轉為數字，然後相乘
                        a[key].magnification *= b.magnification;

                        return a;
                    }, {}));

                    this.allArray = [];
                    this.allArray = res;

                    // console.log(this.allArray)

                    this.superEffectiveView = this.allArray.filter(e => e.magnification >= 2).sort((a, b) => b - a);
                    // console.log(this.superEffectiveView)
                    this.weaknessView = this.allArray.filter(e => e.magnification < 1 && e.magnification > 0).sort((a, b) => b - a);
                    // console.log(this.weaknessView)
                    this.normalView = this.allArray.filter(e => e.magnification == 1).sort((a, b) => b - a);
                    // console.log(this.noEffectiveView)
                    this.noEffectiveView = this.allArray.filter(e => e.magnification == 0).sort((a, b) => b - a);
                    // console.log(this.noEffectiveView)


                }



            } catch (error) {
                console.log('有錯誤');
                console.log(error);
                return;
            }

        },
        deleteType(index) {
            this.selectedTypes[index].type = -1;
            this.allArray = [];
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
            <div class="row" v-for="item in superEffectiveView" :key="item">
                <div class="col">{{ item.type }}</div>
                <div class="col">{{ item.magnification }}</div>
            </div>
            <!-- <h2>{{ superEffectiveView }}</h2> -->
            <h1>不利的屬性招式</h1>
            <div class="row" v-for="item in weaknessView" :key="item">
                <div class="col">{{ item.type }}</div>
                <div class="col">{{ item.magnification }}</div>
            </div>
            <!-- <h2>{{ weaknessView }}</h2> -->
            <h1>倍率1傷害</h1>
            <div class="row" v-for="item in normalView" :key="item">
                <div class="col">{{ item.type }}</div>
                <div class="col">{{ item.magnification }}</div>
            </div>
            <h1>沒傷害</h1>
            <div class="row" v-for="item in noEffectiveView" :key="item">
                <div class="col">{{ item.type }}</div>
                <div class="col">{{ item.magnification }}</div>
            </div>
            <!-- <h2>{{ noEffectiveView }}</h2> -->
        </div>
    </div>
</template>

<style></style>