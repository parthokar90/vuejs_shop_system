<template>
<!-- start banner area -->
    <section class="inner-page banner" data-img="frontend/assets/images//banner.jpg">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2>account</h2>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb justify-content-center">
                          <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                          <li class="breadcrumb-item active" aria-current="page">account</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </section>
    <!-- end banner area -->

    <!-- start account area -->
    <section class="account-page account p80">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="item login text-center">
                        <h4>Login</h4>
                        <p>Login if you are a returning customer.</p>
                        <form action="#!">
                            <input type="email" placeholder="e-mail address" class="inputs">
                            <input type="password" placeholder="password" class="inputs">
                            <div class="remember d-flex justify-content-between">
                                <label for="terms1">
                                    remember me
                                    <input type="checkbox" class="check" id="terms1">
                                    <span class="check-custom"></span>
                                </label>
                                <a href="#!"><p>forgot password?</p></a>
                            </div>
                            <button type="submit" class="button-style1">login <span class="btn-dot"></span></button>
                        </form>
                        <span class="or">or</span>
                        <ul class="d-flex">
                            <li><a href="#!" class="fb">facebook</a></li>
                            <li><a href="#!" class="gl">google</a></li>
                            <li><a href="#!" class="tw">twitter</a></li>
                        </ul>
                        <h5>Don't Have an Account? Sign up now</h5>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="item signin">
                        <h4>Create an Account</h4>
                        <p>Register here if you are a new customer.</p>
                        <form action="#!">
                            <input type="text" placeholder="username" class="inputs">
                            <input type="email" placeholder="e-mail address" class="inputs">
                            <input type="password" placeholder="password" class="inputs">
                            <input type="password" placeholder="confirm password" class="inputs">
                            <button type="submit" class="button-style1">submit & register <span class="btn-dot"></span></button>
                            <label for="terms2">
                                I have read and agree to the terms & conditions 
                                <input type="checkbox" class="check" id="terms2">
                                <span class="check-custom"></span>
                            </label>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- end account area -->
</template>