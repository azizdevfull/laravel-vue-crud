<template>
    <div class="col">
      <div
        class="card shadow-none"
        style="border: none; border-radius: 0; box-shadow: none"
      >
        <svg
          class="bd-placeholder-img card-img-top"
          width="100%"
          height="225"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder: Thumbnail"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#55595c"></rect>
        </svg>
        <div class="card-body">
          <p class="card-title fw-bold">{{ post.title[$i18n.locale] }}</p>
          <p class="card-text">{{ post.body[$i18n.locale].slice(0, 250) }}</p>
          <div class="d-flex justify-content-between align-items-center card-footer">
            <div class="btn-group">
              <button type="button" class="btn btn-sm btn-outline-secondary">
                Read Post
              </button>
              <button
                @click="deletePostHandler"
                :disabled="isLoading"
                type="button"
                class="btn btn-sm btn-outline-danger"
              >
                Delete
              </button>
            </div>
            <small class="text-body-secondary">
              {{ new Date(post.created_at).toLocaleDateString("uzb") }}
            </small>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { mapState } from "vuex";
  
  export default {
    props: {
      post: {
        type: Object,
        required: true,
      },
      bodyLang: {
        type: String,
        required: true,
      },
      titleLang: {
        type: String,
        required: true,
      },
    },
    computed: {
      ...mapState({
        isLoading: (state) => state.control.isLoading,
      }),
    },
    methods: {
      deletePostHandler() {
        return this.$store
          .dispatch("deletePost", this.post.id)
          .then(() => this.$store.dispatch("posts"));
      },
    },
  };
  </script>
  
  <style></style>
  