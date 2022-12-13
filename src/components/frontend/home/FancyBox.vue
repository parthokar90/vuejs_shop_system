<template>
  <div class="home3 fancybox">
    <div class="fancybox-bg"></div>
    <div class="fancybox-content">
        <div class="row">
            <div class="col-md-6 img-area">
                <div class="popup-img">
                    <img src="frontend/assets/images//fancybox/img3.jpg" alt="Popup">
                </div>
            </div>
            <div class="col-md-6">
                <div class="popup-content text-center" data-img="frontend/assets/images//fancybox/shape.png">
                    <h2>Get 20% Discount Shipped To Your Inbox</h2>
                    <h5>sign up newsletter</h5>
                    <p>Enjoy our newsletter to stay updated with the latest news and special sales. Let's your email address here!</p>
                    <form action="#!">
                        <div class="d-flex justify-content-center">
                            <input type="email" placeholder="Enter your email" class="inputs">
                            <button type="submit" class="button-style1">subscribe <span class="btn-dot"></span></button>
                        </div>
                        <label for="term">
                            <input type="checkbox" class="check" id="term">
                            <span class="check-custom"></span>
                            don't show again
                        </label>
                    </form>
                </div>
            </div>
        </div>
        <div class="close-fancy">
            <button>
                <i class="fas fa-times"></i>
            </button>
        </div>
    </div>
   </div>
</template>