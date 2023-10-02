<template>
    <h1 class="text-center display-2">{{ $t('create_post') }}</h1>
    <div class="w-50 mx-auto">
        <form @submit.prevent>
            <Input
                type="text"
                label="Title"
                :placeholder="'Title'"
                v-model="title"
            />
            <Input
                type="text"
                label="Title En"
                :placeholder="'Title En'"
                v-model="en_title"
            />
            <TextArea
                type="text"
                label="Body"
                :placeholder="'Body'"
                v-model="body"
            />
            <TextArea
                type="text"
                label="Body En"
                :placeholder="'Body En'"
                v-model="en_body"
            />
            <Button @click="createPostHandler" :disabled="isLoading"
                >Create Article</Button
            >
        </form>
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
    data() {
        return {
            title: "",
            en_title: "",
            body: "",
            en_body: "",
        };
    },
    methods: {
        createPostHandler() {
            const post = {
                title: this.title,
                en_title: this.en_title,
                body: this.body,
                en_body: this.en_body,
            };
            this.$store.dispatch("createPost", post);
            this.$router.push("/");
        },
    },
    computed: {
        ...mapState({
            isLoading: (state) => state.control.isLoading,
        }),
    },
};
</script>
<style></style>
