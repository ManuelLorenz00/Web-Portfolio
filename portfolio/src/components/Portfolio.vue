<script>
export default {

}
</script>

<template>
    <section>
        <h2 class="headdivne">My portfolio</h2>
        <p class="text grey">
            Here's a collection of projects I've had the pleasure of working on with incredibly talented individuals. Each
            one represents a unique challenge and an opportunity for growth. I'm proud of what we accompdivshed together, and
            I look forward to taking on even bigger challenges in the future.
        </p>
        <div class="portfolio-grid">
            <div class="cell">
                <div class="img-wrapper">
                    <div class="hover-content">
                        <div class="hover-text">
                            <p>Webdesign</p>
                            <p>Coupon plugin</p>
                        </div>
                    </div>
                    <img src="@/assets/RW-removebg-preview.png">
                </div>
            </div>
            <div class="cell">
                <div class="img-wrapper">
                    <div class="hover-content">
                        <div class="hover-text">
                            <p>Webdesign</p>
                            <p>Application Plugin</p>
                        </div>
                    </div>
                    <img class="PP" src="@/assets/P&P.png">
                </div>
            </div>
            <div class="cell">
                <div class="img-wrapper">

                    <div class="hover-content">
                        <div class="hover-text">
                            <p>Website Relaunch</p>
                        </div>
                    </div>
                    <img src="@/assets/JH.png">
                </div>
            </div>
            <div class="cell">
                <div class="img-wrapper">
                    <div class="hover-content">
                        <div class="hover-text">
                            <p>Webdesign</p>
                        </div>
                    </div>
                    <img src="@/assets/LS.png">
                </div>
            </div>
            <div class="cell">
                <div class="img-wrapper">
                    <div class="hover-content">
                        <div class="hover-text">
                            <p>Webdesign</p>
                        </div>
                    </div>
                    <img src="@/assets/OC.png">
                </div>
            </div>
            <div class="cell">
                <div class="img-wrapper">
                    <div class="hover-content">
                        <div class="hover-text">
                            <p>Email Newsletter</p>
                        </div>
                    </div>
                    <img src="@/assets/BT.png">
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>

.portfolio-grid{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: .5rem;
}
.cell{
    height: 300px;
}

.cell:hover img {
    transform: scale(1.14);
}

.cell:hover .hover-content {
    background: rgba(0, 0, 0, 0.8);
}

.cell:hover .hover-text p{
    opacity: 1;
}

.hover-text p{
    opacity: 0;
    transition: all .6s ease-in;
    color: #1dc4ad;
}

.cell .img-wrapper img {
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
    border-radius: 5px;
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
    border-radius: 5px;
}

.img-text{
    position: absolute;
    top: 50%;
    left: 50%;
}
</style>