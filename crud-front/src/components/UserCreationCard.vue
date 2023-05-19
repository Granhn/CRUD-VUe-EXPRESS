<script setup>
import { ref } from 'vue';
import {useUserStore} from '../stores/useUserStore';
import { storeToRefs } from 'pinia';

let name = ref('');
let email = ref('')
const userStore = useUserStore();
const { addUser, updateUserInfo } = userStore;
const {error} = storeToRefs(userStore);
const props = defineProps(['message','error_message',"card_type", "user_id"]);

const agregarUsuaro = () => {
    addUser(name.value, email.value);
    name.value = '';
    email.value = '';
}
const actualizarUsuario = async () => {
    const userInfo = {
        name:name.value,
        email: email.value
    }
    
    console.log(props.user_id);
    await updateUserInfo(props.user_id,userInfo);
    name.value = '';
    email.value = '';
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
                        <button class="form-control btn btn-success  text-dark" @click="agregarUsuaro(name,email)" v-if="card_type === 'creation'">Crear</button>
                        <button class="form-control btn btn-success  text-dark" @click="actualizarUsuario" v-if="card_type === 'update'">Actualizar</button>
                    </div>
                    <div class="form-group">
                        <button class="form-control btn btn-primary "
                            placeholder="Reestablecer" @click="limpiarCard">Reestablecer</button>
                    </div>
                    <div class="form-group" v-if="error">
                        <span>{{error_message}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template> 