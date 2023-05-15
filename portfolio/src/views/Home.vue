<script>
import Navbar from "../components/Navbar.vue"
import Hero from "../components/Hero.vue"
import Portfolio from "../components/Portfolio.vue"
import Skills from "../components/Skills.vue"
import CV from "../components/CV.vue"
import Contact from "../components/Contact.vue"

export default {
    components: {
        Navbar,
        Hero,
        Portfolio,
        Skills,
        CV,
        Contact
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
        <Contact/>
    </div>
</template>

<style scoped>
.content {
    padding-left: 200px;
}
</style>