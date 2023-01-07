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
                        <form action="#!">
                            <div class="form">
                                <div class="select-area">
                                    <select class="select">
                                        <option value="">all categories</option>
                                        <option v-for="(item, index) in categorys" :value=item.id>{{item.category_name}}</option>
                                    </select>
                                </div>
                                <input type="search" placeholder="search for products..." class="inputs">
                            </div>
                            <button type="submit" class="button-style1">search<span class="btn-dot"></span></button>
                        </form>
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
                            <div class="menu-holder">
                                <ul class="categories">
                                    <li v-for="(item, index) in categorys"><router-link :to="{ path: '/category-product/' + item.id }"><i class="flaticon-checked"></i>{{item.category_name}}</router-link></li>
                                </ul>
                            </div>
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
                                        <a href="#!">home</a>
                                     
                                    </li>
                                    <li><a href="about.html">about</a></li>
                                    <li>
                                        <a href="#!">pages</a>
                                        <ul>
                                            <li><a href="about.html">about</a></li>
                                            <li>
                                                <a href="#!">account</a>
                                                <ul>
                                                    <li><a href="login.html">login</a></li>
                                                    <li><a href="register.html">register</a></li>
                                                    <li><a href="account.html">my account</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="faq.html">FAQ</a></li>
                                            <li><a href="coming-soon.html">coming soon</a></li>
                                            <li><a href="contact.html">contact</a></li>
                                            <li>
                                                <a href="#!">404 error</a>
                                                <ul>
                                                    <li><a href="404.html">404 style 1</a></li>
                                                    <li><a href="404a.html">404 style 2</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#!">shop</a>
                                        <ul>
                                            <li>
                                                <a href="#!">collections</a>
                                                <ul>
                                                    <li><a href="shop-4-column-sidebar.html">spring summer collections</a></li>
                                                    <li><a href="shop-3-column-sidebar.html">fall winter collections</a></li>
                                                    <li><a href="shop-2-column-sidebar.html">Boishakhi collections</a></li>
                                                    <li><a href="shop-4-column-sidebar.html">puja collections</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#!">shop with sidebar</a>
                                                <ul>
                                                    <li><a href="shop-2-column-sidebar.html">grid 2 columns</a></li>
                                                    <li><a href="shop-3-column-sidebar.html">grid 3 columns</a></li>
                                                    <li><a href="shop-4-column-sidebar.html">grid 4 columns</a></li>
                                                    <li><a href="shop-list-left-sidebar.html">shop list left</a></li>
                                                    <li><a href="shop-list-right-sidebar.html">shop list right</a></li>
                                                    <li><a href="shop-right-sidebar.html">shop classic</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#!">shop without sidebar</a>
                                                <ul>
                                                    <li><a href="shop-2-column.html">grid 2 columns</a></li>
                                                    <li><a href="shop-3-column.html">grid 3 columns</a></li>
                                                    <li><a href="shop-4-column.html">grid 4 columns</a></li>
                                                    <li><a href="shop-5-column.html">grid 5 columns</a></li>
                                                    <li><a href="shop-full-width.html">shop full width</a></li>
                                                    <li><a href="shop-list-left.html">shop list left</a></li>
                                                    <li><a href="shop-list-right.html">shop list right</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#!">shop pages</a>
                                                <ul>
                                                    <li><a href="shop-detail-left.html">shop details left</a></li>
                                                    <li><a href="shop-detail-right.html">shop details right</a></li>
                                                    <li><a href="shop-detail-tab-left.html">shop details tab left</a></li>
                                                    <li><a href="shop-detail-tab-right.html">shop details tab right</a></li>
                                                    <li><a href="cart.html">cart</a></li>
                                                    <li><a href="checkout.html">checkout</a></li>
                                                    <li><a href="compare.html">compare</a></li>
                                                    <li><a href="category.html">category</a></li>
                                                    <li><a href="wishlist.html">wishlist</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="project.html">blog</a>
                                        <ul>
                                            <li>
                                                <a href="#!">classic</a>
                                                <ul>
                                                    <li><a href="blog-left-sidebar.html">left sidebar</a></li>
                                                    <li><a href="blog-right-sidebar.html">right sidebar</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#!">grid</a>
                                                <ul>
                                                    <li><a href="blog-3-column.html">blog 3 columns</a></li>
                                                    <li><a href="blog-4-column.html">blog 4 columns</a></li>
                                                    <li><a href="blog-grid-left-sidebar.html">blog left sidebar</a></li>
                                                    <li><a href="blog-grid-right-sidebar.html">blog right sidebar</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#!">list</a>
                                                <ul>
                                                    <li><a href="blog-list-left.html">blog left sidebar</a></li>
                                                    <li><a href="blog-list-right.html">blog right sidebar</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#!">details</a>
                                                <ul>
                                                    <li><a href="blog-detail-left.html">details left sidebar</a></li>
                                                    <li><a href="blog-detail-right.html">details right sidebar</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="blog-fullpage.html">full page</a></li>
                                            <li><a href="blog-lifestyle.html">lifestyle</a></li>
                                            <li>
                                                <a href="#!">masonry</a>
                                                <ul>
                                                    <li><a href="blog-masonry-2-column.html">masonry 2 columns</a></li>
                                                    <li><a href="blog-masonry-3-column.html">masonry 3 columns</a></li>
                                                    <li><a href="blog-masonry-4-column.html">masonry 4 columns</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a href="contact.html">contact</a></li>
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
                categorys:[]
            }
        },
        mounted(){
            this.category()
        },
        methods:{
            category(){
                axios.get(`/category/list`).then(response=>{
                    this.categorys = response.data.data
                }).catch(error=>{
                    this.categorys = []
                })
            }
        }
    }
</script>

