import axios from "axios";

const BASE_URL_DEV = "http://localhost:2890";
const BASE_URL_PROD = "";

const apiBase = axios.create({
    baseURL: BASE_URL_DEV,
});

export const fetchMenuCategory = async () => {
    const response = await apiBase.get("/categories/all");
    return response;
};

export const fetchMenu = async (query: string) => {
    const response = await apiBase.get("/products/all", { params: { category: query } });
    return response;
};