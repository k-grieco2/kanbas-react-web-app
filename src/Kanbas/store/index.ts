import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../Courses/Modules/reducer";
import assignmentsReducer from "../Courses/Assignments/reducer";
import coursesReducer from "../Dashboard/reducer";
export interface KanbasState {
  modulesReducer: {
    modules: any[];
    module: any;
  };
  assignmentsReducer: {
    assignments: any[];
    assignment: any;
  };
  coursesReducer: {
    courses: any[];
    course: any;
  };
}

const store = configureStore({
  reducer: {
    modulesReducer,
    assignmentsReducer,
    coursesReducer,
  },
});


export default store;