import instance from "../instanse";

export const getPizzas = async () => {
  return await instance.get("/pizza/catalog");
};
