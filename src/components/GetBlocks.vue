<template>
    <div>
        <article v-for="(block,i) in blocks" :key="i">
            <h3>{{ block[`title`] }}</h3>
            <p>{{ block[`cliff_notes`] }}</p>
            <img :src='getImageUrl(block[`file`])' :alt="block[`image_description`]" width="200px">
        </article>
    </div>
</template>

<script>
import axios from 'axios';
    export default {
        data() {
            return {
                blocks:undefined,
                images:undefined,
            }
        },
        methods: {
            joinArrays(arr1,arr2) {
                for (let i = 0; i < arr2.length; i++) {
                    for (let index = 0; index < arr1.length; index++) {
                        if(arr1[index].block_id == arr2[i].blockid){
                            arr1[i].concat(arr2[i])
                        }
                }
                }
                this.blocks=arr1
            },
            getImageUrl(img){
                let new_image=require("../assets/"+img)
                return new_image
            }
        },
        mounted () {
            axios.request({
            url:`${process.env.VUE_APP_BASE_DOMAIN}/api/blocks`,
            method:`GET`
            }).then((response)=>{
                this.blocks=response.data
                axios.request({
                    url:`${process.env.VUE_APP_BASE_DOMAIN}/api/images`,
                    method:`GET`
                }).then((response)=>{
                    this.images=response.data
                    this.joinArrays(this.blocks,this.images);
                }).catch((error)=>{
                    console.log(error)
                });
            }).catch((error)=>{
                console.log(error)
            });
            
            
        },
    }
</script>

<style scoped>

</style>