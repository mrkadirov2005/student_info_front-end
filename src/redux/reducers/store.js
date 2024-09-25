import { configureStore ,getDefaultMiddleware} from '@reduxjs/toolkit'
import StudentReducer from "../../redux/reducers/student/add_student_reducer"
import TeacherReducer from "../../redux/reducers/teacher/add_teacher_reducer"
import GroupReducer from "../../redux/reducers/group/add_group_reducer"
import AdminDashBoard from "./admin_page_data/admin_page_data"
import ModalsReducer from "./modals_reducers/admin_page_data"
import settings from './settings/settings'
export const store = configureStore({
  reducer: {
    student:StudentReducer,
    teacher:TeacherReducer,
    group:GroupReducer,
    admin_page:AdminDashBoard,
    modals:ModalsReducer,
    settings:settings
  },
  // middleware: [
  //   ...getDefaultMiddleware({
  //     serializableCheck: false, // Allows non-serializable values
  //   }),
    
  // ],
})