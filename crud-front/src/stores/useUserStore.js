import { defineStore } from 'pinia'
import { ref } from 'vue';
import axios from 'axios';
export const useUserStore = defineStore("user",() => {

    const users = ref([]);
    const getUsersInfo = async (url) =>{
        const res = await axios.get("http://localhost:3000/users")
        const data = res.data;
        console.log(data.data);
        users.value = data.data
    }
    const addUser = async (name, email)=>{
        console.log(name, email)
        const userData = {
            name,
            email
        }
        const res = await axios.post("http://localhost:3000/users",userData);

    }
    const deleteUser = user =>{
        const index = users.value.indexOf(user);
        index > -1? users.value.splice(index, 1): console.log("No existe el usuario");
    }

    return { getUsersInfo, users, deleteUser , addUser }
})