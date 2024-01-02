<script setup>

    import axios from "axios";
    import { ref, reactive, onMounted } from "vue";

    const changePassForm = reactive({
        oldPass: null,
        newPass: null,
        confirmNewPass: null
    })
    const snackbar = ref(false)
    const error = ref('')
    const user = ref(JSON.parse(localStorage.getItem('auth')))

    async function fetchStudentData() {
        const result = await axios.get(`http://localhost:5000/student/${user.value.id}`)
        localStorage.setItem('auth', JSON.stringify(result.data[0]))
        user.value = JSON.parse(localStorage.getItem('auth'))
        console.log(result)
    }

    async function changePass() {
        try {
            if(changePassForm.oldPass == user.value.password) {
                const result = await axios.put(`http://localhost:5000/student/change-password/${user.value.id}`, changePassForm)
                console.log(result)
                snackbar.value = true
                changePassForm.oldPass = null
                changePassForm.newPass = null
                changePassForm.confirmNewPass = null
            }
            else {
                error.value = 'di mao ang current password'
            }
        }
        catch(error) {
            console.log(error)
        }
    }

    onMounted(() => {
        fetchStudentData()
    })

</script>

<template>
    <v-card title="Change password">
        <v-card-item>
            <v-row>
                <v-col cols="6" class="text-end">Old password</v-col>
                <v-col cols="6">
                    <v-text-field variant="outlined" :error-messages="error" v-model="changePassForm.oldPass" density="comfortable" label=""></v-text-field>
                </v-col>
                <v-col cols="6" class="text-end">New password</v-col>
                <v-col cols="6">
                    <v-text-field variant="outlined" v-model="changePassForm.newPass" density="comfortable" label=""></v-text-field>
                </v-col>
                <v-col cols="6" class="text-end">Confirm new password</v-col>
                <v-col cols="6">
                    <v-text-field variant="outlined" v-model="changePassForm.confirmNewPass" density="comfortable" label=""></v-text-field>
                </v-col>
            </v-row>
        </v-card-item>
        <v-card-actions>
            <v-btn block color="blue" variant="flat" size="large" @click="changePass">Change password</v-btn>
        </v-card-actions>
        <v-snackbar v-model="snackbar">
            Successfully updated password
        </v-snackbar>
    </v-card>
</template>