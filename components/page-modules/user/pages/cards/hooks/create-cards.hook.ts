import { useMutation } from "@tanstack/react-query";
import { cardsRequst } from "../data/cards.request";

export function useCreateCards() {

    const query = useMutation({
        mutationKey: ["createCards"],
        mutationFn: cardsRequst.createCards
    });

    return {
        isLoading: query.isLoading,
        isError: query.isError,
        isSuccess: query.isSuccess,
        data: query.data,
        mutateAsync: query.mutateAsync,
    };
}