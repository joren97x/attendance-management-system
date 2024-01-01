<script setup></script>

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