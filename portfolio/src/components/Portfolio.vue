<script>
export default {

}
</script>

<template>
    <section class="section">
        <h2 class="headline">My portfolio</h2>
        <p class="text grey">
            Here's a collection of projects I've had the pleasure of working on with incredibly talented individuals. Each
            one represents a unique challenge and an opportunity for growth. I'm proud of what we accomplished together, and
            I look forward to taking on even bigger challenges in the future.
        </p>
        <ul>
            <li>
                <div class="img-wrapper">
                    <div class="hover-content">
                        <div class="hover-text">
                            <p>Webdesign</p>
                            <p>Coupon plugin</p>
                        </div>
                    </div>
                    <img src="@/assets/RW-removebg-preview.png">
                </div>
            </li>
            <li>
                <div class="img-wrapper">
                    <div class="hover-content">
                        <div class="hover-text">
                            <p>Webdesign</p>
                            <p>Application Plugin</p>
                        </div>
                    </div>
                    <img class="PP" src="@/assets/P&P.png">
                </div>
            </li>
            <li>
                <div class="img-wrapper">

                    <div class="hover-content">
                        <div class="hover-text">
                            <p>Website Relaunch</p>
                        </div>
                    </div>
                    <img src="@/assets/JH.png">
                </div>
            </li>
            <li>
                <div class="img-wrapper">
                    <div class="hover-content">
                        <div class="hover-text">
                            <p>Webdesign</p>
                        </div>
                    </div>
                    <img src="@/assets/LS.png">
                </div>
            </li>
            <li>
                <div class="img-wrapper">
                    <div class="hover-content">
                        <div class="hover-text">
                            <p>Webdesign</p>
                        </div>
                    </div>
                    <img src="@/assets/OC.png">
                </div>
            </li>
            <li>
                <div class="img-wrapper">
                    <div class="hover-content">
                        <div class="hover-text">
                            <p>Email Newsletter</p>
                        </div>
                    </div>
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
    background: rgba(0, 0, 0, 0.8);
}

li:hover .hover-text p{
    opacity: 1;
}


.hover-text p{
    opacity: 0;
    transition: all .6s ease-in;
    color: #1dc4ad;
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
    background-color: #ffffff;
    overflow: hidden;
}

.hover-content {
    position: absolute;
    z-index: 1;
    opacity: 1;
    text-align: center;
    color: #fff;
    background: rgba(0, 0, 0, 0.3);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .3s ease-in;
}

.img-text{
    position: absolute;
    top: 50%;
    left: 50%;
}
</style>