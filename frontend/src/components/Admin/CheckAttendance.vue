<script setup>

    import { ref, onMounted } from 'vue'
    import axios from 'axios'
    import {format} from 'date-fns'

    const createAttendanceDialog = ref(false)
    const currentAttendanceDate = ref(null)
    const date = ref(null)
    const statusCheckbox = ref(null)
    const attendanceRecord = ref(null)
    const snackbar = ref(false)
    const students = ref(null)
    const headers = [
        {title: 'ID'},
        {title: 'First name'},
        {title: 'Last name'},
        {title: 'Actions'},
    ]

    async function createAttendanceDate() {
        try {
            const result = await axios.post("http://localhost:5000/attendanceDate", {date: date.value})
            createAttendanceDialog.value = false
            snackbar.value = true
            await getAttendanceToday()
            await fetchAllStudents()
            await getAttendanceRecord()
        }
        catch(error) {
            console.log(error)
        }
    }


    async function fetchAllStudents() {
        try {
            const result = await axios.get(`http://localhost:5000/student`)
            students.value = result.data
        }
        catch(error) {
            console.log(error)
        }
    }

    async function getAttendanceToday() {
        try {
            const result = await axios.get("http://localhost:5000/attendanceDate")
            currentAttendanceDate.value = result.data
        }
        catch(error) {
            console.log(error)
        }
    }

    async function setAttendance(status, student) {
        try {
            await axios.post("http://localhost:5000/attendance",
            {
                attendance_date_id: currentAttendanceDate.value[0].id,
                user_id: student.id,
                date: currentAttendanceDate.value[0].date,
                status: status
            })
            await getAttendanceRecord()

        }
        catch(error) {
            console.log(error)
        }
    }

    const mappedValue = ref(new Map())
    async function getAttendanceRecord() {
        try {
            const result = await axios.get(`http://localhost:5000/attendance/${currentAttendanceDate.value[0].id}`);
            attendanceRecord.value = result.data;
            let r = result.data
            mappedValue.value = new Map(
                r.map(obj => {
                    const { user_id, attendance_date_id, id, date, status } = obj;
                    // Using `id` as the key and an array of other properties as the value
                    return [user_id, { attendance_date_id, id, date, status }];
                })
            )
        } catch (error) {
            console.error(error)
        }
    }

    function getAttendanceStatus(user_id, status) {
        const userAttendance = mappedValue.value.get(user_id)
        return userAttendance ? userAttendance.status === status : false;
    }


    onMounted(async () => {
        try {
            await getAttendanceToday()
            await fetchAllStudents()
            await getAttendanceRecord()
        } catch (error) {
            console.error('Error fetching attendance or students:', error)
            // Handle the error as needed
        }
})



</script>

<template>
    <v-card>
        <v-card-title>
            <v-row justify="space-between">
                <v-col>Check attendance</v-col>
                <v-col class="justify-end d-flex" cols="6">
                    <v-btn color="blue" @click="createAttendanceDialog = true">New attendance</v-btn>
                </v-col>
            </v-row>
            <br>
        </v-card-title>
        <v-card-text>
            Attendance for {{ currentAttendanceDate ? format(new Date(currentAttendanceDate[0].date), 'PPP') : '' }}
        </v-card-text>
        <v-data-table :headers="headers" :items="students" v-if="students">
            <template v-slot:item="{item}">
                <tr>
                    <td>{{ item.id }}</td>
                    <td>{{ item.firstname }}</td>
                    <td>{{ item.lastname }}</td>
                    <td>
                        <v-row v-if="attendanceRecord">
                            <v-col cols="3">
                                <v-checkbox :model-value="getAttendanceStatus(item.id, 'present')" label="Present" @click="setAttendance('present', item)"></v-checkbox>
                            </v-col>
                            <v-col cols="3">
                                <v-checkbox :model-value="getAttendanceStatus(item.id, 'absent')" label="Absent" @click="setAttendance('absent', item)"></v-checkbox>
                            </v-col>
                            <v-col cols="3">
                                <v-checkbox :model-value="getAttendanceStatus(item.id, 'late')" label="Late" @click="setAttendance('late', item)"> </v-checkbox>
                            </v-col>
                        </v-row>
                    </td>
                </tr>
            </template>
        </v-data-table>
        <v-dialog v-model="createAttendanceDialog" width="60%">
            <v-card title="New attendance">
                <v-card-item>
                    <v-alert icon="mdi-calendar-check" color="blue">
                        This will create a new attendance for the selected date. {{date}}
                    </v-alert>
                    <v-text-field type="date" label="Attendance date" v-model="date" variant="outlined" class="mt-6"></v-text-field>
                </v-card-item>
                <v-card-actions>
                    <v-spacer/>
                    <v-btn @click="createAttendanceDialog = false">Close</v-btn>
                    <v-btn @click="createAttendanceDate">Create</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-snackbar v-model="snackbar">
            Successfully created yoo
        </v-snackbar>
    </v-card>
</template>