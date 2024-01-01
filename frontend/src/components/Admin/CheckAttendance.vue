<script setup>

    const headers = [
        {title: 'ID'},
        {title: 'First name'},
        {title: 'Last name'},
        {title: 'Status'},
    ]

</script>

<template>
    <v-card title="Check attendance">
        <v-data-table :headers="headers"></v-data-table>
    </v-card>
</template>