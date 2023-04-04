<template>
  <main>
      <HomeContent />
  </main>
</template>

<script>
// @ is an alias to /src
import HomeContent from "@/components/HomeContent.vue";

export default {
  name: "HomeView",
  components: {
    HomeContent
},
};
</script>
