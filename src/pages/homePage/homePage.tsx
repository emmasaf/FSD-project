import {CardsContainer} from "../../widgets";
import {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../shared/redux";
import fetchCharacters from "./api/fetchCharacters.ts";
import {CardType} from "../../shared/types";
import {getCardsDataFromLocalStorage,mergeCardsData} from "../../shared/utils";
import {Header} from "../../shared/ui";

export const HomePage = ()=>{
    const dispatch = useAppDispatch();
    const { cards, searchString, status, page, error } = useAppSelector((state) => state.characters);
    const [filteredCardsData, setFilteredCardsData] = useState<CardType[]>([]);

    useEffect(() => {
        dispatch(fetchCharacters({page, search: searchString || ''}));
    }, [dispatch, page, searchString]);

    useEffect(() => {
        const cardsData = getCardsDataFromLocalStorage();
        const updatedCards = mergeCardsData(cards, cardsData);
        setFilteredCardsData(updatedCards);
    }, [cards]);

    return(
        <div>
            <Header hasSearch/>
            <CardsContainer cards={filteredCardsData} status={status} error={error} />
        </div>
    )
}
