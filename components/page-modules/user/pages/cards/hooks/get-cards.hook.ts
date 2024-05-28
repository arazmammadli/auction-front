import { useQuery } from "@tanstack/react-query";
import { useCardsStore } from "../data/cards.store";
import { cardsRequst } from "../data/cards.request";

export function useGetCards() {
    const cardsState = useCardsStore((state) => ({
        setCards: state.setCards
    }));

    const query = useQuery(["getCards"], cardsRequst.getCards, {
        onSuccess: (data) => {
            if (data) {
                cardsState.setCards(data);
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