<template>
    <div>
        <article v-for="(block,i) in blocks" :key="i">
            <h3>{{ block[`title`] }}</h3>
            <p>{{ block[`cliff_notes`] }}</p>
            <!-- <img src="C:\Users\eleme\Desktop\Desktop\Innotech\Assignments\Week23\printmaking\images\83a5672b1ae54afe812c60d8895e251b.jpeg" alt="" width="200px"> -->
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
        mounted () {
            axios.request({
            url:`${process.env.VUE_APP_BASE_DOMAIN}/api/blocks`,
            method:`GET`
            }).then((response)=>{
                console.log(response)
                this.blocks=response.data
            }).catch((error)=>{
                console.log(error)
            });
            axios.request({
            url:`${process.env.VUE_APP_BASE_DOMAIN}/api/images`,
            method:`GET`
            }).then((response)=>{
                console.log(response)
                this.images=response.data
            }).catch((error)=>{
                console.log(error)
            });
            for (let i = 0; i < this.images.length; i++) {
                    if(this.blocks[i].block_id == this.images[i].blockid){
                        this.blocks[i].concat(this.images[i])
                    }
                }
        },
    }
</script>

<style scoped>

</style>