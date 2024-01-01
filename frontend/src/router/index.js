import { createRouter, createWebHistory } from "vue-router"

import AuthLayout from '../components/Layouts/AuthLayout.vue'
import StudentLayout from '../components/Layouts/StudentLayout.vue'
import AdminLayout from '../components/Layouts/AdminLayout.vue'

const router = createRouter({
    history: createWebHistory(null),
    routes: [
        {
            path: '/',
            component: () => import('../components/Student/Dashboard.vue'),
            name: 'Test',
            meta: {layout: StudentLayout}
        },
        {
            path: '/login',
            component: () => import('../components/Login.vue'),
            name: 'Login',
            meta: {layout: AuthLayout}
        },
        {
            path: '/register',
            component: () => import('../components/Register.vue'),
            name: 'Register',
            meta: {layout: AuthLayout}
        },
        {
            path: '/student/dashboard',
            component: () => import('../components/Student/Dashboard.vue'),
            name: 'Dashboard',
            meta: {layout: StudentLayout}
        },
        {
            path: '/student/change-password',
            component: () => import('../components/Student/ChangePassword.vue'),
            name: 'StudentChangePassword',
            meta: {layout: StudentLayout}
        },
        {
            path: '/student/edit-profile',
            component: () => import('../components/Student/EditProfile.vue'),
            name: 'EditProfile',
            meta: {layout: StudentLayout}
        },
        {
            path: '/admin/change-password',
            component: () => import('../components/Admin/ChangePassword.vue'),
            name: 'AdminChangePassword',
            meta: {layout: AdminLayout}
        },
        {
            path: '/admin/check-attendance',
            component: () => import('../components/Admin/CheckAttendance.vue'),
            name: 'CheckAttendance',
            meta: {layout: AdminLayout}
        },
        {
            path: '/admin/students',
            component: () => import('../components/Admin/Students.vue'),
            name: 'Students',
            meta: {layout: AdminLayout}
        },
        {
            path: '/admin/attendance-history',
            component: () => import('../components/Admin/AttendanceHistory.vue'),
            name: 'AttendanceHistory',
            meta: {layout: AdminLayout}
        },
    ]
})

export default router