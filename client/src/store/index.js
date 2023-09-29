import { createStore } from "vuex";
import posts from "../modules/posts";
import control from "../modules/control";
const store = createStore({
    state: {},
    mutations: {},
    actions: {},
    modules: { posts, control },
});

export default store;
