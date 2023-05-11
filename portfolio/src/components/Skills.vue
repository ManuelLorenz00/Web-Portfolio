<template>
  <section>
    <div class="skill-header">
      <h2 class="headline">My Skillstack</h2>
      <p class="text grey">Here are some of the skills that I've acquired over the years. From front-end web development to
        server-side
        scripting, I've worked with a variety of technologies to bring my ideas to life.</p>
    </div>
    <div class="skill-grid">
      <div v-for="skill in skills" :key="skill.name" class="skill-item">
        <div class="skill-name" :style="{ 'backgroundColor': skill.color }" @mouseover="startAnimation(skill)"
          :class="{ 'animate': skill.isAnimating }" @animationend="endAnimation(skill)">
          {{ skill.name }}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SkillGrid",
  data() {
    return {
      skills: [
        { name: "HTML", color: "#E44D2680", isAnimating: false },
        { name: "CSS", color: "#264DE480", isAnimating: false },
        { name: "LESS", color: "#1D365D80", isAnimating: false },
        { name: "JavaScript", color: "#F0DB4F80", isAnimating: false },
        { name: "Vue.js", color: "#4FC08D80", isAnimating: false },
        { name: "Node.js", color: "#83CD2980", isAnimating: false },
        { name: "jQuery", color: "#0769AD80", isAnimating: false },
        { name: "Java", color: "#00739680", isAnimating: false },
        { name: "MariaDB", color: "#00354580", isAnimating: false },
        { name: "Git", color: "#F34F2980", isAnimating: false },
        { name: "Bootstrap", color: "#7952B380", isAnimating: false },
        { name: "Smarty", color: "#EEA20080", isAnimating: false },
        { name: "Firebase", color: "#FFCB2B80", isAnimating: false },
      ],
    };
  },
  methods: {
    startAnimation(skill) {
      skill.isAnimating = true;
    },
    endAnimation(skill) {
      skill.isAnimating = false;
    },
  },
};
</script>

<style scoped>
section {
  padding: 5.5rem 4rem 9rem;
}

.headline {
  color: #1dc4ad;
  font-size: 3rem;
  text-align: left;
}

.text {
  max-width: 50%;
  font-size: 1rem;
  padding: 2rem 0;
  text-align: left;
}

.skill-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: minmax(120px, auto);
  grid-gap: 15px;
}

.skill-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  height: fit-content;
}

.skill-name {
  width: 200px;
  height: 100px;
  border-radius: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 1.5rem;
  text-transform: uppercase;
  transition: background-color 0.3s ease;
  opacity: 0.8;
}

.skill-name:hover {
  --hover-color: rgba(0, 0, 0, 0.3);
  background-color: var(--hover-color);
}

.skill-name.animate {
  animation-name: pulse;
  animation-duration: 1.3s;
  animation-fill-mode: forwards;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 0.8;
  }

  50% {
    transform: scale(1.1);
    opacity: 1;
  }

  100% {
    transform: scale(1);
    opacity: 0.8;
  }
}
</style>
