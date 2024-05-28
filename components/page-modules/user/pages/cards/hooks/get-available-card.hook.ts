import { useQuery } from "@tanstack/react-query";
import { useCardsStore } from "../data/cards.store";
import { cardsRequst } from "../data/cards.request";

export function useGetAvailableCard(data: {
    aggId: number;
}) {
    const cardsState = useCardsStore((state) => ({
        setAvailableCard: state.setAvailableCard
    }));

    const query = useQuery(["getAvailableCards", data], () => cardsRequst.getAvailableCard(data.aggId), {
        onSuccess: (data) => {
            if (data) {
                cardsState.setAvailableCard(data)
            }
        },
        retry: false,
        refetchOnWindowFocus: false,
        refetchOnMount: false
    });

    return {
        isLoading: query.isLoading,
        isError: query.isError,
        isSuccess: query.isSuccess,
        data: query.data,
        query
    }
}