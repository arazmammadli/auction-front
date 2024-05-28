import { ICard } from "../data/cards.type";

export const onChangeCardStatus = (cards: ICard[], id: string) =>
    cards.map((card) => ({
        ...card,
        status: card.public_token === id && card.status === false ? true : false
    }));