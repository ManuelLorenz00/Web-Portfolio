<script>
export default {

}
</script>

<template>
    <section>
      <h2>My past 5 Years</h2>
      <div class="job-grid">
        <div class="linie">
          <div class="letter">R</div>
          <div class="letter">E</div>
          <div class="letter">S</div>
          <div class="letter">U</div>
          <div class="letter">M</div>
          <div class="letter">E</div>
        </div>
        <div></div>
        <div class="left-grid-column">left</div>
        <div></div>
        <div class="right-grid-column">right</div>
        <div></div>
        <div class="left-grid-column">left</div>
        <div></div>
        <div class="right-grid-column">right</div>
        <div></div>
        <div class="left-grid-column">left</div>
        <div></div>
        <div class="right-grid-column">right</div>
        <div></div>
        <div class="left-grid-column">left</div>
        <div></div>
        <div class="right-grid-column">right</div>
        <div></div>
        <div class="left-grid-column">left</div>
        <div></div>
        <div class="right-grid-column">right</div>
      </div>
    </section>
  </template>
  
<style>
section {
    padding: 5.5rem 4rem 9rem;
}

.linie {
    height: 100%;
    width: 2px;
    background-color: #1dc4ad90;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    justify-content: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    z-index: 3;
}

.letter {
    border-radius: 9999px;
    background-color: #1dc4ad;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    z-index: 4;
}

.job-grid {
    display: grid;
    grid-template-columns: auto auto auto auto;
}

.left-grid-column {
    height: 6rem;
    width: 12rem;
    border: 2px solid #181818;
    border-right: 2px solid #1dc4ad;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem 0 0;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1);
    padding: 2rem 4rem;
}

.right-grid-column {
    height: 6rem;
    width: 12rem;
    border: 2px solid #181818;
    border-left: 2px solid #1dc4ad;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem 0 0;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1);
    padding: 2rem 4rem;
}
</style>
  