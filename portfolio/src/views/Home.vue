<script>
import Navbar from "../components/Navbar.vue"
import Hero from "../components/Hero.vue"
import Portfolio from "../components/Portfolio.vue"
import Skills from "../components/Skills.vue"
export default {
    components: {
        Navbar,
        Hero,
        Portfolio,
        Skills
    }
}
</script>

<template>
    <Navbar />
    <div class="content">
        <hero />
        <Portfolio />
        <Skills/>
    </div>
</template>

<style scoped>
.content {
    padding-left: 200px;
}
</style>