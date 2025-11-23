import { configureStore } from "@reduxjs/toolkit";
import selfPublishReducer from "@/Redux/self-publish/self-publish-slice";
import designBookReducer from "@/Redux/design-book/design-book-slice";

export const store = configureStore({
  reducer: {
    selfPublish: selfPublishReducer,
    designBook: designBookReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
