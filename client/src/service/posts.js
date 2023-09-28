import axios from "./axios";

const PostService = {
    posts() {
        return axios.get("/posts");
    },
};

export default PostService;
