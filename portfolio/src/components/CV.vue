<script>
export default {

}
</script>

<template>
  <section>
    <h2>My past 5 Years</h2>
    <p class="text">The past five years have been transformative for me, as I underwent significant changes from being a
      nursing assistent to becoming a web developer. This transition has had a profound impact on both my personal and professional
      growth. I have developed new technical skills, learned to be more creative and analytical, and become more confident
      in myself. Furthermore, this journey has helped me grow as a person, teaching me to be more resilient, adaptable,
      and open-minded, ultimately shaping me into the person I am today.
    </p>
    <div class="job-grid">
      <div class="linie">
        <div class="letter">R</div>
        <div class="letter">E</div>
        <div class="letter">S</div>
        <div class="letter">U</div>
        <div class="letter">M</div>
        <div class="letter">E</div>
      </div>

      <div class="t1">Vima Werbeagentur <br> Web Entwickler</div>
      <div class="t2">08/2022 - 02/2023</div>
      <div class="t3">09/2021 - 04/2022</div>
      <div class="t4">Codersbay Vienna <br> Diplomlehrgang Softwareentwicklung</div>
      <div class="t1">Caritas <br> Ausbildung Fachsozialbetreuer</div>
      <div class="t2">01/2021 - 06/2021</div>
      <div class="t3">08/2019 - 08/2022</div>
      <div class="t4">Wiener Sozialdienste <br> Heimhilfe</div>
      <div class="t1">Wiener Sozialdienste <br> Ausbildung Heimhilfe</div>
      <div class="t2">01/2019 - 08/2019</div>
      <div class="t3">01/2018 - 10/2018</div>
      <div class="t4">Caritas <br> Zivildienst</div>
    </div>
  </section>
</template>
  
<style>

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
  grid-template-columns: 2fr 1fr 1fr 2fr;
  grid-gap: 1rem;
  padding: 2rem 0;
}


.t1 {
  color: white;
  height: 6rem;
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  background-image: radial-gradient(circle at 100% 100%, transparent 3px, #9b9b9b 3px, #9b9b9b 5px, transparent 5px), linear-gradient(to right, #9b9b9b, #1dc4ad), radial-gradient(circle at 0% 100%, transparent 3px, #1dc4ad 3px, #1dc4ad 5px, transparent 5px), linear-gradient(to bottom, #1dc4ad, #00bfa5), radial-gradient(circle at 0% 0%, transparent 3px, #00bfa5 3px, #00bfa5 5px, transparent 5px), linear-gradient(to left, #00bfa5, #9b9b9b), radial-gradient(circle at 100% 0%, transparent 3px, #9b9b9b 3px, #9b9b9b 5px, transparent 5px), linear-gradient(to top, #9b9b9b, #9b9b9b);
  background-size: 5px 5px, calc(100% - 10px) 2px, 5px 5px, 2px calc(100% - 10px);
  background-position: top left, top center, top right, center right, bottom right, bottom center, bottom left, center left;
  background-repeat: no-repeat;
}

.t2 {
  color: white;
  height: 6rem;
  border: 2px solid #1dc4ad;
  margin-right: 3rem;
  justify-content: center;
  display: flex;
  align-items: center;
  border-radius: 5px;
  text-align: center;
}

.t3 {
  color: white;
  height: 6rem;
  margin-top: 3rem;
  border: 2px solid #1dc4ad;
  margin-left: 3rem;
  justify-content: center;
  display: flex;
  align-items: center;
  border-radius: 5px;
  text-align: center;
}

.t4 {
  color: white;
  height: 6rem;
  margin-top: 3rem;
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  justify-content: right;
  text-align: right;
  background-image: radial-gradient(circle at 100% 100%, transparent 3px, #1dc4ad 3px, #1dc4ad 5px, transparent 5px), linear-gradient(to right, #1dc4ad, #9b9b9b), radial-gradient(circle at 0% 100%, transparent 3px, #9b9b9b 3px, #9b9b9b 5px, transparent 5px), linear-gradient(to bottom, #9b9b9b, #9b9b9b), radial-gradient(circle at 0% 0%, transparent 3px, #9b9b9b 3px, #9b9b9b 5px, transparent 5px), linear-gradient(to left, #9b9b9b, #1dc4ad), radial-gradient(circle at 100% 0%, transparent 3px, #1dc4ad 3px, #1dc4ad 5px, transparent 5px), linear-gradient(to top, #1dc4ad, #1dc4ad);
  background-size: 5px 5px, calc(100% - 10px) 2px, 5px 5px, 2px calc(100% - 10px);
  background-position: top left, top center, top right, center right, bottom right, bottom center, bottom left, center left;
  background-repeat: no-repeat;
}</style>
  