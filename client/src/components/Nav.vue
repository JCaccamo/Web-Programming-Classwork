<script setup lang="ts">
    import { ref } from 'vue';
    import { RouterLink } from 'vue-router';
    import Cart from './Cart.vue';
    import LoginBadge from './LoginBadge.vue';
    import MessageList from './MessageList.vue';

    const isActive = ref(false);
    const isCartOpen = ref(false);
</script>

<template>
    <Cart :is-open="isCartOpen" />
    <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
        <div class="container">
            <div class="navbar-brand">
                <div class="navbar-item">
                    <h1 class="title is-5">Web Programming</h1>
                </div>
                <a :class="{ 'is-active': isActive }" @click="isActive = !isActive" role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': isActive }">
                <div class="navbar-start">
                    <RouterLink to="/" class="navbar-item">Home</RouterLink>
                    <RouterLink to="/products" class="navbar-item">Products</RouterLink>
                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link">More</a>
                        <div class="navbar-dropdown">
                            <RouterLink to="/admin/products" class="navbar-item">Admin</RouterLink>
                            <RouterLink to="/about" class="navbar-item">About</RouterLink>
                        </div>
                    </div>
                </div>
                <div class="navbar-end">
                    <MessageList />
                    <div class="navbar-item">
                        <button class="button is-primary" @click="isCartOpen = !isCartOpen">Cart</button>
                    </div>
                    <div class="navbar-item">
                        <LoginBadge />
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<style>
    nav {
        padding: 0 135px 0 135px;
    }
    .router-link-active {
        border-bottom: #00AA00 5px solid;
    }
</style>
