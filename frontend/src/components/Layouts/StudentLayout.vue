<script setup>
    import {ref} from 'vue'
    import router from '@/router'

    const drawer = ref(true)
    const user = JSON.parse(localStorage.getItem('auth'))
    function logout() {
        localStorage.removeItem('auth')
        router.push('/login')
    }

</script>

<template>
        
    <v-layout>
        <v-navigation-drawer v-model="drawer">
            <p class="text-h5 text-center my-4"> Welcome back! </p>
            <v-divider></v-divider>
            <v-list nav>
                <router-link to="/student/dashboard" style="text-decoration: none;">
                    <v-list-item prepend-icon="mdi-view-dashboard" class="text-black" title="Dashboard" value="myfiles"></v-list-item>
                </router-link>
                <router-link to="/student/change-password" style="text-decoration: none;">
                    <v-list-item prepend-icon="mdi-lock-open" class="text-black" title="Change password" value="shared"></v-list-item>
                </router-link>
                <router-link to="/student/edit-profile" style="text-decoration: none;">
                    <v-list-item prepend-icon="mdi-account-edit" class="text-black" title="Edit profile" value="starred"></v-list-item>
                </router-link>
            </v-list>
        </v-navigation-drawer>

        <v-main style="height: 100vh" class="bg-grey-lighten-3">
            <v-toolbar color="white">
                <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
                <v-toolbar-title>Title</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-menu>
                    <template v-slot:activator="{ props }">
                        <v-btn icon="mdi-account" v-bind="props">
                        </v-btn>
                    </template>
                    <v-list>
                            <v-btn variant="text" prepend-icon="mdi-logout" @click="logout">Logout</v-btn>
                    </v-list>
                </v-menu>
            </v-toolbar>

            <v-container fluid>
                <v-row>
                    <v-col cols="3">
                        <v-card title="Student profile">
                            <v-card-item>
                                <v-img src="https://pbs.twimg.com/media/FLyjDbtVgAAdP8s.jpg" cover h></v-img>
                            </v-card-item>
                            <v-card-item class="justify-center d-flex">
                                {{ user?.firstname + " " + user?.middlename + " " + user?.lastname }} <v-chip color="green">Online</v-chip>
                            </v-card-item>
                            <v-card-actions>
                                <v-btn block variant="flat" color="blue">Edit profile</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                    <v-col cols="9">
                        <slot/>
                    </v-col>
                </v-row>
            </v-container>

        </v-main>
    </v-layout>
</template>