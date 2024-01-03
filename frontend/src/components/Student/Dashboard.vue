<script setup>

    import {ref, onMounted} from 'vue'
    import axios from 'axios'
    import {format} from 'date-fns'

    const user = ref(JSON.parse(localStorage.getItem('auth')))
    const snackbar = ref(false)

    const attendances = ref(null)
    const headers = [
        {title: 'Name'},
        {title: 'Date'},
        {title: 'Status'},
    ]

    async function getAttendance() {
        try {
            console.log(user.value.id)
            const result = await axios.get(`http://localhost:5000/attendance/${user.value.id}`)
            console.log(result)
            attendances.value = result.data

        }
        catch(error) {
            console.log(error)
        }
    }

    onMounted(() => {
        getAttendance()
    })

</script>

<template>
    <v-card title="Student status">
        <v-data-table :headers="headers" :items="attendances" v-if="attendances">
            <template v-slot:item="{ item }">
                <tr>
                    <td>{{ item[1].firstname + ' ' +item[1].middlename + ' ' + item[1].lastname }}</td>
                    <td>{{ format(new Date(item[0].date), 'PP') }}</td>
                    <td>{{ item[0].status }}</td>
                </tr>
            </template>
        </v-data-table>
    </v-card>
</template>