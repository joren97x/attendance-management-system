<script setup>

    const headers = [
        {title: 'Name'},
        {title: 'Date'},
        {title: 'Status'},
    ]

</script>

<template>
    <v-card title="Student status">
        <v-data-table :headers="headers"></v-data-table>
    </v-card>
</template>