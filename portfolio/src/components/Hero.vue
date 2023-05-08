<script>
export default {

}
</script>

<template>
    <section class="section">
        <h1>
            Manuel Lorenz 
            <br>
            Junior Frontend Developer
        </h1>
        <p>Creative / Detail-oriented / Adaptable</p>
        <button>Contact me !</button>
    </section>
</template>

<style scoped>
.section{
    height: 100vh;
    padding: 9rem 4rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
}
h1{
    font-size: 4rem;
    line-height: 1.2;
    font-weight: 500;
    color: #ffffff;
}
p{
    font-size: 1.6rem;
    padding: 2rem 0;
    color: #8d8d8d;
}
button{
    width: fit-content;
    background-color: transparent;
    border: 1px solid #1dc4ad;
    color: #1dc4ad;
    font-size: 1.2rem;
    padding: 1rem 2rem;
    letter-spacing: 3px;
    transition: all .3s;
}
button:after{
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
    border-radius: 10rem;
    z-index: -2;
}
button:before{
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: #1dc4ad;
    transition: all .3s;
    z-index: -1;
}
button:hover{
    cursor: pointer;
    color: #ffffff;
}
button:hover::before{
    width: 100%;
}
</style>