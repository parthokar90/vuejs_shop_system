<template>
    <section class="home1 home3 blog">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title">
                        <h3>from the blog</h3>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="row justify-content-center">
                       <div v-if="isLoading==true" class="d-flex justify-content-center">
                        <div class="spinner-border" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                        </div>
                         <div v-for="(item, index) in blogs" class="col-lg-4 col-md-6 col-sm-6">
                            <div class="single-blog">
                                <div class="blog-img item-animation3">
                                    <span class="item-animation3a"></span>
                                    <img v-bind:src="item.image" alt="Blog Image"/>
                                </div>
                                <div class="content">
                                    <router-link :to="{ path: '/blog-details/' + item.id }">
                                        <p> {{ item.post }}</p>
                                    </router-link>
                                    <router-link :to="{ path: '/blog-details/' + item.id }">
                                        <h5>{{item.title}}</h5>
                                    </router-link>
                                     <router-link :to="{ path: '/blog-details/' + item.id }" class="read-more">read more</router-link>
                                </div>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import axios from 'axios'
    export default {
        data(){
            return {
                blogs:[],
                isLoading: true,
            }
        },
        beforeMount(){
          this.isLoading=true;
        },
        mounted(){
            this.blog()
        },
        methods:{
            blog(){
                axios.get(`/blog`).then(response=>{
                    this.blogs = response.data.data
                    this.isLoading=false;
                }).catch(error=>{
                    this.blogs = []
                })
            },
        }
    }
</script>