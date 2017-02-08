<template>
  <div>
    <header-section></header-section>
    <navigation-section></navigation-section>
    <villa-section></villa-section>
    <dream-section></dream-section>
    <second-section></second-section>
    <footer-section></footer-section>
  </div>
</template>

<script>
import HeaderSection from '../components/HeaderSection';
import NavigationSection from '../components/NavigationSection';
import VillaSection from '../components/VillaSection';
import DreamSection from '../components/DreamSection';
import SecondSection from '../components/SecondSection';
import FooterSection from '../components/FooterSection';

export default {
  name: 'TopPage',
  components: {
    HeaderSection,
    NavigationSection,
    VillaSection,
    DreamSection,
    SecondSection,
    FooterSection,
  },
};
</script>

<style>
</style>
