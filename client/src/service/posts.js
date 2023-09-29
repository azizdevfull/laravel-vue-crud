import axios from "./axios";

const PostService = {
    posts() {
        return axios.get("/posts");
    },
    createPost(post) {
        return axios.post("/posts/", post);
    },
};

export default PostService;
