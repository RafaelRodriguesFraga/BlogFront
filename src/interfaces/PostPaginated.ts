import Post from "./Post";

interface PostPaginated {
    currentPage: number;
    quantityPerPage: number;
    totalPages: number;
    data: Post[];
}

export default PostPaginated;