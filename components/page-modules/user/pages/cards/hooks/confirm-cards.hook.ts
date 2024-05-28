import { useMutation } from "@tanstack/react-query";
import { cardsRequst } from "../data/cards.request";

export function useConfirmCards() {

    const query = useMutation({
        mutationKey: ["confirmCards"],
        mutationFn: cardsRequst.confirmCards,
    });

    return {
        isLoading: query.isLoading,
        isError: query.isError,
        isSuccess: query.isSuccess,
        data: query.data,
        mutateAsync: query.mutateAsync,
    }

}