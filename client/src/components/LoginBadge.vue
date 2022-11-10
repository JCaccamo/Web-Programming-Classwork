<script setup lang="ts">
    import { RouterLink } from 'vue-router';
    import session, { login, logout } from '../stores/session'
</script>

<template>
    <div class="buttons" v-if="session.user == null">
        <a class="button is-primary">
            Sign up
        </a>
        <RouterLink class="button is-light" to="login">
            Log in
        </RouterLink>
    </div>
    <div class="welcome" v-else>
        <p>Welcome {{session.user.name}} ({{session.user.email}})</p>
        <a class="button is-light" @click="logout()">
            Log out
        </a>
    </div>
</template>

<style lang="scss">
    .welcome {
        display: flex;
        p {
            margin: auto;
        }
        a {
            margin-left: 10px;
        }
    }
</style>
