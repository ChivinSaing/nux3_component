<!-- CardInput.vue -->
<script setup lang="ts">
 const props= defineProps({
    placeholder:{
        type:String,
    }
 })
const title = defineModel()
</script>
<template>
    <div class="card">
        <input 
            type="text" 
            v-model="title"
            class="mt-3 focus:ring-2 border border-blue-700 rounded-lg px-3 py-3 w-full" 
           :placeholder="props.placeholder"
        />
        <br>
    </div>
    <!-- <h1 class="text-xl ">{{ title }}</h1> -->
</template>

        
