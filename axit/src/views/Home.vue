<template>
  <div class="home-wrapper">
    <div class="hdr">
      <HeaderContent />
      <HeaderSocial />
    </div>
    <main class="main">
      <MainTabs />
      <MainSubList />
      <MainStandardPic />
      <MainAwesome />
      <MainPricing />
      <MainCustomers />
      <MainStylish />
      <MainContact />
    </main>
    <AFooter />
  </div>
</template>

<script>
import HeaderContent from '@/components/HeaderContent';
import HeaderSocial from '@/components/HeaderSocial';
import MainTabs from '@/components/MainTabs';
import MainSubList from '@/components/MainSubList';
import MainStandardPic from '@/components/MainStandardPic';
import MainAwesome from '@/components/MainAwesome';
import MainPricing from '@/components/MainPricing';
import MainCustomers from '@/components/MainCustomers';
import MainStylish from '../components/MainStylish.vue';
import MainContact from '../components/MainContact.vue';
import AFooter from '../components/AFooter.vue';

export default {
  name: 'Home',
  components: {
    HeaderContent,
    HeaderSocial,
    MainTabs,
    MainSubList,
    MainStandardPic,
    MainAwesome,
    MainPricing,
    MainCustomers,
    MainStylish,
    MainContact,
    AFooter
  }
};
</script>
