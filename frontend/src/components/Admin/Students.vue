<script setup>

    import axios from "axios"
    import {ref, reactive, onMounted} from 'vue'

    const selectedStudent = ref(null)
    const deleteStudentDialog = ref(false)
    const editStudentDialog = ref(false)
    const createStudentDialog = ref(false)
    const snackbar = ref(false)
    const msg = ref('')
    const students = ref(null)
    const registerForm = reactive({
        firstname: null,
        middlename: null,
        lastname: null,
        address: null,
        email: null,
        phone: null,
        birthday: null,
        course: null,
        role: 'student'
    })
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

    async function deleteStudent() {
        try {
            const result = await axios.delete(`http://localhost:5000/student/${selectedStudent.value.id}`)
            fetchAllStudents()
            snackbar.value = true
            msg.value = 'Deleted successfully'
            deleteStudentDialog.value = false
        }
        catch(error) {
            console.log(error)
        }
    }

    async function updateStudent() {
        try {
            const result = await axios.put(`http://localhost:5000/student/${selectedStudent.value.id}`, selectedStudent.value)
            fetchAllStudents()
            snackbar.value = true
            msg.value = 'Updated successfully'
            editStudentDialog.value = false
        }
        catch(error) {
            console.log(error)
        }
    }

    async function createStudent() {
        try {
            const result = await axios.post('http://localhost:5000/student', registerForm)
            fetchAllStudents()
            snackbar.value = true
            msg.value = 'Created successfully'
            createStudentDialog.value = false
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
                <v-col>Students</v-col>
                <v-col class="justify-end d-flex" cols="6">
                    <v-btn color="blue" @click="createStudentDialog = true">Add student</v-btn>
                </v-col>
            </v-row>
        </v-card-title>
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
        <v-dialog v-model="deleteStudentDialog" width="50%">
            <v-card title="Delete student">
                <v-card-item>
                    <v-alert icon="mdi-alert" color="red-lighten-3">
                        Are you sure you want to delete user <strong>{{ selectedStudent.firstname + ' ' + selectedStudent.lastname  }}</strong>?
                    </v-alert>
                </v-card-item>
                <v-card-actions>
                    <v-spacer/>
                    <v-btn @click="deleteStudentDialog = false">Close</v-btn>
                    <v-btn @click="deleteStudent">Delete</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-dialog v-model="editStudentDialog" width="80%">
            <v-card title="Edit student">
                <v-card-item>
                    <v-row class="mt-1">
                        <v-col cols="6">
                            <v-text-field variant="outlined" v-model="selectedStudent.firstname" density="comfortable" label="First name"></v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field variant="outlined" v-model="selectedStudent.middlename" density="comfortable" label="Middle name"></v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field variant="outlined" v-model="selectedStudent.lastname" density="comfortable" label="Last name"></v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field variant="outlined" v-model="selectedStudent.address" density="comfortable" label="Address"></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field variant="outlined" v-model="selectedStudent.email" density="comfortable" label="Email address"></v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field variant="outlined" v-model="selectedStudent.phone" density="comfortable" label="Phone number"></v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field variant="outlined" v-model="selectedStudent.birthday" type="date" density="comfortable" label="Birthday"></v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <v-select variant="outlined" :items="['BSIT', 'BEED', 'BSHM', 'BSED']" v-model="selectedStudent.course" density="comfortable" label="Course"></v-select>
                        </v-col>
                    </v-row>
                </v-card-item>
                <v-card-actions>
                    <v-spacer/>
                    <v-btn @click="editStudentDialog = false">Close</v-btn>
                    <v-btn @click="updateStudent">Update</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-dialog v-model="createStudentDialog" width="80%">
            <v-card title="Create student">
                <v-card-item>
                    <v-row class="mt-1">
                        <v-col cols="6">
                            <v-text-field variant="outlined" v-model="registerForm.firstname" density="comfortable" label="First name"></v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field variant="outlined" v-model="registerForm.middlename" density="comfortable" label="Middle name"></v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field variant="outlined" v-model="registerForm.lastname" density="comfortable" label="Last name"></v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field variant="outlined" v-model="registerForm.email" density="comfortable" label="Email address"></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field type="password" variant="outlined" density="comfortable" label="Password" v-model="registerForm.password"></v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field variant="outlined" v-model="registerForm.address" density="comfortable" label="Address"></v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field variant="outlined" v-model="registerForm.phone" density="comfortable" label="Phone number"></v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field variant="outlined" v-model="registerForm.birthday" type="date" density="comfortable" label="Birthday"></v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <v-select variant="outlined" :items="['BSIT', 'BEED', 'BSED', 'BSHM']" v-model="registerForm.course" density="comfortable" label="Course"></v-select>
                        </v-col>
                    </v-row>
                </v-card-item>
                <v-card-actions>
                    <v-spacer/>
                    <v-btn @click="createStudentDialog = false">Close</v-btn>
                    <v-btn @click="createStudent">Create</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-snackbar v-model="snackbar">
            {{ msg }}
        </v-snackbar>
    </v-card>
</template>