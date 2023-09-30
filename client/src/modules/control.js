import PostService from "../service/posts";

const state = {
    isLoading: false,
};

const mutations = {
    controlPostStart(state) {
        state.isLoading = true;
    },
    controlPostSuccess(state) {
        state.isLoading = false;
    },
    controlPostFailure(state) {
        state.isLoading = false;
    },
};

const actions = {
    createPost(context, post) {
        return new Promise(() => {
            context.commit("controlPostStart");
            PostService.createPost(post)
                .then(() => {
                    context.commit("controlPostSuccess");
                })
                .catch(() => {
                    context.commit("controlPostFailure");
                });
        });
    },
    deletePost(context, id) {
        return new Promise((resolve) => {
            context.commit("controlPostStart");
            PostService.deletePost(id)
                .then(() => {
                    context.commit("controlPostSuccess");
                    resolve();
                })
                .catch(() => {
                    context.commit("controlPostFailure");
                });
        });
    },
};

export default {
    state,
    mutations,
    actions,
};
