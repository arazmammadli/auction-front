import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { ICard } from "./cards.type";
import { onChangeCardStatus } from "../lib/lib.zustand";
import { initialCardState } from './cards.repository';

export type CardsStoreTypes = {
    cards: ICard[];
    availableCard: ICard;
    setAvailableCard: (card: ICard) => void;
};

type CardsStoreActions = {
    setCards: (cards: CardsStoreTypes["cards"]) => void;
    onChaneStatus: (id: string) => void;
};

export const useCardsStore = create(
    persist<CardsStoreTypes & CardsStoreActions>(
        (set, get) => ({
            cards: [],
            availableCard: initialCardState,
            setCards: (cards) => {
                set({ cards });
            },
            onChaneStatus: (id) => {
                const cardsState = get().cards;
                set({ cards: onChangeCardStatus(cardsState, id) });
            },
            setAvailableCard: (availableCard) => {
                set({ availableCard });
            }
        }),
        {
            name: "cards-storage",
            storage: createJSONStorage(() => localStorage)
        }
    )
);