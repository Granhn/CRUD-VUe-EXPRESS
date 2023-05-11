import { defineStore } from 'pinia'
import { ref } from 'vue';
import { useFetch } from '../composables/useFetch';
import axios from 'axios';
export const useUserStore = defineStore("user",() => {

    const users = ref([]);
    const getUsersInfo = async (url) =>{
        const res = await axios.get("http://localhost:3000/users")
        const data = res.data;
        users.value = data.data
    }
    const agregaUsuario = ()=>{
        users.value.push({
            id:40,
            name:"JAJAJAJ",
            email:"dasdad@asd@asd"
        })
    }
    const deleteUser = user =>{
        const index = users.value.indexOf(user);
        index > -1? users.value.splice(index, 1): console.log("No existe el usuario");
    }

    return { getUsersInfo, users, agregaUsuario, deleteUser }
})