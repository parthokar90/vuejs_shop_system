<template>
    <!-- start main area -->
    <section class="shop-page left-sidebar main">
        
      ok
    </section>
    <!-- end main area -->
</template>


<script>
    import axios from 'axios'
    export default {
        data(){
            return {
                products:[],
                isLoading: true,
            }
        },
        mounted(){
            this.Product()
        },
        methods:{
            Product(){
                axios.get('/search/'+this.$route.params.input).then(response=>{
                    this.products = response.data.data
                    this.isLoading=false;
                    console.log(response);
                }).catch(error=>{
                    this.products = []
                })
            }
        }
    }
</script>

