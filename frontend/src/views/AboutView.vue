<template>
  <main>
    <section class="sobreSection">
      <article class="sobreArticle">
        <h1 class = "h1sobre">Sobre o Hotel</h1>
        <div class="sobre">
          <p>
            <img
              :src="require('../assets/images/areas01.jpg')"
              alt="Nosso Hotel"
              class="imgs"
            />
            O Hotel já está em funcionando há quase duas décadas, no inicio de
            2015 houve a troca de comando da direção, onde novas estruturas e
            readequações foram realizadas para melhor atender o hospede que
            procura um local aconchegante e limpo para passar a noite.
            <br />
            <br />A localização é previlegiada e o atendimento é diferenciado,
            contamos com profissionais experientes e capazes de entender a
            necessidade de quem está passando pela cidade a trabalho ou lazer.
          </p>
        </div>
      </article>
    </section>
    <section class="localizacao">
      <h1>Localização</h1>
      <div class="maps">
        Para saber onde residimos

        <a
          href="https://www.google.com.br/maps/dir/Jardim+Casa+Branca+-+Arapongas/Arapongas,+Paran%C3%A1/@-23.4346369,-51.4523286,1184m/data=!3m1!1e3!4m13!4m12!1m5!1m1!1s0x94eca3cc41030985:0x6d7490742db3d7e!2m2!1d-51.4483135!2d-23.4323178!1m5!1m1!1s0x94eca1617f92a5e1:0x597603d103d30bed!2m2!1d-51.4264069!2d-23.4157749"
          target="_blank"
        >
          clique aqui
        </a>
      </div>
    </section>
    <div class="servicos">
      <h1 class="h1serv">Nossos Serviços</h1>
      <ul>
        <li>
          <img
            width="100%"
            :src="require('../assets/images/comida.jpg')"
            alt="Cozinha especializada"
            class="loc"
          />
          <h3>Cozinha especializada</h3>
          <p class="servi">24 horas</p>
        </li>
        <li>
          <img
            width="100%"
            :src="require('../assets/images/academia.jpg')"
            alt="Academia"
            class="loc"
          />
          <h3>Academia</h3>
          <p class="servi">24 horas</p>
        </li>
        <li>
          <img
            width="100%"
            :src="require('../assets/images/piscina01.jpg')"
            alt="Piscina"
            class="loc"
          />
          <h3>Piscina de frente ao mar</h3>
          <p class ="servi">24 horas</p>
        </li>
      </ul>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime minus
        deserunt aliquid quia, asperiores excepturi natus fugit aut vitae omnis,
        culpa consequatur corrupti qui odio, voluptatum commodi. Neque, fugit
        deserunt?
      </p>
    </div>

    <article class="value">
      <div class="valuediv">
      <h1 class="h1value">Valores</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime minus
        deserunt aliquid quia, asperiores excepturi natus fugit aut vitae omnis,
        culpa consequatur corrupti qui odio, voluptatum commodi. Neque, fugit
        deserunt?
      </p>
    </div>
    </article>
  </main>
</template>

<script>
export default { name: "SobreView" };
</script>

<style lang="scss" scoped>
@use "@/assets/scss/_variables.scss" as v;

@media screen and (max-width: 550px) {
  .sobreSection {
    padding-top: 0rem;
    padding: 820;
  }
}
.sobreSection {
  .sobre {
   
    
    img {
      height: 10%;
      width: 50%;
    }

    @media screen and (max-width: 1200px) {
      flex-direction: column;

      p {
        text-align: justify;
        margin-bottom: 2.5rem;
      }
    }
  }
}
.h1sobre{
  padding-inline-start: 3.7rem;
  margin: 00px 117px 40px;
  text-align: center;
}

p,.sobre{
  margin: 00px -90px 50px;
}

h1 {
  margin: 10px 177px 20px;
  text-align: left;
}

h3 {
  margin: 10px 100px 20px;
  color: #f8f8f8;
  font-weight: bold;
}

p.servi{
  color: rgb(7, 58, 15);
  font-weight: bold;
}
.imgs {
  max-width: 96%;
  height: 100%;
  border-radius: 0.8rem;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
}
.localizacao {
  background-image: url("@/assets/images/loc3.jpg");
  display: flex;
  align-items: center;
  background-position: center;
  background-attachment: fixed;
  position: relative;
  height: 110vh;
  color: rgb(225, 228, 231);
}
.maps {
  background: #567961;
  font-size: 1.3em;
  padding: 1em;
  border-radius: 0.5em;
}
.maps a {
  color: #ffbf00;
  transition: 1s;
}
.maps a:hover {
  color: aqua;
  text-shadow: 0 0 8px aqua;
}

.loc {
  width: 300px;
  border-radius: 300%;
  box-shadow: 1px 1px 4px;
  margin-right: 20px;
}

img,
p {
  display: inline-block;
  align-items: center;
  display: flex;
}

ul {
  list-style: none;
  display: grid;
  grid-template-columns: 30% 30% 30%;
  justify-content: center;
  align-items: justify;
}
.localizacao {
  text-align: center;
}
.h1serv{
  margin: 0px 165px 70px;
 
  padding-top: 5.0rem;
}
.servicos {
  padding: 1.0rem;
  color: rgb(18, 19, 18);
  background-color: #ffbf00;

  width: 100%;
}

.h1value{
  
  padding-top: 1.0rem;
}
.value{
  margin: 0px 10px 70px;
   
 
}

p {
  margin: 10px 100px 20px;
  line-height: 1.4rem;
  text-align: justify;
  text-indent: 1.3rem;
  letter-spacing: 0.03rem;
  word-spacing: 0.3rem;
}
</style>
