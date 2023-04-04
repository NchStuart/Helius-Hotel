<template>
    <div class="users-list__wrapper">
        <table class="users-list__wrapper__table">
            <thead class="users-list__wrapper__table__table-head">
                <tr>
                    <td>Nome</td>
                    <td>E-mail</td>
                    <td>Nível de Usuário</td>
                </tr>
            </thead>
            <tbody class="users-list__wrapper__table__table-body">
                <tr v-for="user in users" :key="user.email">
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.userLevel }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore()

const users = computed(() => store.getters.getUsers)
</script>

<style scoped lang="scss">
@use "@/assets/scss/variables" as v;
.users-list__wrapper {
    &__table {
        border-collapse: collapse;

        &__table-head {
            td {
                background-color: v.$mainColorBlack;
                color: v.$mainColorWhite;
                text-align: center;
                padding: .6rem .8rem;
            }
        }

        &__table-body {
            tr {
                &:hover {
                    background-color: v.$mainColorYellow;
                    color: v.$mainColorWhite;
                }
            }

            td{
                padding: .4rem .8rem;
            }
        }
    }
}
</style>