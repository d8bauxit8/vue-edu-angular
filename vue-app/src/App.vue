<script setup lang="ts">
import {RouterView} from 'vue-router'
import {APP_TITLE} from "./constants/app-title.constants";
</script>

<template>
    <metainfo>
        <template v-slot:title="{ content }">{{ content ?? APP_TITLE }}</template>
    </metainfo>
    <header class="flex justify-center">
        <h1 class="font-bold my-8 text-3xl text-black">{{ APP_TITLE }}</h1>
    </header>

    <RouterView/>
</template>
