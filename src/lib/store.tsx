import { configureStore } from '@reduxjs/toolkit'

//reducers
import { authReducer } from "@app/lib/Reducers/Auth";

export const makeStore = () => {
    return configureStore({
      reducer: {auth: authReducer}
    })
  }
  
  // Infer the type of makeStore
  export type AppStore = ReturnType<typeof makeStore>
  // Infer the `RootState` and `AppDispatch` types from the store itself
  export type RootState = ReturnType<AppStore['getState']>
  export type AppDispatch = AppStore['dispatch']