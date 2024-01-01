<script setup></script>

<template>

    <v-container>
        <p class="text-center text-h3 my-6">Student Attendance Management System</p>
        <v-card class="py-6" width="80%" style="margin: auto;">
            <v-card-title class="text-center text-h4 my-4">REGISTER</v-card-title>
            <v-card-item>
                <v-row class="mt-1">
                    <v-col cols="6">
                        <v-text-field variant="outlined" density="comfortable" label="First name"></v-text-field>
                    </v-col>
                    <v-col cols="6">
                        <v-text-field variant="outlined" density="comfortable" label="Middle name"></v-text-field>
                    </v-col>
                    <v-col cols="6">
                        <v-text-field variant="outlined" density="comfortable" label="Last name"></v-text-field>
                    </v-col>
                    <v-col cols="6">
                        <v-text-field variant="outlined" density="comfortable" label="Address"></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-text-field variant="outlined" density="comfortable" label="Email address"></v-text-field>
                    </v-col>
                    <v-col cols="6">
                        <v-text-field variant="outlined" density="comfortable" label="Phone number"></v-text-field>
                    </v-col>
                    <v-col cols="6">
                        <v-text-field variant="outlined" type="date" density="comfortable" label="Birthday"></v-text-field>
                    </v-col>
                    <v-col cols="6">
                        <v-select variant="outlined" density="comfortable" label="Course"></v-select>
                    </v-col>
                </v-row>
            </v-card-item>
            <v-card-actions>
                <v-btn block color="blue" variant="flat">Login</v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
    
</template>