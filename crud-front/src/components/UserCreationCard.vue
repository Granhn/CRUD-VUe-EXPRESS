<script setup>
import { ref } from 'vue';
import {useUserStore} from '../stores/useUserStore';
import { storeToRefs } from 'pinia';
let name = ref('');
let email = ref('')
const userStore = useUserStore();
const { addUser } = userStore;
const {error} = storeToRefs(userStore);
const props = defineProps(['message']);
const limpiarCard = () => {
    name.value = ''
    email.value = ''
}
const agregarUsuaro = () => {
    addUser(name.value, email.value);
    limpiarCard();
}
</script>
<template>
    <div class="container">
        <div class="row">
            <div class="clo-md-3">
                <h2>{{ props.message }}</h2>
                <div class="card card-body">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Name" v-model="name">
                    </div>
                    <div class="form-group">
                        <input type="email" class="form-control" placeholder="Email" v-model="email">
                    </div>
                    <div class="form-group">
                        <button class="form-control btn btn-success  text-dark" @click="agregarUsuaro(name,email)">Enviar</button>
                    </div>
                    <div class="form-group">
                        <button class="form-control btn btn-primary "
                            placeholder="Reestablecer">Reestablecer</button>
                    </div>
                    <div class="form-group" v-if="error">
                        <span>No se pudo crear el usuario, intente otra vez</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template> 