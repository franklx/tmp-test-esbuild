<template lang="pug">
router-link(to="/demo") demo
div
    router-view(:key="$route.fullPath")
</template>

<script setup>
</script>
