import { axiosGet } from "../shared/axiosFunctions";

export const getAll = async (page: number, quantityPerPage: number) => {
  const endpoint = `post?currentPage=${page}&quantityPerPage=${quantityPerPage}`;

  try {
    const response = await axiosGet(endpoint);
    return response;
  } catch (error: any) {
    const { response } = error;
    if (response.data) {
      return response.data;
    }
    return error;
  }
};

export const getBySlug = async (slug: string) => {
  try {
    const endpoint = `post/${slug}`;

    const response = await axiosGet(endpoint);

    return response;
  } catch (error: any) {
    const { response } = error;
    if (response.data) {
      return response.data;
    }
    return error;
  }
};
