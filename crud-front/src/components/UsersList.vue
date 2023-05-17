<script setup>
import { useUserStore } from '../stores/useUserStore'
import { storeToRefs } from 'pinia';
import router from '../routes/index'

const userStore = useUserStore();
const { getUsersInfo,agregaUsuario, deleteUser} = userStore;
const { users, loading } = storeToRefs(userStore)
const prueba = (user) => { router.push(`/update/${user.id}`) }

getUsersInfo();

</script>
<template>
    <div class="container">
    <div class="row" v-if="!loading">
      <div class="col-md-9">
        <div class="table-responsive">
          <h1>Users List</h1>
          <table class="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Correo</th>
                <th colspan="2">Options</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(usuario,index) of users" :key="usuario.id">
                <td>{{ index+1 }}</td>
                <td>{{ usuario.name }}</td>
                <td>{{ usuario.email }}</td>
                <td><button class="btn btn-info btn-black" @click="prueba(usuario)">Update</button></td>
                <td><button class="btn btn-danger btn-black" @click="deleteUser(usuario)">Delete</button></td> 
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div v-else>Cargando datos</div>
  </div>
</template> 