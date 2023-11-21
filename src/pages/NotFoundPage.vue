<template>
    <div class="container text-center py-5">
        <h1>404 Page Not Found</h1>

        <router-link :to="{ name: 'home' }">Back to HomePage</router-link>
    </div>
</template>

<script>
export default {
    name: 'NotFoundPage'
}
</script>

<style lang="scss" scoped></style>