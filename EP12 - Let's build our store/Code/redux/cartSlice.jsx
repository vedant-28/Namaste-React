import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
				// Mutation of state is happening in reducers/ actions below:
        addItem: (state, action) => {
					state.items.push(action.payload);
				},
				removeItem: (state) => {
					state.items.pop();
				},
				clearCart: (state) => {
					state.items.length = 0;
				}
    },
});

// Structure of cartSlice object when returned:
// {
// 	actions: {
// 		addItem,
// 		removeItem,
// 		clearCart,
// 	},
// 	reducer,
// }

export default cartSlice.reducer;
export const { addItem, removeItem, clearCart } = cartSlice.actions;