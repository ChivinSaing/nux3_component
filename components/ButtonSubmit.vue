<template>
  <button
    :class="[
      'inline-flex items-center mt-5 px-10 py-2 justify-center font-medium rounded transition-colors duration-300',
      variantClass,
    ]"
    :type="type"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "danger" | "yellow";
}>();

// Default prop values
const type = props.type ?? "submit";
const variant = props.variant ?? "danger" ?? "primary" ?? "secondary" ?? "yellow";

// Dynamic class based on props
const variantClass = {
  primary  : "bg-blue-700 text-white hover:bg-blue-600",
  secondary: "bg-gray-700 text-white hover:bg-gray-600",
  danger   : "bg-red-500 text-white hover:bg-green-400",
  yellow   : "bg-yellow-400 text-white hover:bg-blue-600",
}[variant];
</script>