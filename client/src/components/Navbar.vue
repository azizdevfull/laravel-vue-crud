<template>
    <div class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
      <RouterLink
        :to="{ name: 'home' }"
        class="d-flex align-items-center link-body-emphasis text-decoration-none"
      >
        <VueIcon />
      </RouterLink>
  
      <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        <RouterLink
          :to="{ name: 'home' }"
          class="me-3 py-2 link-body-emphasis text-decoration-none"
        >Home</RouterLink>
        <RouterLink
          :to="{ name: 'create-post' }"
          class="me-3 py-2 link-body-emphasis text-decoration-none"
        >Create</RouterLink>
        
        <!-- Language selector -->
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="languageDropdown" data-bs-toggle="dropdown" aria-expanded="false">
            {{ locale }}
          </button>
          <ul class="dropdown-menu" aria-labelledby="languageDropdown">
            <li v-for="(lang, index) in supportedLanguages" :key="index">
              <a class="dropdown-item" @click="switchLang(lang)">{{ lang }}</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </template>
  
  <script>
  import { useI18n } from "vue-i18n";
  
  export default {
    setup() {
      const { t, locale } = useI18n({ useScope: "global" });
      
      // Define supported languages
      const supportedLanguages = ["en", "uz"]; // Add more languages as needed
      
      const switchLang = (newLocale) => {
        localStorage.setItem("lang", newLocale);
        document.location.reload(); // Reload the page to apply the new language
      };
      
      return { t, locale, supportedLanguages, switchLang };
    },
  };
  </script>
  
  <style></style>
  