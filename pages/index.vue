<!-- Floder Pages file index.vue -->
<script setup >
import { ref } from "vue";

const product = ref({
    _id: "",
    name: "",
    qty: "",
    price: "",
    isToggled : "Submit",
    update : "Update",
    delete : "Delete"
})

const total = computed(() =>{
    const qty  = parseInt(product.value.qty)  ;
    const price= parseFloat(product.value.price) ;
    return qty * price || "Total";
})
const onSubmit = async () => {
    try {
        if(isEditing.value){
            const response = await useFetch(`/api/posts/${product._id}`, {
                method: "PUT",
                body: {product:product.value,total:total.value}
            });
            console.log("Update Data Success...",response);
        }
        else{
            const response = await useFetch("/api/posts", {
                method: "POST",
                body: product.value,
            });
            console.log("Add Data Success...",response);
        }
  } catch (error) {
    console.error("Error submitting product data:", error);
    alert("Failed to submit product data.");
  }
}
// fetch api
const { data: posts, error }= await useFetch('/api/posts')
console.log(posts);

// update data
const isEditing = ref(false);

const btnUpdate=(item)=>{
     // Set the product data to the selected item
    product.value = {...item,update:"Update",delete:"Delete",isToggled:"Update"};
    isEditing.value = true;
    
}

// delete data
const btnDelete = () =>{
    alert(123)
}
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
                    <CardInput v-model="product.name" placeholder="Enter name"></CardInput>
                    <CardInput v-model="product.qty" placeholder="Enter qty"></CardInput>
                    <CardInput v-model="product.price" placeholder="Enter price"></CardInput>
                    <CardInput v-model="total" placeholder="total" disabled></CardInput>
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
            <table class="border-1 border-red-400 border-t-2 text-center">
                <thead>
                    <tr class=" border-b-2 border-red-400 border-1">
                        <th class="px-10 py-2 text-xl">Name</th>
                        <th class="px-10 py-2 text-xl">QTY</th>
                        <th class="px-10 py-2 text-xl">Price</th>
                        <th class="px-10 py-2 text-xl">Total</th>
                        <th class="px-10 py-2 text-xl">Action</th>
                    </tr>
                </thead>
                <tbody v-if="posts" class="">
                    <tr v-for="(item, key) in posts" :key="key">
                        <td class="px-10 py-2 text-xl">{{ item.name }}</td>
                        <td class="px-10 py-2 text-xl">{{ item.qty }}</td>
                        <td class="px-10 py-2 text-xl">{{ item.price }}$</td>
                        <td class="px-10 py-2 text-xl">{{item.qty*item.price}}$</td>
                        <td>
                            <ButtonSubmit v-model="product.update" variant="yellow" @click.stop="btnUpdate(item)" class="me-3 px-3">
                                {{ product.update }}
                            </ButtonSubmit>
                            <ButtonSubmit v-model="product.delete" variant="danger" @click.stop="btnDelete" class="px-3">
                                {{ product.delete }}
                            </ButtonSubmit>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>