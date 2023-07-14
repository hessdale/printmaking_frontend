<template>
    <div>
<input type="text" placeholder="search" ref="search_input">
<button @click="search()">search</button>
    </div>
</template>

<script>
import axios from 'axios';
    export default {
        methods: {
            search() {
                let search_query=this.$refs["seach_input"].value
                
            }
        },
    }
</script>

<style scoped>

</style>