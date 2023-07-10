<template>
    <div>
        <h3>add photo to existing block post</h3>
<input type="file" ref="uploadfile">
<input type="text" ref="blockID" placeholder="block ID">
<button @click="addphoto">add photo</button>
    </div>
</template>

<script>
import axios from 'axios';

    export default {
        methods: {
            addphoto() {
                axios.request({
                    url:`${process.env.VUE_APP_BASE_DOMAIN}/api/login-admin`,
                    method:`POST`,
                    data:{
                   
                    }
                }).then((response)=>{
                 
                    console.log(response);
                }).catch((error)=>{
                    console.log(error);
                });
            }
        },
    }
</script>

<style scoped>

</style>