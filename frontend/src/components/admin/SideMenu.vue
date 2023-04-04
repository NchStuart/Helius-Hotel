<template>
    <div class="side-menu__wrapper">
        <h2>Helius Hotel</h2>
        <ul class="side-menu__wrapper__list">
            <li>
                <RouterLink to="/admin/view-users">Ver usuários</RouterLink>
            </li>
            <!-- <li>
                <RouterLink to="/admin/view-reservations">Ver reservas</RouterLink>
            </li> -->
        </ul>
    </div>
</template>

<style scoped lang="scss">
@use "@/assets/scss/variables" as v;
    .side-menu__wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;

        background-color: v.$mainColorLightGrey;
        border-radius: .6rem;
        padding: 1rem;
        width: 14rem;
        margin: 0;

        &__list {
            display: flex;
            flex-direction: column;
            align-items: center;

            width: 100%;
            padding: 0;

            li {
                display: flex;
                justify-content: center;
                align-items: center;

                list-style: none;
                margin: .4rem 0;
                width: 80%;
                height: 2rem;
                border-radius: .6rem;

                a{
                    color: black;
                }

                &:hover {
                    background-color: v.$mainColorYellow;
                }
            }
        }

        h2 {
            width: 100%;
            text-align: center;
            padding: .4rem 0;
            margin: .4rem 0;
            border-bottom: 1px solid v.$mainColorBlack;
        }
    }
</style>