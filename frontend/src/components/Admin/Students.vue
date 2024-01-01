<script setup>

    import axios from "axios"
    import {ref, onMounted} from 'vue'

    const selectedStudent = ref(null)
    const deleteStudentDialog = ref(false)
    const editStudentDialog = ref(false)
    const students = ref(null)
    const headers = [
        {title: 'ID'},
        {title: 'Name'},
        {title: 'Adress'},
        {title: 'Course'},
        {title: 'Phone number'},
        {title: 'Email'},
        {title: 'Actions'},
    ]

    function showDeleteStudentDialog(student) {
        selectedStudent.value = student
        deleteStudentDialog.value = true
    }

    function showEditStudentDialog(student) {
        selectedStudent.value = student
        editStudentDialog.value = true
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
    <v-card title="Students">
        <v-data-table :headers="headers" :items="students" v-if="students">
            <template v-slot:item="{item}">
                <tr>
                    <td>{{ item.id }}</td>
                    <td>{{ item.firstname + " " + item.middlename + " " + item.lastname }}</td>
                    <td>{{ item.address }}</td>
                    <td>{{ item.course }}</td>
                    <td>{{ item.phone }}</td>
                    <td>{{ item.email }}</td>
                    <td>
                        <v-btn icon="mdi-square-edit-outline" size="small" @click="showEditStudentDialog(item)" variant="text" color="blue"></v-btn>
                        <v-btn icon="mdi-delete-empty-outline" size="small" @click="showDeleteStudentDialog(item)" variant="text" color="red"></v-btn>
                    </td>
                </tr>
            </template>
        </v-data-table>
        <v-dialog v-model="deleteStudentDialog">
            <v-card title="Delete student">
                <v-card-actions>
                    <v-spacer/>
                    <v-btn @click="deleteStudentDialog = false">Close</v-btn>
                    <v-btn>Delete</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-dialog v-model="editStudentDialog">
            <v-card title="Edit student">
                <v-card-actions>
                    <v-spacer/>
                    <v-btn @click="editStudentDialog = false">Close</v-btn>
                    <v-btn>Update</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-card>
</template>