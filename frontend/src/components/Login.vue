<script setup></script>

<template>

    <v-container>
        <p class="text-center text-h3 my-6">Student Attendance Management System</p>
        <v-card class="py-6" width="50%" style="margin: auto;">
            <v-card-title class="text-center text-h4 my-4">LOGIN</v-card-title>
            <v-card-item>
                <v-text-field class="mt-2" label="Email address" density="comfortable" variant="outlined"></v-text-field>
                <v-text-field label="Password" density="comfortable" variant="outlined"></v-text-field>
            </v-card-item>
            <v-card-actions>
                <v-btn block color="blue" variant="flat">Login</v-btn>
            </v-card-actions>
            <p class="text-center mb-5">Not registered?  <router-link to="/register">Create an account</router-link> </p>
        </v-card>
    </v-container>
    
</template>