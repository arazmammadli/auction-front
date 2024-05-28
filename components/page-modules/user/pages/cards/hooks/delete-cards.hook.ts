import { useMutation, useQueryClient } from "@tanstack/react-query";
import { cardsRequst } from "../data/cards.request";

export function useDeleteCards() {
    const queryClient = useQueryClient();

    const query = useMutation({
        mutationKey: ["deleteCards"],
        mutationFn: cardsRequst.deleteCards,
        onSuccess: () => {
            queryClient.invalidateQueries(["getCards"])
        }
    });

    return {
        isLoading: query.isLoading,
        isError: query.isError,
        isSuccess: query.isSuccess,
        data: query.data,
        mutateAsync: query.mutateAsync,
    };
};