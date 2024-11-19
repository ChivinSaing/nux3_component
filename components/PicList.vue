<script setup>
import { ref } from 'vue';

const options = [
    {
        value: 'option1',
        label: 'Option 01',
        description: 'Some optional item description to help the user better understand what this option is about.',
        icon: 'data:image/jpeg;base64,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' // Replace with actual paths to your icons
    },
    {
        value: 'option2',
        label: 'Option 02',
        description: 'Lorem ipsum dolor sit amet, quodsi eleifend ne has, usu habeo omnium percipitur ut.',
        icon: 'https://images.ladbible.com/resize?type=webp&quality=70&width=3840&fit=contain&gravity=auto&url=https://images.ladbiblegroup.com/v3/assets/bltcd74acc1d0a99f3a/blt1d6e70a8ba37a9ef/66e15d8eedc05c77debb403e/LADbible_-_iPhone_16_Amazon_pre-order_1.jpg'
    },
    {
        value: 'option3',
        label: 'Option 03',
        description: 'Nam in prima habemus, vero mucius accumsan eam cu. Eam quas nusquam delicatissimi ei.',
        icon: 'https://m.media-amazon.com/images/I/81axxWRTWzL._AC_UF894,1000_QL80_.jpg'
    }
];

const selectedOption = ref(null);

function selectOption(value,label,description) {
    // selectedOption.value = value;
    alert(`You selected: ${value}
                         ${label}
                         ${description}`);
}
// 
// const selectedProduct = ref()
const onSubmit = async() => {
    console.log(selectedProduct.value)
}
</script>
<!-- CardInput.vue -->
<template>

    <div class="py-2 w-[50%] border border-blue-500 mt-2 ml-4 rounded-lg">
        <div class="options-container">
            <h2>Select Visual Option</h2>
            <div
                v-for="option in options" 
                :key="option"
                :class="['option-item',{selected: option.value ===selectOption && option.label===selectOption && option.description ===selectOption }]"
                @click="selectOption(option.value,option.label,option.description)"
            >
                <div class="icon">
                    <img :src="option.icon" :alt="option.value" />
                </div>
                <div class="content">
                    <h3>{{ option.label}}</h3>
                    <p>description {{ option.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.options-container {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
}

.option-item {
    display: flex;
    align-items: center;
    padding: 16px;
    margin: 8px 0;
    border: 1px solid #ccc;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s;
}

.option-item:hover {
    background-color: #f9f9f9;
}

.option-item.selected {
    border-color: #007bff;
    background-color: #e7f3ff;
}

.icon img {
    width: 50px;
    height: 50px;
    margin-right: 16px;
}

.content h3 {
    margin: 0;
    font-size: 18px;
}

.content p {
    margin: 4px 0 0;
    font-size: 14px;
    color: #666;
}
</style>