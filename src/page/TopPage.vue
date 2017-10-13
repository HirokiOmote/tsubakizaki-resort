<template>
  <div>
    <header-section></header-section>
    <navigation-section></navigation-section>
    <villa-section></villa-section>
    <second-section></second-section>
    <dream-section></dream-section>
    <blog-section></blog-section>
    <footer-section></footer-section>
  </div>
</template>

<script>
import AOS from 'aos';
import HeaderSection from '../components/HeaderSection';
import NavigationSection from '../components/NavigationSection';
import SecondSection from '../components/SecondSection';
import VillaSection from '../components/VillaSection';
import DreamSection from '../components/DreamSection';
import BlogSection from '../components/BlogSection';
import FooterSection from '../components/FooterSection';

export default {
  name: 'TopPage',
  components: {
    HeaderSection,
    NavigationSection,
    VillaSection,
    DreamSection,
    SecondSection,
    BlogSection,
    FooterSection,
  },

  mounted() {
    this.AOSinit();
  },

  methods: {
    AOSinit() {
      new AOS.init({
        once: true,
        delay: 300,
        duration: 700,
      });
    },
  },
};
</script>

<style src="aos/dist/aos.css"></style>
