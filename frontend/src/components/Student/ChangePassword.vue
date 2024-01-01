<script setup>

    import axios from "axios";
    import { ref, onMounted } from "vue";

    const user = ref(JSON.parse(localStorage.getItem('auth')))

    async function fetchStudentData() {
        const result = await axios.get(`http://localhost:5000/student/${user.value.id}`)
        console.log(result)
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
                    <v-text-field variant="outlined" density="comfortable" label=""></v-text-field>
                </v-col>
                <v-col cols="6" class="text-end">New password</v-col>
                <v-col cols="6">
                    <v-text-field variant="outlined" density="comfortable" label=""></v-text-field>
                </v-col>
                <v-col cols="6" class="text-end">Confirm new password</v-col>
                <v-col cols="6">
                    <v-text-field variant="outlined" density="comfortable" label=""></v-text-field>
                </v-col>
            </v-row>
        </v-card-item>
        <v-card-actions>
            <v-btn block color="blue" variant="flat" size="large">Change password</v-btn>
        </v-card-actions>
    </v-card>
</template>