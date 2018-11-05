<template>
    <div>
        <section id="eixos" class="bg-light">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 text-center">
                        <h2 class="section-heading">Eixos do Terceiro Plano Nacional de Enfrentamento ao Tráfico de pessoas</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4 col-sm-6 portfolio-item">
                        <a class="portfolio-link" data-toggle="modal" href="#eixosModal1">
                            <div class="portfolio-caption">
                                <h4>Gestão da Política</h4>
                            </div>
                        </a>
                    </div>
            
                    <div class="col-md-4 col-sm-6 portfolio-item">
                        <a class="portfolio-link" data-toggle="modal" href="#eixosModal2">
                            <div class="portfolio-caption">
                                <h4>Gestão da Informação</h4>
                            </div>
                        </a>
                    </div>

                    <div class="col-md-4 col-sm-6 portfolio-item">
                        <a class="portfolio-link" data-toggle="modal" href="#eixosModal3">
                            <div class="portfolio-caption">
                                <h4>Capacitação</h4>
                            </div>
                        </a>
                    </div>

                    <div class="col-md-4 col-sm-6 portfolio-item">
                        <a class="portfolio-link" data-toggle="modal" href="#eixosModal4">
                            <div class="portfolio-caption">
                                <h4>Responsabilização</h4>
                            </div>
                        </a>
                    </div>

                    <div class="col-md-4 col-sm-6 portfolio-item">
                        <a class="portfolio-link" data-toggle="modal" href="#eixosModal5">
                            <div class="portfolio-caption">
                                <h4>Assistência à Vítima</h4>
                            </div>
                        </a>
                    </div>

                    <div class="col-md-4 col-sm-6 portfolio-item">
                        <a class="portfolio-link" data-toggle="modal" href="#eixosModal6">
                            <div class="portfolio-caption">
                                <h4>Prevenção e Conscientização</h4>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
   
        <!-- Chamada do modal -->
        <primeiro-modal />
        <segundo-modal />
        <terceiro-modal />
        <quarto-modal />
        <quinto-modal />
        <sexto-modal />


    </div>
</template>

<script>
import PrimeiroModal from './modals/primeiro-modal.vue';
import SegundoModal from './modals/segundo-modal.vue';
import TerceiroModal from './modals/terceiro-modal.vue';
import QuartoModal from './modals/quarto-modal.vue';
import QuintoModal from './modals/quinto-modal.vue';
import SextoModal from './modals/sexto-modal.vue';

export default {
    components: {
    'primeiro-modal': PrimeiroModal,
    'segundo-modal': SegundoModal,
    'terceiro-modal': TerceiroModal,
    'quarto-modal': QuartoModal,
    'quinto-modal': QuintoModal,
    'sexto-modal': SextoModal
    }
}
</script>

