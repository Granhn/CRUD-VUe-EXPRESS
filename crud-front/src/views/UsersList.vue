<script setup>
import { useStoreTest } from '../stores/storeTest';
import { storeToRefs } from 'pinia';

const { getUsersInfo,agregaUsuario} = useStoreTest();
const { users } = storeToRefs(useStoreTest());
getUsersInfo();

</script>
<template>
    <div class="container">
    <div class="row">
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
                <td>{{ usuario.id }}</td>
                <td>{{ usuario.name }}</td>
                <td>romo@{{ usuario.email }}</td>
                <td><button class="btn btn-info btn-black" @click="agregaUsuario">Update</button></td>
                <td><button class="btn btn-danger btn-black">Delete</button></td> 
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>