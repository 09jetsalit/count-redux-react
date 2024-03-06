import { createStore } from "redux";
import counter from "./reducer/reducer";

export const counterStore = createStore(counter)