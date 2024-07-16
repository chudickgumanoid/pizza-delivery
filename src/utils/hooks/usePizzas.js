import { useQuery } from "@tanstack/vue-query";
import { getPizzas } from "../api/requests/pizza";

export const usePizzas = () => {
  return useQuery({
    queryKey: ["pizzas"],
    queryFn: getPizzas,
    select: (data) => data.data,
  });
};
