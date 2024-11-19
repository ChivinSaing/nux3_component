<!-- CardInput.vue -->
<script setup lang="ts">

const props = defineProps({
    items: {
        type: Array<Object <any>>,
        required: true
    }
})

const vModelValue = defineModel()

</script>
<template>
    <div class="card" v-for="(item, index) in items" :key="index">
        <input 
            type="text" 
            v-model="titles[index]" 
            class="mt-3 focus:ring-2 border border-blue-700 rounded-lg px-3 py-3" 
            placeholder="Enter title"
        />
        <br>
    </div>
</template>

        
