import { createSlice } from "@reduxjs/toolkit";

export const toolSlice = createSlice({
    name: 'tool',
    initialState: {
        value: 'selection',
        index: 3
    },

    reducers: {
        changeTool: (state, action) => {
            state.value = action.payload;

            switch (action.payload) {
                case "rect":
                    state.index = 1;
                    break;
                case 'line':
                    state.index = 2;
                    break;
                case "selection":
                    state.index = 3;
                    break;

                case "pencil":
                    state.index = 4;
                    break;

                case "ellipse":
                    state.index = 5;
                    break;

                case "diamond":
                    state.index = 6;
                    break;

                case "text":
                    state.index = 7;
                    break;
            }
        }

    }
})


export const { changeTool, changeIndex } = toolSlice.actions;
export default toolSlice.reducer;