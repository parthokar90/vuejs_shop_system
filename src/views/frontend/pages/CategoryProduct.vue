<template>
    <!-- start main area -->
    <section class="shop-page left-sidebar main">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12">
                    <div class="content">
                        <div class="home1 collection">
                            <div class="row">
                                    <div v-if="isLoading==true" class="d-flex justify-content-center">
                                        <div class="spinner-border" role="status">
                                            <span class="sr-only">Loading...</span>
                                        </div>
                                    </div>
                                <div v-for="(item, index) in products" class="col-lg-1-5 col-lg-3 col-md-4 col-sm-6">
                                    <div class="single-item">
                                        <div class="image-area">
                                            <router-link :to="{ path: '/product-details/' + item.id }">
                                                <img v-bind:src="item.image" class="img-active img-fluid" alt="Product Image"/>
                                            </router-link>
                                             <router-link :to="{ path: '/product-details/' + item.id }">
                                                <img v-bind:src="item.image" class="img-hover" alt="Product Image"/>
                                            </router-link>
                                            <span class="sale-status">sale</span>
                                            <div class="action">
                                                <ul>
                                                    <li>
                                                        <a href="wishlist.html">
                                                            <i class="far fa-heart"></i>
                                                            <p class="my-tooltip">
                                                                add to wishlist
                                                            </p>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <router-link :to="{ path: '/product-details/' + item.id }">
                                                            <i class="far fa-eye"></i>
                                                            <p class="my-tooltip">
                                                                quick view
                                                            </p>
                                                        </router-link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="bottom-area">
                                            <ul class="rating d-flex">
                                                <li><i class="fas fa-star"></i></li>
                                                <li><i class="fas fa-star"></i></li>
                                                <li><i class="fas fa-star"></i></li>
                                                <li><i class="fas fa-star"></i></li>
                                                <li><i class="fas fa-star"></i></li>
                                            </ul>
                                            <router-link :to="{ path: '/product-details/' + item.id }">
                                                <h5>{{item.product_name}}</h5>
                                            </router-link>
                                              <p>
                                               <span v-if="item.regular_price>0">Tk {{item.regular_price}} - </span>  Tk {{item.sale_price}}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="pages">
                                        <ul class="d-flex justify-content-center">
                                            <li><a href="#!"><i class="flaticon-chevron-1"></i></a></li>
                                            <li><a href="#!" class="active">1</a></li>
                                            <li><a href="#!">2</a></li>
                                            <li><a href="#!">3</a></li>
                                            <li><a href="#!">4</a></li>
                                            <li><a href="#!"><i class="flaticon-chevron"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
                axios.get('/category/product/'+this.$route.params.id).then(response=>{
                    this.products = response.data.data
                    this.isLoading=false;
                }).catch(error=>{
                    this.products = []
                })
            }
        }
    }
</script>