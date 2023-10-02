<template>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      <Loader v-if="isLoading" class="offset-md-6" />
      <PostCard v-else v-for="post in data" :post="post" :key="post.id" />

    </div>
  </template>
  
  <script>
  import { mapState } from "vuex";
  import PostCard from "@/components/PostCard.vue";
  import { useI18n } from "vue-i18n";
  
  export default {
    computed: {
      ...mapState({
        data: (state) => state.posts.data,
        isLoading: (state) => state.posts.isLoading,
        error: (state) => state.posts.error,
      }),
    },
    components: {
      PostCard,
    },
    setup() {
      const { t, locale } = useI18n({ useScope: "global" });
      return { t, locale };
    },
    methods: {
      switchLang() {
        const newLocale = this.locale === "en" ? "uz" : "en";
        this.$i18n.locale = newLocale;
        localStorage.setItem("lang", newLocale);
      },
    },
    mounted() {
      this.$store.dispatch("posts");
    },
  };
  </script>
  