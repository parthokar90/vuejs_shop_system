<template>
    <!-- start detail area -->
    <section class="shop-detail detail">
        <div class="container">
            <div class="row">
                <div class="col-lg-5 col-md-6">
                    <div class="image-area">
                        <div class="img-gallery">
                            <div class="item">
                                 <img v-bind:src="product.image" alt="Product"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-7 col-md-6">
                    <div class="detail-content">
                        <span v-if="product.quantity>0" class="stock">in stock</span>
                        <span v-else class="stock">Out of stock</span>
                        <h4>{{product.product_name}}</h4>
                      <h4><span v-if="product.regular_price>0">Tk {{product.regular_price}} - </span>  Tk {{product.sale_price}}</h4>  
                        <div class="border-area">
                            <div class="cart-part d-flex align-items-center">
                                <div class="d-flex number-spinner">
                                    
                                    <input v-model="quantity" type="text" class="form-control text-center input-value">
                                    <div class="buttons">
                                        <button @click="increment" class="up-btn"><i class="flaticon-plus"></i></button>
                                        <button @click="decrement" class="down-btn"><i class="flaticon-remove"></i></button>
                                    </div>
                                </div>
                                <button @click="addToCart" class="cart button-style1">add to cart <span class="btn-dot"></span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- end detail area -->

    <!-- start review area -->
    <section class="shop-detail review">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">description</button>
                        </li>
                    </ul>
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <p>{{product.long_description}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- end review area -->

    <!-- start featured area -->
    <section class="home1 shop-detail featured">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title">
                        <h3>you may also like</h3>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="row featured-slider">
                        <div v-for="(item, index) in category_product" class="col-lg-3">
                            <div class="single-product">
                                <div class="image-area">
                                    <img v-bind:src="item.image" class="img-main img-fluid" alt="Product Image"/>
                                    <img v-bind:src="item.image" class="img-hover img-fluid" alt="Product Image"/>
                                    <span class="sale-status">sale</span>
                                </div>
                                <div class="bottom-area">
                                    <router-link :to="{ path: '/product-details/' + item.id }">
                                          <h5>{{item.product_name}}</h5>
                                    </router-link>
                                    <p>{{item.sale_price}}</p>
                                    <ul class="rating d-flex">
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- end featured area -->
</template>


<script>
    import axios from 'axios'
    export default {
        data(){
            return {
                product:'',
                quantity:1,
                product_id:this.$route.params.id,
                category_product:[],
            }
        },
        mounted(){
            this.Product()
            this.$nextTick(() => {
              window.scrollTo(0, 0)
            })
        },
        methods:{

            Product(){
                axios.get('/product/'+this.$route.params.id).then(response=>{
                    this.product = response.data.data
                    this.categoryProduct(response.data.data.category_id);
                }).catch(error=>{
                    this.product = ''
                })
            },

            increment(){
              this.quantity++
            },

            decrement(){
               if (this.quantity === 0) return
               this.quantity -= 1
               if(this.quantity==0) return this.quantity=1
            },

            addToCart(){
               axios.post('/carts').then(response=>{
                    console.log(response);
                }).catch(error=>{
                    this.product = ''
                })
            },

            categoryProduct(id){
                axios.get('category/product/'+id).then(response=>{
                    this.category_product=response.data.data;
                }).catch(error=>{
                })
            }
        }
    }
</script>