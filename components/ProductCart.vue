<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps({
    image: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    sizes: {
        type: Array as () => String[],
        default: () => []
    },
    colors: {
        type: Array as () => String[],
        default: () => []
    }

});
</script>
<template>
    <div class="w-[30%] py-2">
        <div class="product px-5 py-1 rounded-lg  border border-gray-400">
            <div class="cardw-full px-4 py-2">
                <img :src="props.image" class="rounded-lg w-full" />
            </div>
            <div class="card  ">
                <h2 class="text-xl font-bold text-purple-600 mb-2">{{ props.title }}</h2>
                <p class="text-xl font-bold text-purple-600 mb-2">{{ description }}</p>
                <p class="text-xl font-bold text-purple-600 mb-2">${{ price }}</p>
                <div v-if="sizes.length" class="mb-4">
                    <p class="text-sm text-black mb-1">Size</p>
                    <div class="flex space-x-2">
                        <span v-for="(size, index) in sizes" :key="index"
                            class="border border-purple-600 text-purple-600 px-3 py-1 rounded-lg cursor-pointer">
                            {{ size }}
                        </span>
                    </div>
                </div>
                <div v-if="colors.length" class="mb-4">
                    <p class="text-sm text-gray-500 mb-1">Color</p>
                    <div class="flex space-x-2">
                        <span v-for="(color, index) in colors" :key="index" :style="`background-color: ${color}`"
                            class="w-6 h-6 rounded-full border border-gray-300 cursor-pointer"
                            :class="{'bg-cyan-500': color==='red'}">
                        </span>   
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>
