<!-- Floder Pages file index.vue -->
<script setup lang="ts">
 const texts = ref('Hello World');
 const description = ref('Description hello');
</script>
<template>
    <!-- <div class="flex">
            <ProductCart
                image="https://image.uniqlo.com/UQ/ST3/us/imagesgoods/464151/item/usgoods_65_464151_3x4.jpg?width=300",
                title="Cloth"
                :price="490"
                description="Lorem ipsum dolor sit amet consectetur adipisicing"
                :sizes="['S','XS','M', 'L', 'XL']"
                :colors="['red', 'blue','pink','yellow','black','orange','green']"
            />
        <PicList />
    </div> -->
    <div class="py-5 px-5 border border-blue-700 h-72 bg-green-600">
        <div class="container">
            <div class="card ">
                <form action="" class="">                 
                    <CardInput></CardInput>
                    <h1 class="text-xl ">{{ texts }}</h1>
                    <h1 class="text-xl ">{{ description }}</h1>
                </form>
            </div>
        </div>
    </div>
</template>


