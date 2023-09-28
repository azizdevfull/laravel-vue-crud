import PostService from "../service/posts";

const state = {
    data: null,
    isLoading: false,
    error: null,
    postDetail: null,
};

const mutations = {
    getPostsStart(state) {
        state.isLoading = true;
        state.error = null;
        state.data = null;
        state.postDetail = null;
    },
    getPostsSuccess(state, payload) {
        state.isLoading = false;
        state.data = payload;
    },
    getPostsFailure(state) {
        state.isLoading = false;
    },
};

const actions = {
    posts(context) {
        return new Promise((reslove) => {
            context.commit("getPostsStart");
            PostService.posts()
                .then((response) => {
                    context.commit("getPostsSuccess", response.data.data);
                    reslove(response.data.data);
                })
                .catch(() => context.commit("getPostsFailure"));
        });
    },
};

export default {
    state,
    mutations,
    actions,
};
