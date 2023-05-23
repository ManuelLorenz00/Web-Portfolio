<template>
    <div class="scrollactive-item" id="contact">
        <section>
            <h2>Contact me</h2>
            <p class="text">I am very interested in pursuing a career as a junior web developer or junior frontend
                developer. If
                you have any questions, comments, or feedback for me, please do not hesitate to get in touch. I would be
                thrilled to hear from you and discuss any opportunities further.</p>
            <div class="contact-grid">
                <div class="contact-icons">
                    <div class="svg-holder">
                        <a href="tel:+436766735919"><img class="svg" src="@/assets/call_FILL0_wght400_GRAD0_opsz48.svg">+43
                            676
                            6735919</a>
                    </div>
                    <div class="svg-holder">
                        <a href="mailto:manuellorenz549@gmail.com"><img class="svg"
                                src="@/assets/send_FILL0_wght400_GRAD0_opsz48.svg">manuellorenz549@gmail.com</a>
                    </div>
                    <div class="svg-holder">
                        <a href="https://www.google.at/maps/place/1050+Wien/@48.1872502,16.3449019,15z/data=!3m1!4b1!4m6!3m5!1s0x476da82f287b5617:0x6a3a2b1298723459!8m2!3d48.1857835!4d16.3541243!16s%2Fm%2F0_tkbwt"
                            target="_blank"><img class="svg" src="@/assets/location_on_FILL0_wght400_GRAD0_opsz48.svg">1050
                            Vienna</a>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
  
<script>
export default {
}
</script>
  
<style scoped>
.contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.svg-holder a {
    display: flex;
    justify-content: left;
    align-items: center;
    margin: 1rem 0 0 0;
    color: #ffffff;
}

.svg-holder a:hover {
    cursor: pointer;
}

.svg {
    filter: brightness(0) saturate(100%) invert(72%) sepia(19%) saturate(1745%) hue-rotate(119deg) brightness(89%) contrast(83%);
    margin: 0 1rem 0 0;
}
</style>
  