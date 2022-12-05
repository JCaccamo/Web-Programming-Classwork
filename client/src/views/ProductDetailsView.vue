<script setup lang="ts">
    import { isLoading } from "@/stores/session";
    import { ref } from "vue";
    import { useRoute } from "vue-router";
    import { getProduct, type Product } from "../stores/products";
    const route = useRoute();
    const product = ref(null as Product | null);
    getProduct(route.params.id as string).then(x => {
        product.value = x;
        console.log('The fetch returned');
    });
    console.log('The fetch was called');
</script>

<template>
    <div class="section">
        <h1 class="title">Product Details</h1>
        <div class="details" v-if="product">
            <div class="product-image">
                <img :src="product.thumbnail" :alt="product.title" />
            </div>
            <div class="product-info">
                <h3 class="title">{{ product.title }}</h3>
                <p class="price subtitle">
                    <span class="currency">$</span>
                    <span class="amount">{{ product.price }}</span>
                </p>
                <p>{{ product.description }}</p>
            </div>
        </div>
        <div v-else-if="isLoading">
            <img src="@/assets/loading-placeholder.gif" style="width: 100%" />
        </div>
        <div v-else>
            <h2 class="title">Product not found</h2>
        </div>
    </div>
</template>

<style scoped>
    .details {
        padding: 1em;
        display: flex;
        border: 1px solid none;
        border-radius: 5px;
        background-color: whitesmoke;
    }
    img {
        float: left;
        width: 256px;
        height: 256px;
    }
    .product-info {
        padding: 1em;
    }
</style>
