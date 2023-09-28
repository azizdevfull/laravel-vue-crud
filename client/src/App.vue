<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
</script>

<template>
    <div>
        <div class="container">
            <Navbar />
            <RouterView />
        </div>
    </div>
</template>

<style scoped></style>
