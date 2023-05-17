<script setup>
import UserCreationCardVue from '../components/UserCreationCard.vue';
import UsersListVue from '../components/UsersList.vue'


</script>
<template>
    <UserCreationCardVue message="Create user" error_message="No se pudo crear el usuario, intente nuevamente" card_type="creation"></UserCreationCardVue>
    <UsersListVue></UsersListVue>
</template>