import toolkit from "@reduxjs/toolkit"

const {configureStore, createSlice} = toolkit

//cara simpel ngegabungin reducer ama action
//reducer+actions
const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart(state, action) {
            state.push(action.payload)
        }
    }
})

const cartLogin = createSlice({
    name: "login",
    initialState: {status:false},
    reducers: {
        addCase(state,action){
            state.status=true
        }
    }
})


//store
const store = configureStore({
    reducer:{
        cart: cartSlice.reducer,
        login: cartLogin.reducer,
    }
})

//login
// const login = configureStore({
//     reducer:{
//         login: cartLogin.reducer,
//     }
// })

console.log("create store :", store.getState())

//subscribe
store.subscribe(() => {
    console.log("STORE_CHANGE :", store.getState())
})

// login.subscribe(() => {
//     console.log("login :", login.getState())
// })

//dispatch
// store.dispatch(cartSlice.actions.addToCart({id:10, qty:10}))
// store.dispatch(cartLogin.actions.addCase())

store.dispatch(cartLogin.actions.addCase())
store.dispatch(cartLogin.actions.addCase())
store.dispatch(cartSlice.actions.addToCart({id:3, qty:69}))