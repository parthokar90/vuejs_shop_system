<template>
 <!-- start banner area -->
    <section class="inner-page banner" data-img="frontend/assets/images//banner.jpg">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2>checkout</h2>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb justify-content-center">
                          <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                          <li class="breadcrumb-item"><a href="shop-detail.html">shop</a></li>
                          <li class="breadcrumb-item active" aria-current="page">checkout</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </section>
    <!-- end banner area -->

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
                            <div class="col-lg-6 col-md-6">
                                <input type="text" placeholder="last name*" class="bill-input" required>
                            </div>
                            <div class="col-lg-12">
                                <input type="text" placeholder="company name (optional)" class="bill-input">
                            </div>
                            <div class="col-lg-12">
                                <select class="bill-input select">
                                    <option value="1">Bangladesh</option>
                                    <option value="2">United State</option>
                                    <option value="3">London</option>
                                    <option value="4">Canada</option>
                                    <option value="5">India</option>
                                    <option value="5">South Africa</option>
                                    <option value="5">Dubai</option>
                                    <option value="5">Albania</option>
                                </select>
                            </div>
                            <div class="col-lg-12">
                                <input type="text" placeholder="street address*" class="bill-input" required>
                            </div>
                            <div class="col-lg-12">
                                <input type="text" placeholder="apparments*" class="bill-input" required>
                            </div>
                            <div class="col-lg-6">
                                <input type="text" placeholder="town/city*" class="bill-input" required>
                            </div>
                            <div class="col-lg-6">
                                <input type="text" placeholder="state/country*" class="bill-input" required>
                            </div>
                            <div class="col-lg-6">
                                <input type="number" placeholder="post code*" class="bill-input" required>
                            </div>
                            <div class="col-lg-6">
                                <input type="tel" placeholder="phone*" class="bill-input" required>
                            </div>
                            <div class="col-lg-12">
                                <input type="email" placeholder="email address*" class="bill-input" required>
                            </div>
                        </div>
                        <div class="create">
                            <!-- card 1 -->
                            <div class="accordion-item">
                                <div class="accordion-header" id="headingOne">
                                    <h5 class="mb-0">
                                        <label for="term1" class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Create an Account    
                                            <input type="checkbox" class="check" id="term1">
                                            <span class="check-custom"></span>
                                        </label>
                                    </h5>
                                </div>
                                <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <div class="row">
                                            <div class="col-lg-12">
                                            <input type="password" placeholder="password" class="bill-input">
                                            </div>
                                            <div class="col-lg-12">
                                            <input type="password" placeholder="confirm password" class="bill-input">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- card 2 -->
                            <div class="accordion-item">
                                <div class="accordion-header" id="headingTwo">
                                    <h5 class="mb-0">
                                        <label for="term2" class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Ship to a Different Address
                                            <input type="checkbox" class="check" id="term2">
                                            <span class="check-custom"></span>
                                        </label>
                                    </h5>
                                </div>
                                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <div class="row">
                                            <div class="col-lg-6">
                                                <input type="text" placeholder="first name*" class="bill-input" required>
                                            </div>
                                            <div class="col-lg-6">
                                                <input type="text" placeholder="last name*" class="bill-input" required>
                                            </div>
                                            <div class="col-lg-12">
                                                <input type="text" placeholder="company name (optional)" class="bill-input">
                                            </div>
                                            <div class="col-lg-12">
                                                <input type="text" placeholder="street address*" class="bill-input" required>
                                            </div>
                                            <div class="col-lg-12">
                                                <input type="text" placeholder="apparments*" class="bill-input" required>
                                            </div>
                                            <div class="col-lg-6">
                                                <input type="text" placeholder="town/city*" class="bill-input" required>
                                            </div>
                                            <div class="col-lg-6">
                                                <input type="text" placeholder="state/country*" class="bill-input" required>
                                            </div>
                                            <div class="col-lg-6">
                                                <input type="number" placeholder="post code*" class="bill-input" required>
                                            </div>
                                            <div class="col-lg-6">
                                                <input type="tel" placeholder="phone*" class="bill-input" required>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
                        <div class="ship">
                            <p>Shipping:</p>
                            <div class="d-flex justify-content-between">
                                <p>Free Shipping</p>
                                <p>£0.00</p>
                            </div>
                            <div class="d-flex justify-content-between">
                                <p>Standard</p>
                                <p>£20.00</p>
                            </div>
                            <div class="d-flex justify-content-between">
                                <p>Express</p>
                                <p>£10.00</p>
                            </div>
                        </div>
                        <div class="checkout">
                            <div class="total d-flex justify-content-between">
                                <h5>total</h5>
                                <p>£220.00</p>
                            </div>
                            <label class="input-container">
                                <span>Direct Bank Transfer</span>
                                <input type="radio" name="radio" checked>
                                <span class="checkmark"></span>
                            </label>
                            <label class="input-container">
                                <span>Check Payments</span>
                                <input type="radio" name="radio">
                                <span class="checkmark"></span>
                            </label>
                            <label class="input-container">
                                <span>Cash on Delivery</span>
                                <input type="radio" name="radio">
                                <span class="checkmark"></span>
                            </label>
                            <a href="checkout.html" class="button-style1">proceed to checkout <span class="btn-dot"></span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- end checkout area -->
</template>