import express from 'express'
import { storeStudent, destroyStudent, updateStudent, showStudent, allStudent, updatePass, login } from '../controllers/StudentController.js'
import { storeAttendance, showAttendance, allAttendance, updateAttendance, destroyAttendance, attendance } from '../controllers/AttendanceController.js'
import { storeAttendanceDate, getAttendanceDate } from '../controllers/AttendanceDateController.js'

const router = express.Router()

router.post('/student', storeStudent)
router.delete('/student/:id', destroyStudent)
router.put('/student/:id', updateStudent)
router.get('/student/:id', showStudent)
router.get('/student', allStudent)
router.put('/student/change-password/:id', updatePass)

router.post('/login', login)

router.get('/student-attendance/:id', attendance)
router.post('/attendance', storeAttendance)
router.post('/attendanceDate', storeAttendanceDate)
router.get('/attendanceDate', getAttendanceDate)
router.get('/attendance/:id', showAttendance)
router.get('/attendance', allAttendance)
router.put('/attendance/:id', updateAttendance)
router.delete('/attendance/:id', destroyAttendance)

export default router