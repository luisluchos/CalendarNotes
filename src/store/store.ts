import { configureStore } from '@reduxjs/toolkit'
import { calendarSlice } from './calendar/calendarSlice';
import { authSlice } from './auth/authSlice';
import { uiSlice } from './ui/uiSlice';

export const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    calendar: calendarSlice.reducer,
    auth:authSlice.reducer
  },
  middleware:(getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck :false // para que o salte el error de las fechas serializable en redux
  })
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch