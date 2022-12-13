<script setup>
 import Fancybox from '../../../components/frontend/home/FancyBox.vue'
 import Banner from '../../../components/frontend/home/Banner.vue'
 import Category from '../../../components/frontend/home/Category.vue'
 import BestSale from '../../../components/frontend/home/BestSale.vue'
 import BestSeller from '../../../components/frontend/home/BestSeller.vue'
 import SpecialProduct from '../../../components/frontend/home/SpecialProduct.vue'
 import Offer from '../../../components/frontend/home/Offer.vue'
 import BestDeal from '../../../components/frontend/home/BestDeal.vue'
 import Download from '../../../components/frontend/home/Download.vue'
 import Blog from '../../../components/frontend/home/Blog.vue'
</script>

<template>
   <!-- start fancybox area -->
       <Fancybox></Fancybox>
   <!-- end fancybox area -->

    <!-- start banner area -->
       <Banner></Banner>
    <!-- end banner area -->

    <!-- start category area -->
       <Category></Category>
    <!-- end category area -->

    <!-- start best-sale area -->
        <BestSale></BestSale>
    <!-- end best-sale area -->

    <!-- start seller area -->
        <BestSeller></BestSeller>
    <!-- end seller area -->

    <!-- start special area -->
      <SpecialProduct></SpecialProduct>
    <!-- end special area -->

    <!-- start offer area -->
      <Offer></Offer>
    <!-- end offer area -->

    <!-- start best-deal area -->
      <BestDeal></BestDeal>
    <!-- end best-deal area -->

    <!-- start download area -->
       <Download></Download>
    <!-- end download area -->

    <!-- start blog area -->
      <Blog></Blog>
    <!-- end blog area -->
</template>
