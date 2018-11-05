<template>
  <div>
    <!-- NavBar do index -->
    <index-navbar />
    <!-- Header do index -->
     <header>
        <div class="container">
            <div class="intro-text">
                <div class="intro-heading">Plataforma de Monitoramento</div>
                <div class="intro-lead-in">3º Plano Nacional de Enfrentamento ao Tráfico de Pessoas</div>
                <a href="#sobre" class="page-scroll btn btn-xl">Saiba Mais!</a>
            </div>
        </div>
    </header>
    <!-- Sobre -->
    <index-sobre />
    <!-- Implementadores -->
    <index-implementadores />
    <!-- Eixos -->
    <index-eixos />
    <!-- Footer -->
    <index-footer />
  </div>
</template>

<script>
import NavBar from './nav/NavBar.vue';
import Sobre from './sobre/Sobre.vue';
import Implementadores from './implementadores/Implementadores.vue';
import Eixos from './eixos/Eixos.vue';
import Footer from './footer/Footer.vue';
export default {
    components: {
      'index-navbar': NavBar,
      'index-sobre': Sobre,
      'index-implementadores': Implementadores,
      'index-eixos': Eixos,
      'index-footer': Footer
    }
}
</script>

