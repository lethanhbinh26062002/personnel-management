import instance from "./config";

export const getAll = () => {
    const url = `/personnel`;
    return instance.get(url);
};
export const get = (id) => {
    const url = `/personnel/${id}`;
    return instance.get(url);
};
export const add = (post) => {
    const url = `/personnel`;
    return instance.post(url, post);
};
export const remove = (id) => {
    const url = `/personnel/${id}`;
    return instance.delete(url);
};
export const update = (post) => {
    const url = `/personnel/${post.id}`;
    return instance.put(url, post);
};