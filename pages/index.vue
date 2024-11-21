<!-- Floder Pages file index.vue -->
<script setup lang="ts">
import { ref } from "vue";

const product = ref({
    id: "",
    name: "",
    qty: "",
    price: "",
    isToggled : "Submit"
})

// const id = ref('')

const onSubmit = async () => {
    try {
    // Send product data to the backend API
    const response = await useFetch("/api/posts", {
      method: "POST",
      body: product.value,
    });

    console.log("Add Data Success...",response);
    
  } catch (error) {
    console.error("Error submitting product data:", error);
    alert("Failed to submit product data.");
  }
    
            
}
const { data: posts, error }: any = await useFetch('/api/posts')
console.log(posts);
</script>
<template>
    <div class="flex">
        <ProductCart
            image="https://image.uniqlo.com/UQ/ST3/us/imagesgoods/464151/item/usgoods_65_464151_3x4.jpg?width=300" ,
            title="Cloth" :price="490" description="Lorem ipsum dolor sit amet consectetur adipisicing"
            :sizes="['S', 'XS', 'M', 'L', 'XL']"
            :colors="['red', 'blue', 'pink', 'yellow', 'black', 'orange', 'green']" />
        <PicList />
    </div>
    <div class="py-5 px-5 mt-5 w-full">
        <div class="container flex justify-center">
            <div class="card w-[40rem] px-5 py-3 border border-cyan-500">
                <form action="" class="" @submit.prevent="onSubmit">
                    <CardInput v-model="product.id" placeholder="Enter id"></CardInput>
                    <CardInput v-model="product.name" placeholder="Enter name"></CardInput>
                    <CardInput v-model="product.qty" placeholder="Enter qty"></CardInput>
                    <CardInput v-model="product.price" placeholder="Enter price"></CardInput>
                    <ButtonSubmit v-model="product.isToggled" variant="danger">
                        {{ product.isToggled }}
                    </ButtonSubmit>
                </form>
            </div>
        </div>
    </div>
    <div class="container">
        <h1 v-if="error">Fetch Error{{ error }}</h1>
        <div class="px-10 flex justify-center">
            <table class="border-1 border-red-400 border-t-2  text-center">
                <thead>
                    <tr class="">
                        <th class="px-10 py-2 text-xl">Name</th>
                        <th class="px-10 py-2 text-xl">QTY</th>
                        <th class="px-10 py-2 text-xl">Price</th>
                    </tr>
                </thead>
                <tbody v-if="posts">
                    <tr  v-for="(item, key) in posts" :key="key">
                        <td class="px-10 py-2 text-xl">{{ item.name }}</td>
                        <td class="px-10 py-2 text-xl">{{ item.qty }}</td>
                        <td class="px-10 py-2 text-xl">{{ item.price }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
