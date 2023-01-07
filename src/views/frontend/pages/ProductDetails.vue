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
                       
                        <div class="share d-flex align-items-center">
                            <h5>share : </h5>
                            <ul class="d-flex">
                                <li><a href="#!"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="#!"><i class="fab fa-pinterest-p"></i></a></li>
                                <li><a href="#!"><i class="fab fa-instagram"></i></a></li>
                                <li><a href="#!"><i class="fab fa-google-plus-g"></i></a></li>
                            </ul>
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
                        <div class="col-lg-3">
                            <div class="single-product">
                                <div class="image-area">
                                    <img src="frontend/assets/images/home1/featured/p1a.jpg" class="img-main" alt="Product Image"/>
                                    <img src="frontend/assets/images/home1/featured/p1b.jpg" class="img-hover" alt="Product Image"/>
                                    <span class="sale-status">sale</span>
                                    <div class="action">
                                        <ul class="d-flex">
                                            <li>
                                                <a href="#!">
                                                    <i class="far fa-heart"></i>
                                                    <p class="my-tooltip">add to wishlist</p>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#!">
                                                    <i class="far fa-eye"></i>
                                                    <p class="my-tooltip">quick view</p>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#!">
                                                    <i class="flaticon-shopping-cart-1"></i>
                                                    <p class="my-tooltip">add to cart</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="bottom-area">
                                    <a href="shop-detail.html">
                                        <h5>Contrast Print T-Shirt</h5>
                                    </a>
                                    <p><span>$110</span> - $78</p>
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
                        <div class="col-lg-3">
                            <div class="single-product">
                                <div class="image-area">
                                    <img src="frontend/assets/images/home1/featured/p2a.jpg" class="img-main" alt="Product Image"/>
                                    <img src="frontend/assets/images/home1/featured/p2b.jpg" class="img-hover" alt="Product Image"/>
                                    <span class="sale-status">sale</span>
                                    <div class="action">
                                        <ul class="d-flex">
                                            <li>
                                                <a href="#!">
                                                    <i class="far fa-heart"></i>
                                                    <p class="my-tooltip">add to wishlist</p>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#!">
                                                    <i class="far fa-eye"></i>
                                                    <p class="my-tooltip">quick view</p>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#!">
                                                    <i class="flaticon-shopping-cart-1"></i>
                                                    <p class="my-tooltip">add to cart</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="bottom-area">
                                    <a href="shop-detail.html">
                                        <h5>Black Fit Polo Shirt</h5>
                                    </a>
                                    
                                    <p><span>$110</span> - $78</p>
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
                        <div class="col-lg-3">
                            <div class="single-product">
                                <div class="image-area">
                                    <img src="frontend/assets/images/home1/featured/p3a.jpg" class="img-main" alt="Product Image"/>
                                    <img src="frontend/assets/images/home1/featured/p3b.jpg" class="img-hover" alt="Product Image"/>
                                    <span class="sale-status">new</span>
                                    <div class="action">
                                        <ul class="d-flex">
                                            <li>
                                                <a href="#!">
                                                    <i class="far fa-heart"></i>
                                                    <p class="my-tooltip">add to wishlist</p>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#!">
                                                    <i class="far fa-eye"></i>
                                                    <p class="my-tooltip">quick view</p>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#!">
                                                    <i class="flaticon-shopping-cart-1"></i>
                                                    <p class="my-tooltip">add to cart</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="bottom-area">
                                    <a href="shop-detail.html">
                                        <h5>T-shirt with Chest Pocket</h5>
                                    </a>
                                    
                                    <p><span>$110</span> - $78</p>
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
                        <div class="col-lg-3">
                            <div class="single-product">
                                <div class="image-area">
                                    <img src="frontend/assets/images/home1/featured/p4a.jpg" class="img-main" alt="Product Image"/>
                                    <img src="frontend/assets/images/home1/featured/p4b.jpg" class="img-hover" alt="Product Image"/>
                                    <span class="sale-status">sale</span>
                                    <div class="action">
                                        <ul class="d-flex">
                                            <li>
                                                <a href="#!">
                                                    <i class="far fa-heart"></i>
                                                    <p class="my-tooltip">add to wishlist</p>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#!">
                                                    <i class="far fa-eye"></i>
                                                    <p class="my-tooltip">quick view</p>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#!">
                                                    <i class="flaticon-shopping-cart-1"></i>
                                                    <p class="my-tooltip">add to cart</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="bottom-area">
                                    <a href="shop-detail.html">
                                        <h5>Muscle Fit Polo Shirt</h5>
                                    </a>
                                    
                                    <p><span>$110</span> - $78</p>
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
                        <div class="col-lg-3">
                            <div class="single-product">
                                <div class="image-area">
                                    <img src="frontend/assets/images/home1/featured/p3a.jpg" class="img-main" alt="Product Image"/>
                                    <img src="frontend/assets/images/home1/featured/p3b.jpg" class="img-hover" alt="Product Image"/>
                                    <span class="sale-status">new</span>
                                    <div class="action">
                                        <ul class="d-flex">
                                            <li>
                                                <a href="#!">
                                                    <i class="far fa-heart"></i>
                                                    <p class="my-tooltip">add to wishlist</p>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#!">
                                                    <i class="far fa-eye"></i>
                                                    <p class="my-tooltip">quick view</p>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#!">
                                                    <i class="flaticon-shopping-cart-1"></i>
                                                    <p class="my-tooltip">add to cart</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="bottom-area">
                                    <a href="shop-detail.html">
                                        <h5>T-shirt with Chest Pocket</h5>
                                    </a>
                                    
                                    <p><span>$110</span> - $78</p>
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
            }
        },
        mounted(){
            this.Product()
        },
        methods:{

            Product(){
                axios.get('/product/'+this.$route.params.id).then(response=>{
                    this.product = response.data.data
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
               let token=localStorage.getItem("token");
               if(token==null){
                  this.$router.push('/account');
               }   
               axios.post('/carts').then(response=>{
                    console.log(response);
                }).catch(error=>{
                    this.product = ''
                })
            }
        }
    }
</script>