import axios from 'axios'
import { ref } from 'vue'
export const useFetch = (url) => {
    let data = ref([])
    let error = ref("")
    const isLoading = ref(0)

    const getData = async ()=>{
        isLoading.value = true;
        try{
            const response = await axios.get(url);
            data.value = response.data;
        }catch(err){
            error.value = err
        }finally{
            isLoading.value = false;
        }
    }

    return { data, isLoading, getData, error  }
}