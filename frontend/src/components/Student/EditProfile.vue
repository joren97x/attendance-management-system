<script setup>

    import axios from "axios";
    import { ref, onMounted } from "vue";

    const user = ref(JSON.parse(localStorage.getItem('auth')))
    const snackbar = ref(false)

    async function fetchStudentData() {
        const result = await axios.get(`http://localhost:5000/student/${user.value.id}`)
        localStorage.setItem('auth', JSON.stringify(result.data[0]))
        console.log(result)
    }

    async function updateProfile() {
        try {
            const result = await axios.put(`http://localhost:5000/student/${user.value.id}`, user.value)
            fetchStudentData()
            snackbar.value = true
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
    <v-card title="Edit profile">
        <v-card-item>
            <v-row class="mt-1">
                <v-col cols="6">
                    <v-text-field variant="outlined" v-model="user.firstname" density="comfortable" label="First name"></v-text-field>
                </v-col>
                <v-col cols="6">
                    <v-text-field variant="outlined" v-model="user.middlename" density="comfortable" label="Middle name"></v-text-field>
                </v-col>
                <v-col cols="6">
                    <v-text-field variant="outlined" v-model="user.lastname" density="comfortable" label="Last name"></v-text-field>
                </v-col>
                <v-col cols="6">
                    <v-text-field variant="outlined" v-model="user.address" density="comfortable" label="Address"></v-text-field>
                </v-col>
                <v-col cols="12">
                    <v-text-field variant="outlined" v-model="user.email" density="comfortable" label="Email address"></v-text-field>
                </v-col>
                <v-col cols="6">
                    <v-text-field variant="outlined" v-model="user.phone" density="comfortable" label="Phone number"></v-text-field>
                </v-col>
                <v-col cols="6">
                    <v-text-field variant="outlined" v-model="user.birthday" type="date" density="comfortable" label="Birthday"></v-text-field>
                </v-col>
                <v-col cols="6">
                    <v-select variant="outlined" :items="['BSIT', 'BEED', 'BSHM', 'BSED']" v-model="user.course" density="comfortable" label="Course"></v-select>
                </v-col>
                <v-col cols="6">
                    <v-btn block size="large" color="blue" @click="updateProfile">Save changes</v-btn>
                </v-col>
            </v-row>
        </v-card-item>
        <v-snackbar v-model="snackbar">
            Updated profile!
        </v-snackbar>
    </v-card>
</template>