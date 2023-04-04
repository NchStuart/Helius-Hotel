<template>
    <section>
        <TitleInitialDescription
          title="Entre em contato conosco"
          desc="Preencha o formulário abaixo e alguém de nossa equipe irá retornar o mais breve possível."
        />
        <form class="form">
            <div>
                <InputForm labelTitle="Nome:" />
            </div>
            <div>
                <InputForm labelTitle="Email:" type="email" />
            </div>
            <div>
                <InputForm labelTitle="Telefone:" type="tel" />
            </div>
            <div>
                <SelectForm 
                    labelTitle="Assunto:"
                    placeHolder="Selecione o assunto"
                    :optionsList="['Cancelamento de reserva', 'Ouvidoria', 'Departamento financeiro', 'Outros']"
                />
            </div>
            <div class="textArea-container">
                <TextAreaForm labelTitle="Mensagem" placeHolder="Deixe sua mensagem aqui" />
            </div>
            <button class="submitForm">Enviar</button>
        </form>
    </section>
</template>

<script>
import TitleInitialDescription from "../components/TitleInitialDescription.vue";
import InputForm from "../components/forms/InputForm.vue";
import SelectForm from "../components/forms/SelectForm.vue";
import TextAreaForm from "../components/forms/TextAreaForm.vue";

export default {
    name: 'ContatoView',
    components:{ TitleInitialDescription, InputForm, SelectForm, TextAreaForm}
}
</script>

<style lang="scss" scoped>
    section {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
    }

    .form {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .submitForm {
        background-color: #cba52a;
        color: #fff;
        border: none;
        border-radius: 30px;
        padding: 15px;
        width: 150px;
        height: 60px;
        margin-top: 50px;
        cursor: pointer;

        &:hover {
        background-color: #ecb90f;
        transition: 0.1s;
        }
    }
</style>