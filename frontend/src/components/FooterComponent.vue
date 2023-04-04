<template>
    <footer id="footerHotel" class="footer-wrapper">
        <div class="footer-news">
            <p>Receba novidades e promoções no seu e-mail.</p>
            <img src="" alt="">
            <div class="footer-news--submit">
                <input type="email" class="footer-news--email" placeholder="Cadastre seu e-mail aqui...">
                <button class="footer-news-btn">&rarr;</button>
            </div>
        </div>
        <div class="footer-social">
            <img class="footer-social--image" :src="require('@/assets/images/facebook.png')">
            <img class="footer-social--image"  :src="require('@/assets/images/whatsapp.png')">
            <img class="footer-social--image" :src="require('@/assets/images/instagram.png')">
        </div>
        <div class="footer-content">
            <p class="footer-content--desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, ad?</p>
            <div class="footer-content--text-area">
                <div class="footer-content--text-area-block">
                    <a class="footer-link" href="">Pousada</a>
                    <a class="footer-link" href="">Acomodações</a>
                    <a class="footer-link" href="">Gastronomia</a>
                </div>
                <div class="footer-content--text-area-block">
                    <a class="footer-link" href="">Eventos</a>
                    <a class="footer-link" href="">Lazer</a>
                </div>
                <div class="footer-content--text-area-block">
                    <a class="footer-link" href="">Reservas</a>
                    <a class="footer-link" href="">Contato</a>
                </div>
                <div class="footer-content--text-area-block">
                    <a class="footer-link dif" href=""><i>&#128506</i> Veja o mapa</a>
                    <a class="footer-link dif" href="">(11) 99262-4223</a>
                    <a class="footer-link" href="">(61) 99764-6734</a>
                </div>
                <div class="footer-content--text-area-block">
                    <p><b>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</b> Incidunt hic optio fugit quam corporis nam omnis iusto dolores error veniam!</p>
                </div>
            </div>

            <div class="footer-logo">
                <img src="">
                <p></p>
                <span class="footer-icon"></span>
            </div>
        </div>

        <div class="footer-copy">
            <p>&copy;2022 - Todos os direitos reservados</p>
        </div>
    </footer>
</template>

<style scoped lang="scss">
    @use "@/assets/scss/variables" as v;

    .footer-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: column;
        color: #fff;
        background-color: #153131;
        width: 100%;
        margin-top: 180px;
        position: relative;
    }

    a {
        text-decoration: none;
        color: #fff;
    }

    .footer-news {
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex-wrap: wrap;
        align-items: center;
        position: absolute;
        top: -120px;
        height: 36%;
        width: 90%;
        background-color: #1a5c38;

        & p {
            font-size: 26px;
            line-height: 40px;
            padding-left: 20px;
            text-align: center;
            padding: 20px;
        }

        .footer-news--submit {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: nowrap;
            width: 100%;
            margin-top: 30px;

            & input {
                width: 100%;
                max-width: 360px;
                height: 40px;
                background: transparent;
                border: 0;
                border-bottom: 1px solid #fff;
                margin-right: 5px;
                color: #fff;
                font-size: 17px;

                &::placeholder {
                    color: #fff;
                    font-size: 17px;
                }

                &:focus {
                    outline: none;
                    border: none;
                    border-bottom: 1px solid #fff;
                }
            }

            & button {
                height: 40px;
                width: 65px;
                border-radius: 25px;
                border: none;
                font-size: 30px;
                color: #7eb897;
                cursor: pointer;

                &:hover {
                    background-color: #162f21;
                    color: #fff;
                    transition: all ease 0.3s;
                }
            }
        }
    }

    .footer-social {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 360px;
        width: 100%;

        &--image {
            height: 35px;
            width: 35px;
            margin-right: 50px;
            transition: all ease 0.2s;
            cursor: pointer;

            &:nth-child(3) {
                margin-right: 0px;
            }

            &:hover {
                transform: scale(1.2);
            }
        }
    }

    .footer-content {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 95%;
        padding: 50px;

        &--desc {
            font-size: 22px;
        }

        &--text-area {
            display: flex;
            justify-content: space-between;
            width: 100%;
            flex-wrap: wrap;
            margin-top: 50px;

            &-block {
                display: flex;
                flex-direction: column;
                font-size: 14px;
                margin-right: 50px;
                margin-top: 50px;

                &:nth-child(5) {
                    right: 0;
                    width: 200px;
                    flex-wrap: wrap;
                }

                .footer-link {
                    margin-bottom: v.$marginbottomfooter;

                    & i {
                        padding-right: 10px;
                    }

                    &:hover {
                        color: #b79829;
                        transition: all ease 0.2s;
                    }
                }

                .dif {
                    color: #b79829;

                    &:hover {
                        color: rgb(226, 199, 43);
                        transition: all ease 0.2s;
                    }
                }
            }
        }
    }

    .footer-content--text-area-block{
        line-height: 23px;
    }

    .footer-copy {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        font-size: 12px;
        margin-bottom: 50px;
    }

    @media (max-width:550px) {

        .footer-news {
            height: 32%;
            top: -145px;
            .footer-news--submit{
                flex-direction: column;
                padding: 20px;
    
                .footer-news--email {
                    &::placeholder{
                        font-size: 15px;
                    }
                }
    
                button {
                    margin-top: 30px;
                }
            }
        }
    }
</style>

<script>
export default {
    name: "FooterComponent"
}
</script>