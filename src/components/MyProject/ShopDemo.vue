<script>

export default {
    data() {
        return {
            newProduct: {
                name: '',
                price: '',
                quantity: '',
            },
            products: [
                { name: '商品A', price: '100', quantity: '123' },
                { name: '商品B', price: '50', quantity: '213' },
                { name: '商品C', price: '150', quantity: '312' },
                { name: '商品D', price: '200', quantity: '132' },
                { name: '商品E', price: '1050', quantity: '231' },
                { name: '商品F', price: '30', quantity: '321' },
                { name: '商品AA', price: '100', quantity: '123' },
                { name: '商品BB', price: '50', quantity: '213' },
                { name: '商品CC', price: '150', quantity: '312' },
                { name: '商品DD', price: '200', quantity: '132' },
                { name: '商品EE', price: '1050', quantity: '231' },
                { name: '商品FF', price: '30', quantity: '321' },
                { name: '商品AAA', price: '100', quantity: '123' },
                { name: '商品BBB', price: '50', quantity: '213' },
                { name: '商品CCC', price: '150', quantity: '312' },
                { name: '商品DDD', price: '200', quantity: '132' },
                { name: '商品EEE', price: '1050', quantity: '231' },
                { name: '商品FFF', price: '30', quantity: '321' },
            ],
            cart: [],
        }
    },
    methods: {
        addProduct() {
            const existingProductIndex = this.products.findIndex(product => product.name === this.newProduct.name);
            if (this.newProduct.name !== '') {
                if (existingProductIndex !== -1) {
                    // 更新現有產品
                    this.products[existingProductIndex] = {
                        ...this.products[existingProductIndex],
                        price: this.newProduct.price,
                        quantity: this.newProduct.quantity,
                    };
                } else {
                    // 新增新產品
                    this.products.push({
                        name: this.newProduct.name,
                        price: this.newProduct.price,
                        quantity: this.newProduct.quantity,
                    });
                }
            }
            console.log("資料庫:", this.products);
            // 清空 newProduct 表單
            this.newProduct = {
                name: '',
                price: '',
                quantity: '',
            };
        },
        deleteProduct() {
            const existingProductIndex = this.products.findIndex(product => product.name === this.newProduct.name);
            if(existingProductIndex != -1){
                this.products.splice(existingProductIndex, 1);
            }
            console.log("刪除後資料庫:", this.products);
        },
        addcart() {
            this.cart.push(this.products);
        },
    },
}

</script>

<template>
    <div class="vh-100">
        <div class="row g-0">
            <!-- 後台 -->
            <div class="col-12 col-md-4 p-4">
                <div class="fs-1">後台</div>
                <div class="row g-0 bg-success w-100 m-2 p-2 position-relative">
                    <div class="w-100">
                        <div class="form-floating mb-2">
                            <input v-model="newProduct.name" class="form-control" id="product" placeholder="Product">
                            <label for="product">商品名稱</label>
                        </div>
                        <div class="form-floating mb-2">
                            <input v-model="newProduct.price" class="form-control" id="price" placeholder="Price">
                            <label for="price">商品價格</label>
                        </div>
                        <div class="form-floating mb-2">
                            <input v-model="newProduct.quantity" class="form-control" id="quantity" placeholder="Quantity">
                            <label for="quantity">剩餘數量</label>
                        </div>
                        <button @click="addProduct" class="bg-warning m-2">新增或更新至前台</button>
                        <button @click="deleteProduct" class="bg-warning m-2">刪除</button>
                    </div>
                </div>
            </div>
            <!-- 商品 -->
            <div class="col-12 col-md-4 p-4">
                <div class="fs-1">商品</div>
                <div v-for="product in products" :key="product.name" class="row g-0 bg-success w-100 m-2 p-2 position-relative">
                    <div class="col-10">
                        <div class="fs-5">商品名稱：{{ product.name }}</div>
                        <div>商品價格：{{ product.price }}</div>
                        <div>剩餘數量：{{ product.quantity }}</div>
                        <button @click="addcart" class="bg-warning m-2">加入購物車</button>
                    </div>
                </div>
            </div>
            <!-- 購物車 -->
            <div class="col-12 col-md-4 p-4">
                <div class="fs-1">購物車</div>
                <div class="row g-0 bg-success w-100 m-2 p-2 position-relative">
                    <div class="col-10">
                        <div class="fs-5">商品名稱：</div>
                        <div>商品價格：</div>
                        <div>購買數量：</div>
                        <button class="bg-warning m-2">刪除</button>
                    </div>
                </div>
                <div>總金額:</div>
            </div>
        </div>
    </div>
</template>

<style></style>