<script setup>
import { ref } from 'vue';
let name = ref('');
let email = ref('');
const props = defineProps(['message']);
</script>
<template>
    <div class="container">
        <div class="row">
            <div class="clo-md-3">
                <h2>{{props.message}}</h2>
                <div class="card card-body">
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Name" v-model="name">
                            {{ name }}
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control" placeholder="Email" v-model="email">
                            {{ email }}
                        </div>
                        <div class="form-group">
                            <input type="submit" class="form-control btn btn-success btn-block text-dark"
                                placeholder="Enviar">
                        </div>
                        <div class="form-group">
                            <input type="reset" class="form-control btn btn-primary btn-block" placeholder="Reestablecer">
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template> 