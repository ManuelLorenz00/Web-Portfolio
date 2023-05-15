<template>
    <section>
        <h2>Contact me</h2>
        <p class="text">I am very interested in pursuing a career as a junior web developer or junior frontend developer. If
            you have any questions, comments, or feedback for me, please do not hesitate to get in touch. I would be
            thrilled to hear from you and discuss any opportunities further.</p>
        <div class="contact-grid">
            <div class="contact-icons">
                <div class="svg-holder">
                    <a></a><img class="svg" src="@/assets/call_FILL0_wght400_GRAD0_opsz48.svg">+43 676 6735919
                </div>
                <div class="svg-holder">
                    <a></a><img class="svg"
                        src="@/assets/send_FILL0_wght400_GRAD0_opsz48.svg">manuellorenz549@gmail.com
                </div>
                <div class="svg-holder">
                    <a></a><img class="svg" src="@/assets/location_on_FILL0_wght400_GRAD0_opsz48.svg">1050 Vienna
                </div>
            </div>
            <div class="contact-map">
                map
            </div>
        </div>
    </section>
</template>
  
<script>
import emailjs from 'emailjs-com';

export default {
}
</script>
  
<style scoped>
section {
    padding: 5.5rem 4rem 9rem;
}

.text {
    max-width: 50%;
    font-size: 1rem;
    padding: 2rem 0;
}

.contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.svg-holder{
    display: flex;
    justify-content: left;
    align-items: center;
    margin: 1rem 0 0 0;
}
.svg {
    filter: brightness(0) saturate(100%) invert(72%) sepia(19%) saturate(1745%) hue-rotate(119deg) brightness(89%) contrast(83%);
    margin: 0 1rem 0 0;
}   
</style>
  