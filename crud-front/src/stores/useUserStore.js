import { defineStore } from 'pinia'
import { ref } from 'vue';
import axios from 'axios';
export const useUserStore = defineStore("user",() => {

    const users = ref([]);
    const loading = ref(false);
    const error = ref(false);
    const getUsersInfo = async (url) =>{
        loading.value = true;
        try{
            users.value = []
            const res = await axios.get("http://localhost:3000/users")
            const data = res.data;
            users.value = data.data
        }catch(err){
            console.log("Can't acces the server data");
            console.log(err);
        }
        finally{
            loading.value=true;
        }
    }
    const addUser = async (name, email)=>{
        loading.value = true
        const userData = {
            name,
            email
        }
        try{
            const res = await axios.post("http://localhost:3000/users",userData);
            users.value.push(userData);
            error.value = false;
        }
        catch(err){
            console.log("No se pudo crear el usuario usuario");
            error.value = true;
            console.log(err);
        }
        finally{
            loading.value = false;
        }


    }
    const deleteUser = user =>{
        const index = users.value.indexOf(user);
        index > -1? users.value.splice(index, 1): console.log("No existe el usuario");
    }

    return { getUsersInfo, users, deleteUser , addUser, error }
})