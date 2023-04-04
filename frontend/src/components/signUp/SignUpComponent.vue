<template>
    <div class="signup-component__wrapper">
        <a href="#" @click="toggleSignUpModal">Cadastre-se</a>
        <SignUpModal @close-modal="toggleSignUpModal" :render-modal="showModal" />
    </div>
</template>

<script setup>
import SignUpModal from "./SignUpModal.vue";
import { ref } from "vue"

const showModal = ref(false)

function toggleSignUpModal() {
    showModal.value = !showModal.value
}

</script>