<script setup>

    import {ref, onMounted} from 'vue'
    import {format} from 'date-fns'
    import axios from 'axios'

    const deleteAttendanceDialog = ref(false)
    const snackbar = ref(false)
    const selected = ref(null)
    const attendances = ref(null)
    const headers = [
        {title: 'Id'},
        {title: 'Name'},
        {title: 'Date'},
        {title: 'Status'},
        {title: 'Actions'},
    ]

    async function getAllAttendance() {
        const result = await axios.get("http://localhost:5000/attendance")
        attendances.value = result.data
    }

    function showDeleteAttendance(attendance) {
        selected.value = attendance
        deleteAttendanceDialog.value = true
    }

    async function deleteAttendance() {
        try {
            const result = await axios.delete(`http://localhost:5000/attendance/${selected.value[0].id}`)
            console.log(result)
            snackbar.value = true
            deleteAttendanceDialog.value = false
            getAllAttendance()
        }
        catch(error) {
            console.log(error)
        }
    }

    onMounted(() => {
        getAllAttendance()
    })

</script>

<template>
    <v-card title="Attendance history">
        <v-data-table :headers="headers" v-if="attendances" :items="attendances">
            <template v-slot:item="{ item }">
                <tr>
                    <td>{{ item[0].id }}</td>
                    <td>{{ item[1].firstname + ' ' + item[1].middlename + ' ' + item[1].lastname }}</td>
                    <td>{{ format(new Date(item[0].date), 'PP') }}</td>
                    <td>{{ item[0].status }}</td>
                    <td>
                        <v-btn icon="mdi-delete-empty-outline" variant="text" color="red" size="small" @click="showDeleteAttendance(item)"></v-btn>
                    </td>
                </tr>
            </template>
        </v-data-table>
        <v-dialog v-model="deleteAttendanceDialog">
            <v-card title="Delete attendance">
                <v-card-item>
                    <v-alert icon="mdi-alert" color="red-lighten-3">
                        Are you sure you want to delete this attendance? It cannot be undone.
                    </v-alert>
                    Student
                    <p> {{ selected[1].firstname + ' ' + selected[1].lastname }} </p>
                    Attendance status
                    <v-chip> {{ selected[0].status }} </v-chip>
                    <br>
                    Attendance date
                    <p> {{ format(new Date(selected[0].date), 'PP') }} </p>
                </v-card-item>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn @click="deleteAttendanceDialog = false">Close</v-btn>
                    <v-btn @click="deleteAttendance" variant="text" color="red">Delete</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-snackbar v-model="snackbar">
            Attendance deleted
        </v-snackbar>
    </v-card>
</template>