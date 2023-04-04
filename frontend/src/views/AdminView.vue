<template>
    <div v-if="loginState && userLevel > 0" class="admin-view__wrapper">
        <div class="admin-view__wrapper__dashboard">
            <div class="admin-view__wrapper__dashboard__side-menu">
                <SideMenu />
            </div>
            <div class="admin-view__wrapper__dashboard__view">
                <h2>Painel Administrativo</h2>
                <RouterView />
            </div>
        </div>
    </div>
    <div v-else class="admin-view__wrapper">
        <h1>Acesso apenas para usuários administrativos.</h1>
    </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";
import SideMenu from "@/components/admin/SideMenu.vue";

const store = useStore()

const loginState = computed(() => store.getters.getLoginState)
const userLevel = computed(() => store.getters.getUserLevel)

</script>

<style scoped lang="scss">
@use "@/assets/scss/variables" as v;
    .admin-view__wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        
        margin: 2rem 0;

        &__dashboard {
            width: 80%;
            display: flex;
            justify-content: space-evenly;

            &__side-menu {
                display: flex;
                justify-content: center;
                align-items: center;

                width: 30%;
                margin: 0 1rem;
            }

            &__view {
                display: flex;
                flex-direction: column;
                align-items: center;
                flex-grow: 2;

                width: 70%;
            }
        }
    }
</style>