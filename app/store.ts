import { configureStore } from "@reduxjs/toolkit";
import selfPublishReducer from "@/Redux/self-publish/self-publish-slice";

export const store = configureStore({
  reducer: {
    selfPublish: selfPublishReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
