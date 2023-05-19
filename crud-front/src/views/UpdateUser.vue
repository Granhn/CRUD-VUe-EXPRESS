<script setup>
import UserCreationCard from '../components/UserCreationCard.vue';
import {useRoute} from 'vue-router';
import { useUserStore } from '../stores/useUserStore';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

const userStore = useUserStore();
const { getUserInfo } = userStore;
const { user } = storeToRefs(userStore);
const route = useRoute();
const {id} = route.params
getUserInfo(id);


</script>
<template>
    <UserCreationCard message="Update user" error_message="No se pudo actualizar el usuario, verifica el formato de correo" card_type="update" :user_id="user.id"></UserCreationCard>
    <div class="contaier" :user_id="user.id">
        <h2>Your user info</h2>
        <p>User id : {{ user.id }}</p>
        <p>User name : {{ user.name }}</p>
        <p>User email : {{ user.email }}</p>
    </div>
</template>