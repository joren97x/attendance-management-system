<script setup>

    import { ref, onMounted } from 'vue'
    import axios from 'axios'

    const createAttendanceDialog = ref(false)
    const date = ref(null)
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
            console.log(result)
            createAttendanceDialog.value = false
            snackbar.value = true
        }
        catch(error) {
            console.log(error)
        }
    }


    async function fetchAllStudents() {
        try {
            const result = await axios.get("http://localhost:5000/student")
            console.log(result)
            students.value = result.data
        }
        catch(error) {
            console.log(error)
        }
    }

    onMounted(() => {
        fetchAllStudents()
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
        </v-card-title>
        <v-data-table :headers="headers" :items="students" v-if="students">
            <template v-slot:item="{item}">
                <tr>
                    <td>{{ item.id }}</td>
                    <td>{{ item.firstname }}</td>
                    <td>{{ item.lastname }}</td>
                    <td>
                        <v-row>
                            <v-col cols="3">
                                <v-checkbox label="Present"></v-checkbox>
                            </v-col>
                            <v-col cols="3">
                                <v-checkbox label="Absent"></v-checkbox>
                            </v-col>
                            <v-col cols="3">
                                <v-checkbox label="Late"></v-checkbox>
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