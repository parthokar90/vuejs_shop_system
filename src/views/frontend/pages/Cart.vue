<template>
    <!-- start account area -->
    <section class="cart-page cart-detail">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <form action="#!">
                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">image</th>
                                        <th scope="col">product name</th>
                                        <th scope="col">price</th>
                                        <th scope="col">quantity</th>
                                        <th scope="col">total</th>
                                        <th scope="col">delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row" class="pro-img">
                                            <a href="shop-4-column-sidebar.html">
                                                <img src="frontend/frontend/assets/images//cart/cart1.jpg" alt="Cart"/>
                                            </a>
                                        </th>
                                        <td class="pro-name">
                                            <a href="shop-4-column-sidebar.html">Flower Check Flannel Jacket</a>
                                        </td>
                                        <td class="pro-price"><p>$210</p></td>
                                        <td class="pro-quantity">
                                            <div class="d-flex number-spinner justify-content-center">
                                                <input type="text" class="form-control text-center input-value" value="1">
                                                <div class="buttons">
                                                    <button data-dir="up" class="up-btn"><i class="flaticon-plus"></i></button>
                                                    <button data-dir="dwn" class="down-btn"><i class="flaticon-remove"></i></button>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="pro-total"><p>$210</p></td>
                                        <td class="pro-delete">
                                            <a href="#!">
                                                <i class="flaticon-delete"></i>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row" class="pro-img">
                                            <a href="shop-4-column-sidebar.html">
                                                <img src="frontend/assets/images//cart/cart2.jpg" alt="Cart"/>
                                            </a>
                                        </th>
                                        <td class="pro-name">
                                            <a href="shop-4-column-sidebar.html">Checked Hoodies Woo</a>
                                        </td>
                                        <td class="pro-price"><p>$199</p></td>
                                        <td class="pro-quantity">
                                            <div class="d-flex number-spinner justify-content-center">
                                                <input type="text" class="form-control text-center input-value" value="2">
                                                <div class="buttons">
                                                    <button data-dir="up" class="up-btn"><i class="flaticon-plus"></i></button>
                                                    <button data-dir="dwn" class="down-btn"><i class="flaticon-remove"></i></button>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="pro-total"><p>$398</p></td>
                                        <td class="pro-delete">
                                            <a href="#!">
                                                <i class="flaticon-delete"></i>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row" class="pro-img">
                                            <a href="shop-4-column-sidebar.html">
                                                <img src="frontend/assets/images//cart/cart3.jpg" alt="Cart"/>
                                            </a>
                                        </th>
                                        <td class="pro-name">
                                            <a href="shop-4-column-sidebar.html">fashionable mini skirt</a>
                                        </td>
                                        <td class="pro-price"><p>$299</p></td>
                                        <td class="pro-quantity">
                                            <div class="d-flex number-spinner justify-content-center">
                                                <input type="text" class="form-control text-center input-value" value="1">
                                                <div class="buttons">
                                                    <button data-dir="up" class="up-btn"><i class="flaticon-plus"></i></button>
                                                    <button data-dir="dwn" class="down-btn"><i class="flaticon-remove"></i></button>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="pro-total"><p>$299</p></td>
                                        <td class="pro-delete">
                                            <a href="#!">
                                                <i class="flaticon-delete"></i>
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="coupon-area d-flex justify-content-between">
                            <div class="coupon-input">
                                <input type="text" placeholder="coupon code" class="inputs">
                                <button class="button-style1">apply coupon <span class="btn-dot"></span></button>
                            </div>
                            <button type="submit" class="button-style1">update cart <span class="btn-dot"></span></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    <!-- end account area -->

    <!-- start cart-total area -->
    <section class="cart-page cart-total">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 offset-lg-3">
                    <div class="total-content">
                        <div class="title text-center">
                            <h5>cart total</h5>
                        </div>
                        <div class="sub d-flex justify-content-between">
                            <p>Subtotal:</p>
                            <p>£220</p>
                        </div>
                        <div class="ship">
                            <p>Shipping:</p>
                            <label class="input-container">
                                <span class="d-flex justify-content-between">
                                    <span>free shipping</span>
                                    <span>£0.00</span>
                                </span>
                                <input type="radio" checked="checked" name="radio">
                                <span class="checkmark"></span>
                            </label>
                            <label class="input-container">
                                <span class="d-flex justify-content-between">
                                    <span>standard</span>
                                    <span>£20.00</span>
                                </span>
                                <input type="radio" name="radio">
                                <span class="checkmark"></span>
                            </label>
                            <label class="input-container">
                                <span class="d-flex justify-content-between">
                                    <span>express</span>
                                    <span>£10.00</span>
                                </span>
                                <input type="radio" name="radio">
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        <div class="estimate">
                            <h5>Estimate for Your Country</h5>
                            <a href="#!"><p><u>Change address</u></p></a>
                        </div>
                        <div class="checkout">
                            <div class="d-flex justify-content-between">
                                <h5>total</h5>
                                <p>£220.00</p>
                            </div>
                            <RouterLink to="/checkout" class="button-style1">checkout <span class="btn-dot"></span></RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- end cart-total area -->
</template>