import { useMutation } from "@tanstack/react-query";
import { cardsRequst } from "../data/cards.request";
import { useCardsStore } from "../data/cards.store";

export function useActivateCards() {

    const cardsState = useCardsStore((state) => ({
        onChangeStatus: state.onChaneStatus
    }));

    const query = useMutation({
        mutationKey: ["activateCards"],
        mutationFn: cardsRequst.cardsActivate,
        onSuccess: (_, variables) => {
            cardsState.onChangeStatus(variables)
            
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