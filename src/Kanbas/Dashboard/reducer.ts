import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courses: [] as any,
  course: { name: "New Course", number: "New Number" },
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setCourses: (state, action) => {
      state.courses = action.payload;
    },
    addCourse: (state, action) => {
      state.courses = [
        { ...action.payload, _id: new Date().getTime().toString() },
          ...state.courses,
      ];
    },
    deleteCourse: (state, action) => {
      state.courses = state.courses.filter(
        (course: { _id: any; }) => course._id !== action.payload
      );
    },
    updateCourse: (state, action) => {
      state.courses = state.courses.map((course: { _id: any; }) => {
        if (course._id === action.payload._id) {
            return action.payload;
          } else {
            return course;
          }
        });
      },
      setCourse: (state, action) => {
        state.course = action.payload;
      },
    },
  });
  
  
  export const { addCourse, deleteCourse,
    updateCourse, setCourse, setCourses } = coursesSlice.actions;
  export default coursesSlice.reducer;