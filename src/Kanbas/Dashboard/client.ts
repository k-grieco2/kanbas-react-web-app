import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;
const COURSES_API = `${API_BASE}/api/courses`;
export const updateCourse = async (course: any) => {
    const response = await axios.put(`${COURSES_API}/${course._id}`, course);
    return response.data;
  };
  export const findAllCourses = async () => {
    const response = await axios.get(`${COURSES_API}`);
    return response.data;
  };
  export const createCourse = async (course: any) => {
    const response = await axios.post(`${COURSES_API}`, course);
    return response.data;
  };
  export const deleteCourse = async (courseId: any) => {
    const response = await axios.delete(
      `${COURSES_API}/${courseId}`);
    return response.data;
  };
  export const findCourseById = async (id: string) => {
    const response = await axios.get(`${COURSES_API}/${id}`);
    return response.data;
  };