<script setup>

    const headers = [
        {title: 'ID'},
        {title: 'First name'},
        {title: 'Last name'},
        {title: 'Email'},
        {title: 'Actions'},
    ]

</script>

<template>
    <v-card title="Students">
        <v-data-table :headers="headers"></v-data-table>
    </v-card>
</template>