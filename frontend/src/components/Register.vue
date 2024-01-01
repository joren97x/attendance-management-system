<script setup>

    import {reactive} from 'vue'
    import axios from 'axios'
    import router from '@/router';

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

    async function register() {
        try {
            const result = await axios.post('http://localhost:5000/student', registerForm)
            console.log(result)
            router.push('/login')
        }
        catch(error) {
            console.log(error)
        }
    }

</script>

<template>

    <v-container>
        <p class="text-center text-h3 my-6">Student Attendance Management System</p>
        <v-card class="py-6" width="80%" style="margin: auto;">
            <v-card-title class="text-center text-h4">REGISTER</v-card-title>
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
                <v-btn block color="blue" variant="flat" @click="register">Register</v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
    
</template>