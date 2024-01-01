<script setup>

    const headers = [
        {title: 'Student id'},
        {title: 'Name'},
        {title: 'Date'},
        {title: 'Status'},
        {title: 'Actions'},
    ]

</script>

<template>
    <v-card title="Attendance history">
        <v-data-table :headers="headers"></v-data-table>
    </v-card>
</template>