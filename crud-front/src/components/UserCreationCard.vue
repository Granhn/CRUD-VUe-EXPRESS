<script setup>
import { ref } from 'vue';
import {useUserStore} from '../stores/useUserStore';
let name = ref('');
let email = ref('')
const userStore = useUserStore();
const { addUser } = userStore;
const props = defineProps(['message']);
const prueba = () => { console.log(name, email) }
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
                        <button class="form-control btn btn-success  text-dark" @click="addUser(name,email)">Enviar</button>
                    </div>
                    <div class="form-group">
                        <button class="form-control btn btn-primary "
                            placeholder="Reestablecer">Reestablecer</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template> 