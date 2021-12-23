<template lang="pug">
div
    input(v-model="demodata")
    div {{demodata}}
</template>

<script setup>
import { onMounted } from "@vue/runtime-core"
import { ref } from "@vue/reactivity"

const demodata = ref('')

onMounted(() => {
    demodata.value = "Hello World!"
})

</script>
