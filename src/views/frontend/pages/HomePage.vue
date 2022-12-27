<script setup>
 import SpecialProduct from '../../../components/frontend/home/SpecialProduct.vue'
 import Offer from '../../../components/frontend/home/Offer.vue'
 import BestDeal from '../../../components/frontend/home/BestDeal.vue'
 import Blog from '../../../components/frontend/home/Blog.vue'
</script>

<template>
   <!-- start special area -->
      <SpecialProduct></SpecialProduct>
    <!-- end special area -->

    <!-- start best-deal area -->
      <BestDeal></BestDeal>
    <!-- end best-deal area -->

    <!-- start offer area -->
      <Offer></Offer>
    <!-- end offer area -->

    <!-- start blog area -->
      <Blog></Blog>
    <!-- end blog area -->
</template>
