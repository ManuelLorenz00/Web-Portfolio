<script>
export default {

}
</script>

<template>
    <header class="vertical-header">
        <nav>
            <div class="logo">
                <p class="logo-letter">ML</p>
                <p class="logo-text">Manuel Lorenz</p>
            </div>
            <ul>
                <li>
                    <a>Portfolio</a>
                </li>
                <li>
                    <a>Skills</a>
                </li>
                <li>
                    <a>Resume</a>
                </li>
                <li>
                    <a>Contact</a>
                </li>
            </ul>
            <div class="socials">
                <a href="https://www.linkedin.com/in/manuel-lorenz-393bb1221/"><img class="social-img"
                        src="@/assets/linkedin.svg"></a>
            </div>
        </nav>
    </header>
</template>

<style scoped>
.vertical-header {
    width: 200px;
    height: 100%;
    display: flex;
    justify-content: center;
    position: fixed;
    z-index: 9999;
}

nav {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
    width: 100%;
    background-color: #181818;
}

.logo {
    background-color: #000000;
    width: 100%;
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.logo-letter {
    color: #179181;
    font-size: 2rem;
}

.logo-text {
    color: #ffffff;
}

ul {
    list-style: none;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

li {
    width: 100%;
    border-top: 2px solid #1d1d1d;
    border-bottom: 2px solid #1d1d1d;
    text-align: center;
}

a {
    color: #179181;
    height: 100%;
    width: 100%;
    display: block;
    padding: 1rem;
}

a:hover {
    color: #ffffff;
    cursor: pointer;
    font-weight: 500;
    background-color: transparent;
}

.social-img {
    height: 30px;
    width: 30px;
    filter: brightness(0) saturate(100%) invert(99%) sepia(2%) saturate(1236%) hue-rotate(259deg) brightness(120%) contrast(100%);
}

.social-img:hover {
    filter: brightness(0) saturate(100%) invert(56%) sepia(79%) saturate(7092%) hue-rotate(156deg) brightness(97%) contrast(82%);
}
</style>