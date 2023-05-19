import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'
export const useUserStore = defineStore('user', () => {
  const users = ref([])
  let user = ref({}) 
  const loading = ref(false)
  const error = ref(false)
  const getUsersInfo = async () => {
    loading.value = true
    try {
      users.value = []
      const res = await axios.get('http://localhost:3000/users')
      const data = res.data
      users.value = data.data
    } catch (err) {
      console.log("Can't acces the server data")
      console.log(err)
    } finally {
      loading.value = true
    }
  }
  const addUser = async (name, email) => {
    loading.value = true
    const userData = {
      name,
      email,
    }
    try {
      const res = await axios.post('http://localhost:3000/users', userData)
      getUsersInfo()
      users.value.push(userData)
      error.value = false
    } catch (err) {
      console.log('No se pudo crear el usuario usuario')
      error.value = true
      console.log(err)
    } finally {
      loading.value = false
    }
  }
  const deleteUser = async (user) => {
    const index = users.value.indexOf(user)
    if (index > -1) {
      await axios.delete(`http://localhost:3000/users/${user.id}`)
      users.value.splice(index, 1)
    } else {
      console.log('No existe el usuario')
    }
    // index > -1? users.value.splice(index, 1):
  }
  const getUserInfo = async (userId) => {
    const res = await axios.get(`http://localhost:3000/users/${userId}`)
    user.value = res.data.user
  }
  const updateUserInfo = async (userId, newUserData) => {
    console.log(userId)
    const res = await axios.put(`http://localhost:3000/users/${userId}`,newUserData);
    user.value = res.data.user
  }
  return {
    getUsersInfo,
    users,
    deleteUser,
    addUser,
    error,
    user,
    getUserInfo,
    updateUserInfo,
  }
})
