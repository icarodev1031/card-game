import { createSlice } from '@reduxjs/toolkit'

export const cardGame = createSlice({
    name: 'cardGameState',
    initialState: {
        player1: '',
        player2: '',
    },
    reducers: {
        chosenCardsForPlayers: (state) => {
            const numTag = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
            const tagsForPlayer1 = ["H", "D", "S", "C"];
            const numberForPlayer1 = Math.random() * 13;
            const tagNameForPlayer1 = Math.random() * 4;
            state.player1 = numTag[Math.floor(numberForPlayer1) - 1] + tagsForPlayer1[tagNameForPlayer1 == 4 ? 3 : Math.floor(tagNameForPlayer1)];
            tagsForPlayer1.splice(Math.floor(tagNameForPlayer1), 1);
            const tagsForPlayer2 = tagsForPlayer1;
            const tagNameForPlayer2 = Math.random() * 3;
            const numberForPlayer2 = Math.random() * 13;
            state.player2 = numTag[Math.floor(numberForPlayer2)] + tagsForPlayer2[tagNameForPlayer2 == 3 ? 2 : Math.floor(tagNameForPlayer2)];
        }
    },
})

// Action creators are generated for each case reducer function
export const { chosenCardsForPlayers } = cardGame.actions

export default cardGame.reducer;