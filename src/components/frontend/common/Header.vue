<template>
  <header>
        <!-- start top-bar area -->
        <section class="home3 top-bar">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-6">
                        <p>New Offers This Weekend only to Get 50% Flate</p>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <div class="right-part d-flex justify-content-end">
                            <div class="social-area">
                                <ul class="d-flex">
                                    <li><a href="#!"><i class="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#!"><i class="fab fa-instagram"></i></a></li>
                                    <li><a href="#!"><i class="fab fa-google-plus-g"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- start top-bar area -->

        <!-- start mid-menu area -->
        <section class="home3 mid-menu">
            <div class="container ">
                <div class="row align-items-center">
                    <div class="col-lg-3 col-md-2 col-sm-6 col-6 order-1 order-md-1">
                        <div class="logo">
                            <RouterLink to="/">
                                <img src="frontend/assets/images//home3/logo.png" alt="Logo"/>
                            </RouterLink>
                        </div>
                    </div>
                    <div class="col-lg-7 col-md-7 order-3 order-md-2">
                            <div class="form">
                                <input  v-model="input" name="input" type="search" placeholder="search for products..." class="inputs">
                                  <button v-on:click="searchData" type="button" class="button-style1">search<span class="btn-dot"></span></button>
                            </div>
                        <ul v-if="showData==true" class="s-image">
                            <li v-for="(item, index) in dataItem">
                              <div class="d-flex position-relative">
                                <img v-bind:src="item.image" alt="Product Image"/>
                                   <div class="text">
                                       <a href="shop-4-column-sidebar.html">
                                            <h5>{{item.product_name}}</h5>
                                        </a>
                                    </div>
                                </div>
                            </li>
                        </ul>     
                    </div>
                    <div class="col-lg-2 col-md-3 col-sm-6 col-6 order-2 order-md-3">
                        <div class="notification">
                            <ul class="d-flex justify-content-end">
                                <li>
                                    <RouterLink to="/account">
                                        <i class="flaticon-user-1"></i>
                                    </RouterLink>
                                </li>
                                <li>
                                    <a href="wishlist.html">
                                        <i class="flaticon-heart"></i>
                                        <span class="quantity">01</span>
                                    </a>
                                </li>
                                <li>
                                    <div class="dropdown">
                                        <button class="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i class="flaticon-shopping-cart"></i>
                                            <span class="quantity">02</span>
                                        </button>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <div class="heading d-flex justify-content-between">
                                                <h5>3 items</h5>
                                                <RouterLink to="/cart">view cart</RouterLink>
                                            </div>
                                            <ul>
                                                <li>
                                                    <div class="d-flex position-relative">
                                                        <img src="frontend/assets/images//home1/product/p1a.jpg" alt="Product Image"/>
                                                        <div class="text">
                                                            <a href="shop-4-column-sidebar.html">
                                                                <h5>Oversize Cotton Dress</h5>
                                                            </a>
                                                            <p>1 X $78.00</p>
                                                            <a href="#!" class="icon">
                                                                <i class="far fa-times-circle"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="d-flex position-relative">
                                                        <img src="frontend/assets/images//home1/product/p2a.jpg" alt="Product Image"/>
                                                        <div class="text">
                                                            <a href="shop-4-column-sidebar.html">
                                                                <h5>Floral Mini Skirt</h5>
                                                            </a>
                                                            <p>2 X $88.00</p>
                                                            <a href="#!" class="icon">
                                                                <i class="far fa-times-circle"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="d-flex position-relative">
                                                        <img src="frontend/assets/images//home1/product/p3a.jpg" alt="Product Image"/>
                                                        <div class="text">
                                                            <a href="shop-4-column-sidebar.html">
                                                                <h5>Flared ribbed trousers</h5>
                                                            </a>
                                                            <p>1 X $78.00</p>
                                                            <a href="#!" class="icon">
                                                                <i class="far fa-times-circle"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                            <div class="total d-flex justify-content-between">
                                                <p>total</p>
                                                <p>$499.00</p>
                                            </div>
                                            <div class="check">
                                                 <RouterLink to="/checkout" class="button-style1">checkout <span class="btn-dot"></span></RouterLink>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- end mid-menu area -->

        <!-- start menu area -->
        <section class="home3 menubar position-relative">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-5 col-sm-6 col-6">
                        <div class="category-menu-area">
                            <button class="category-btn">
                                <span>
                                    browse categories
                                    <i class="fas fa-caret-down"></i>
                                </span>
                                
                                <i class="fas fa-bars bar-icon"></i>
                            </button>
                        </div>
                    </div>
                    <div class="col-lg-9 col-md-7 col-sm-6 col-6">
                        <nav class="navbar p-0 position-static desktop-menu">
                            <div class="main-menu">
                                <ul class="menu">
                                    <li class="active">
                                       <RouterLink to="/">home</RouterLink>
                                    </li>
                                    <li><RouterLink to="/about">about us</RouterLink></li>
                                    <li><RouterLink to="/blog">Blog</RouterLink></li>
                                    <li><RouterLink to="/contact">contact us</RouterLink></li>
                                </ul>
                            </div>
                            <div class="right-part d-flex align-items-center">
                                <i class="flaticon-customer-service"></i>
                                <div class="text">
                                    <p>call now</p>
                                    <p>+8801765456090</p>
                                </div>
                            </div>
                        </nav>

                        <nav class="navbar p-0 mobile-menu position-static">
                            <div class="header-menu position-static">
                                <ul class="menu">
                                    <li class="active">
                                     <RouterLink to="/">home</RouterLink>
                                    </li>
                                    <li><RouterLink to="/about">about us</RouterLink></li>
                                    <li><RouterLink to="/blog">Blog</RouterLink></li>
                                    <li><RouterLink to="/contact">contact us</RouterLink></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            <!-- Start category offcanvas -->
            <div class="mbl-offcanvas">
                <button class="mbl-canvas-cancle">
                    <i class="far fa-times-circle"></i>
                </button>

                <div class="mbl-content">

                </div>
            </div>
            <!-- End category offcanvas -->
        </section>
        <!-- end menu area -->
    </header>
</template>

<script>
    import axios from 'axios'
    export default {
        data(){
            return {
                dataItem:[],
                input:'',
                isLoading: true,
                showData: false,
            }
        },
        methods:{
            searchData(){
              axios.post(`search`, {
                input: this.input,
            })
            .then(response => {
               this.dataItem=response.data;
               this.showData = true;
             })
            .catch(error => {
              console.log(response);
            });
          },
        }
    }
</script>

