import { defineStore } from 'pinia'
import { ref } from 'vue';
export const useStoreTest = defineStore('pruebas', () =>{

    const users = ref([]);
    const getUsersInfo = async () =>{
        const res = await fetch('http://localhost:3000/users/');
        console.log(res);
        const data = await res.json();
        users.value = data.data;
        console.log(users.value)
        // console.log(data.data);
        // users.value = [...data];
    }
    const agregaUsuario = ()=>{
        users.value.push({
            id:40,
            name:"JAJAJAJ",
            email:"dasdad@asd@asd"
        })
        console.log(users.value)
    }

    return { getUsersInfo, users, agregaUsuario }
})