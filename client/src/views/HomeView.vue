<template>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <Loader v-if="isLoading" class="offset-md-6" />
        <PostCard v-else v-for="post in data" :post="post" :key="post.id" />
    </div>
</template>

<script>
import { mapState } from "vuex";
import PostCard from "@/components/PostCard.vue";
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
    mounted() {
        this.$store.dispatch("posts");
    },
};
</script>
