<template>
    <div>
<input type="file" ref="uploadfile" required>
<input type="text" placeholder="title" ref="title">
<input type="text" placeholder="name" ref="name">
<input type="date" placeholder="Date (yyyy-mm-dd)" ref="date" required>
<input type="text" placeholder="publication" ref="publication">
<input type="text" placeholder="block ID" ref="block_id" required>
<input type="text" placeholder="cliffnotes" ref="cliffnotes" required>
<textarea name="info" id="info" cols="60" rows="30"></textarea>
<button @click="post_block">POST</button>
    </div>
</template>

<script>
import axios from 'axios';
    export default {
        methods: {
            post_block() {
                // let title_input = this.$refs.title[`value`]
                // let name_input = this.$refs.name[`value`]
                // let date_input = this.$refs.date[`value`]
                // let publication_input = this.$refs.publication[`value`]
                // let block_id_input = this.$refs.block_id[`value`]
                // let cliffnotes_input = this.$refs.cliffnotes[`value`]
                // let info_input = this.$refs.info[`value`]
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
div{
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    margin-top: 60px;
}
button{
    margin-top: 10px;
}
input{
    margin-top:10px;
}
textarea{
    margin-top:10px;
}
</style>