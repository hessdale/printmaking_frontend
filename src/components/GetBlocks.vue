<template>
    <div>

    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data() {
            return {
                blocks:undefined
            }
        },
        mounted () {
            axios.request({
            url:`${process.env.VUE_APP_BASE_URL}/api/blocks`,
            method:`GET`
            }).then((response)=>{
                console.log(response)
                response;
            }).catch((error)=>{
                console.log(error)
                error;
            });
        },
    }
</script>

<style scoped>

</style>