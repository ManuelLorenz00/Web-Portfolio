<script>
import ScrollReveal from 'scrollreveal';
import Navbar from '../components/Navbar.vue';
import Hero from '../components/Hero.vue';
import Portfolio from '../components/Portfolio.vue';
import Skills from '../components/Skills.vue';
import CV from '../components/CV.vue';
import Contact from '../components/Contact.vue';

export default {
    components: {
        Navbar,
        Hero,
        Portfolio,
        Skills,
        CV,
        Contact
    },
    mounted() {
        const sr = ScrollReveal();

        sr.reveal('.content > *', {
            origin: 'bottom',
            distance: '20px',
            duration: 1000,
            delay: 200,
            opacity: 0,
            scale: 0.8,
            easing: 'ease-in-out',
        });
    }
};
</script>


<template>
    <Navbar />
    <div class="content">
        <Hero id="Home" />
        <Portfolio id="Portfolio" />
        <Skills id="Skills" />
        <CV id="CV" />
        <Contact id="Contact" />
    </div>
</template>

<style scoped>
.content {
    padding-left: 200px;
}

@media (max-width: 1200px) {
    .content {
        padding-left: 0;
    }
}
</style>