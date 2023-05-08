<template>
    <section>
    <div class="skill-grid">
      <div v-for="skill in skills" :key="skill.name" class="skill-item">
        <img :src="skill.image" :alt="skill.name" class="skill-image" />
        <div class="skill-name">{{ skill.name }}</div>
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
          { name: "Html", image: "../assets/html-removebg-preview.png" },
          { name: "css", image: "path/to/image2.png" },
          { name: "less", image: "path/to/image3.png" },
          { name: "Javascript", image: "path/to/image4.png" },
          { name: "Vue.js", image: "path/to/image5.png" },
          { name: "Node.js", image: "path/to/image6.png" },
          { name: "jQuery", image: "path/to/image7.png" },
          { name: "Java", image: "path/to/image8.png" },
          { name: "MariaDB", image: "path/to/image9.png" },
          { name: "Git", image: "path/to/image10.png" },
          { name: "Bootstrap", image: "path/to/image12.png" },
          { name: "Smarty", image: "path/to/image13.png" },
          { name: "Firebase", image: "path/to/image13.png" },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  section{
    padding: 5.5rem 4rem 9rem;
  }
  .skill-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-auto-rows: minmax(200px, auto);
    grid-gap: 20px;
  }
  
  .skill-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  
  .skill-image {
    max-width: 100%;
    max-height: 100%;
  }
  
  .skill-name {
    margin-top: 10px;
  }
  </style>
  