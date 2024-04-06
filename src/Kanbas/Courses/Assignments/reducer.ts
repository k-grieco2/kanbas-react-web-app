import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    assignments: [] as any,
    assignment: { title: "New Assignment 123" },
  };

const assignmentSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    setAssignments: (state, action) => {
      state.assignments = action.payload;
    },
    addAssignment: (state, action) => {
      state.assignments = [
        { ...action.payload, _id: new Date().getTime().toString() },
          ...state.assignments,
      ];
    },
    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(
        (assignment: { _id: any; }) => assignment._id !== action.payload
      );
    },
    updateAssignment: (state, action) => {
      state.assignments = state.assignments.map((assignment: { _id: any; }) => {
        if (assignment._id === action.payload._id) {
          return action.payload;
        } else {
          return assignment;
        }
      });
    },
    setAssignment: (state, action) => {
      state.assignment = action.payload;
    },
  },
});

export const { addAssignment, deleteAssignment, 
  updateAssignment, setAssignment, setAssignments } = assignmentSlice.actions;
export default assignmentSlice.reducer;