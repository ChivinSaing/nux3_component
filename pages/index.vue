<!-- Floder Pages file index.vue -->
<script setup lang="ts">
const product ={
    texts :ref('Hello World'),
    description:ref('Description hello'),
    price:ref("5000")
}

</script>
<template>
    <div class="flex">
            <ProductCart
                image="https://image.uniqlo.com/UQ/ST3/us/imagesgoods/464151/item/usgoods_65_464151_3x4.jpg?width=300",
                title="Cloth"
                :price="490"
                description="Lorem ipsum dolor sit amet consectetur adipisicing"
                :sizes="['S','XS','M', 'L', 'XL']"
                :colors="['red', 'blue','pink','yellow','black','orange','green']"
            />
        <PicList />
    </div>
    <div class="py-5 px-5 border border-blue-700 h-72">
        <div class="container">
            <div class="card ">
                <form action="" class="">                 
                    <CardInput v-model:text="product.texts" placeholder="Enter text"></CardInput>
                    
                    <CardInput v-model:text="product.description" placeholder="Enter description"></CardInput>
                    <CardInput v-model:text="product.price" placeholder="Enter price"></CardInput>

                </form>
            </div>
        </div>
    </div>
</template>


