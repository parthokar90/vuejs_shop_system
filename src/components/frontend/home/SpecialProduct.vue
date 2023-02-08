<template>
  <section class="home3 special">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title">
                        <h3>special products</h3>
                    </div>
                      <div v-if="isLoading==true" class="d-flex justify-content-center">
                                    <div class="spinner-border" role="status">
                                        <span class="sr-only">Loading...</span>
                                    </div>
                             </div>
                </div>
                <div class="col-lg-12">
                    <div class="row">
                        <!-- brand corner -->
                        <div class="col-lg-1-5">
                            <div class="corner">
                                <h4>Category corner</h4>
                                 <div v-if="isLoading==true" class="d-flex justify-content-center">
                                    <div class="spinner-border" role="status">
                                        <span class="sr-only">Loading...</span>
                                    </div>
                                 </div>
                                <ul>
                                    <li v-for="(item, index) in categorys">
                                        <div class="media d-flex align-items-center">
                                             <router-link :to="{ path: '/category-product/' + item.id }">
                                                 <img class="img-fluid img-thumbnail" v-bind:src="item.image" alt="Product">
                                            </router-link>
                                            <div class="media-body">
                                                 <router-link :to="{ path: '/category-product/' + item.id }">
                                                    <h5>{{item.category_name}}</h5>
                                                </router-link>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!-- products -->
                        <div class="col-lg-4-5 all">
                             <div class="row">
                                <div v-for="(item, index) in products" class="col-lg-3 col-md-4 col-sm-6">
                                    <div class="single-item">
                                        <div class="image-area">
                                           <router-link :to="{ path: '/product-details/' + item.id }">
                                                <img v-bind:src="item.image" class="img-main img-fluid img-thumbnail" alt="Product"/>
                                           </router-link>

                                            <router-link :to="{ path: '/product-details/' + item.id }">
                                                <img v-bind:src="item.image" class="img-hover img-fluid img-thumbnail" alt="Product"/>
                                            </router-link>
                                        </div>
                                        <div class="bottom-area">
                                            <a href="shop-detail-left.html">
                                                <h5>{{item.product_name}}</h5>
                                            </a>
                                            <p>
                                               <span v-if="item.regular_price>0">Tk {{item.regular_price}} - </span>  Tk {{item.sale_price}}
                                            </p>
                                            <div class="action">
                                                <ul class="d-flex">
                                                    <li>
                                                        <a href="wishlist.html">
                                                            <i class="far fa-heart"></i>
                                                            <p class="my-tooltip">add to wishlist</p>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <router-link :to="{ path: '/product-details/' + item.id }">
                                                            <i class="far fa-eye"></i>
                                                            <p class="my-tooltip">quick view</p>
                                                        </router-link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
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
                products:[],
                categorys:[], 
                isLoading: true,
            }
        },
        beforeMount(){
          this.isLoading=true;
        },
        mounted(){
            this.Product()
            this.category()
            this.$nextTick(() => {
              window.scrollTo(0, 0)
            })
        },
        methods:{
            Product(){
                axios.get(`/product`).then(response=>{
                    this.products = response.data.data
                    this.isLoading=false;
                }).catch(error=>{
                    this.products = []
                })
            },

            category(){
                axios.get(`/category/list`).then(response=>{
                    this.categorys = response.data.data
                    this.isLoading=false;
                }).catch(error=>{
                    this.categorys = []
                })
            }
        }
    }
</script>