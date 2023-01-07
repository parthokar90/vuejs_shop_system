<template>
    <!-- start checkout area -->
    <section class="checkout-page checkout">
        <div class="container">
            <div class="row">
                <!-- billing -->
                <div class="col-lg-8">
                    <div class="billing-details">
                        <div class="title">
                            <h4>billing details</h4>
                        </div>
                        <div class="row">
                            <div class="col-lg-6 col-md-6">
                                <input type="text" placeholder="first name*" class="bill-input" required>
                            </div>
                            <div class="col-lg-6">
                                <input type="tel" placeholder="phone*" class="bill-input" required>
                            </div>
                            <div class="col-lg-12">
                                <select class="bill-input select">
                                    <option value="1">Bangladesh</option>
                                </select>
                            </div>
                            <div class="col-lg-12">
                                <input type="text" placeholder="street address*" class="bill-input" required>
                            </div>
                            <div class="col-lg-6">
                                <input type="text" placeholder="town/city*" class="bill-input" required>
                            </div>
                            <div class="col-lg-6">
                                <input type="number" placeholder="post code*" class="bill-input" required>
                            </div>
                            <div class="col-lg-12">
                                <input type="email" placeholder="email address*" class="bill-input" required>
                            </div>
                        </div>
                        <!-- notes -->
                        <div class="notes">
                            <textarea class="bill-input" placeholder="Notes about your order, e.g. special notes for delivery"></textarea>
                        </div>
                    </div>
                </div>
                <!-- order detail -->
                <div class="col-lg-4">
                    <div class="total-content">
                        <div class="title text-center">
                            <h5>your order</h5>
                        </div>
                        <div class="sub d-flex justify-content-between">
                            <p>Subtotal:</p>
                            <p>£220</p>
                        </div>
                            <div class="sub d-flex justify-content-between">
                            <p>Coupon:</p>
                            <p>£220</p>
                        </div>
                        <div class="checkout">
                            <div class="total d-flex justify-content-between">
                                <h5>total</h5>
                                <p>£220.00</p>
                            </div>
                            <a href="checkout.html" class="button-style1">proceed to checkout <span class="btn-dot"></span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- end checkout area -->
</template>