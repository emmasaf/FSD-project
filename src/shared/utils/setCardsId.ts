import {CardType} from "../types";

export const setCardsId = (cards: CardType[]) => {
    return cards.map((item:CardType) => {
        return {...item, id: item.url?.match(/\/people\/(\d+)\//)?.[1] || '1'}
    });
}