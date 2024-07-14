import { createSlice } from '@reduxjs/toolkit';
import {InitialsType} from "../../types/types.ts";
import fetchCharacters from "../../../pages/homePage/api/fetchCharacters.ts";
import {PAGINATION, STATUS} from "../../enums";
import {setCardsId} from "../../utils/setCardsId.ts";


const initialState = {
    cards: [],
    searchString:'',
    status: 'idle',
    error: null,
    page:1,
    total:10
} as InitialsType;

const charactersSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        changePage: (state, action) => {
            state.page = action.payload
        },
        changeSearchString: (state, action) => {
            state.searchString = action.payload || ''
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCharacters.pending, (state) => {
                state.status = STATUS.LOADING;
            })
            .addCase(fetchCharacters.fulfilled, (state, action) => {
                state.status = STATUS.SUCCESS;
                state.cards = setCardsId(action.payload.results)
                state.total = Math.ceil(action.payload.count / PAGINATION.COUNT );
            })
            .addCase(fetchCharacters.rejected, (state, action) => {
                state.status = STATUS.ERROR;
                state.error = action.error.message || null;
            });
    },
});
export const {changePage,changeSearchString} = charactersSlice.actions;
export const charactersReducer = charactersSlice.reducer;
