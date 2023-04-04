<template>
    <div class="reservations-list__wrapper">
        <table class="reservations-list__wrapper__table">
            <thead class="reservations-list__wrapper__table__table-head">
                <tr>
                    <td>CPF</td>
                    <td>Nome</td>
                    <td>Check-in</td>
                    <td>Check-out</td>
                    <td>Data de Nascimento</td>
                    <td>Quantidade de Pessoas</td>
                </tr>
            </thead>
            <tbody class="reservations-list__wrapper__table__table-body">
                <tr v-for="reservation in reservations" :key="reservation.cpf">
                    <td>{{ reservation.cpf }}</td>
                    <td>{{ reservation.nome }}</td>
                    <td>{{ reservation.dataCheckIn }}</td>
                    <td>{{ reservation.dataCheckOut }}</td>
                    <td>{{ reservation.dataNascimento }}</td>
                    <td>{{ reservation.totalPeople }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore()

const reservations = computed(() => store.getters.getReservations)
</script>

<style scoped lang="scss">
@use "@/assets/scss/variables" as v;
.reservations-list__wrapper {
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