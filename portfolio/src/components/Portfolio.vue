<script>
export default {

}
</script>

<template>
    <section class="section">
        <h2 class="headline">My portfolio</h2>
        <p class="text">
            Here's a collection of projects I've had the pleasure of working on with incredibly talented individuals. Each
            one represents a unique challenge and an opportunity for growth. I'm proud of what we accomplished together, and
            I look forward to taking on even bigger challenges in the future.
        </p>
        <ul>
            <li>
                <div class="img-wrapper">
                    <div class="hover-content"></div>
                    <img src="@/assets/RW-removebg-preview.png">
                </div>
            </li>
            <li>
                <div class="img-wrapper">
                    <div class="hover-content"></div>
                    <img class="PP" src="@/assets/P&P.png">
                </div>
            </li>
            <li>
                <div class="img-wrapper">

                    <div class="hover-content"></div>
                    <img src="@/assets/JH.png">
                </div>
            </li>
            <li>
                <div class="img-wrapper">
                    <div class="hover-content"></div>
                    <img src="@/assets/LS.png">
                </div>
            </li>
            <li>
                <div class="img-wrapper">
                    <div class="hover-content"></div>
                    <img src="@/assets/OC.png">
                </div>
            </li>
            <li>
                <div class="img-wrapper">
                    <div class="hover-content"></div>
                    <img src="@/assets/BT.png">
                </div>
            </li>
        </ul>
    </section>
</template>

<style scoped>
.section {
    padding: 5.5rem 4rem 9rem;
}

.headline {
    color: #1dc4ad;
    font-size: 3rem;
}

.text {
    max-width: 50%;
    font-size: 1rem;
    padding: 2rem 0;
}

ul {
    list-style: none;
    display: flex;
    justify-content: left;
    align-items: center;
    flex-wrap: wrap;
    margin-left: -7px;
}

li {
    width: 33%;
    position: relative;
    overflow: hidden;
    height: 300px;
}

li:hover img {
    transform: scale(1.14);
}

li:hover .hover-content {
    background: rgba(0, 0, 0, 0);
}

li .img-wrapper img {
    object-fit: cover;
    height: auto;
    max-width: 100%;
    transition: all 450ms ease-in-out;
}

.img-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 7px;
    background-color: #dddbdb;
    overflow: hidden;
}

.hover-content {
    position: absolute;
    z-index: 1;
    opacity: 1;
    font: normal normal 16px/20px "Open Sans", Arial, sans-serif;
    text-align: center;
    color: #fff;
    background: rgba(0, 0, 0, 0.5);
    -webkit-transition: background 150ms ease-out;
    -o-transition: background 150ms ease-out;
    transition: background 150ms ease-out;
    width: 100%;
    height: 100%;
}
</style>