import axios from "./axios";

const PostService = {
    posts() {
        return axios.get("/posts");
    },
    createPost(post) {
        return axios.post("/posts/", post);
    },
    deletePost(id) {
        return axios.delete("/posts/" + id);
    }
};

export default PostService;
