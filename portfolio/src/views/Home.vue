<script>
import Navbar from "../components/Navbar.vue"
import Hero from "../components/Hero.vue"
import Portfolio from "../components/Portfolio.vue"
import Skills from "../components/Skills.vue"
import CV from "../components/CV.vue"
export default {
    components: {
        Navbar,
        Hero,
        Portfolio,
        Skills,
        CV
    }
}
</script>

<template>
    <Navbar />
    <div class="content">
        <hero />
        <Portfolio />
        <Skills/>
        <CV/>
    </div>
</template>

<style scoped>
.content {
    padding-left: 200px;
}
</style>