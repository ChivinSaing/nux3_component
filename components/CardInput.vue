<!-- CardInput.vue -->
<script setup lang="ts">
const props = defineProps({
    placeholder: {
        type: String,
        default: "",
    },
    disabled: {
        type: Boolean, // Correct usage
        default: false, // Default value for the prop
    },
})
const title = defineModel()
</script>
<template>
    <div class="card">
        <input type="text" v-model="title" class="mt-3 focus:ring-2 border border-blue-700 rounded-lg px-3 py-3 w-full"
            :placeholder="props.placeholder" :class="{ 'disabled:opacity-50 cursor-not-allowed': disabled }"
            :disabled="disabled" />
        <br>
    </div>
    <!-- <h1 class="text-xl ">{{ title }}</h1> -->
</template>
