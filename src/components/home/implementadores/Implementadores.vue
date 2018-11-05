<template>
    <section class="py-5" id="implementadores">
        <div class="container">
            <div class="row">
                <div class="owl-carousel" id="trigger-do-javascript-para-fazer-o-carousel-funcionar">
                    <div class="item">
                        <div class="col-xs-12 col-sm-6 col-md-4">
                            <img class="d-block" src="../../../assets/ministerios/dpu.png" alt="Defensoria Pública da União">
                        </div>
                    </div>
                    <div class="item">
                        <div class="col-xs-12 col-sm-6 col-md-4">
                            <img class="d-block" src="../../../assets/ministerios/dpu.png" alt="Escola Nacional de Administração Pública">
                        </div>
                    </div>
                    <div class="item">
                        <div class="col-xs-12 col-sm-6 col-md-4">
                            <img class="d-block" src="../../../assets/ministerios/ministerio_direitos_humanos.png" alt="Ministério dos Direitos Humanos">
                        </div>
                    </div>
                    <div class="item">
                        <div class="col-xs-12 col-sm-6 col-md-4">
                            <img class="d-block" src="../../../assets/ministerios/ministerio_desenvolvimento_social.png" alt="Ministério do Desenvolvimento Social">
                        </div>
                    </div>
                    <div class="item">
                        <div class="col-xs-12 col-sm-6 col-md-4">
                            <img class="d-block" src="../../../assets/ministerios/ministerio_educacao.png" alt="Ministério da Educação">
                        </div>
                    </div>
                    <div class="item">
                        <div class="col-xs-12 col-sm-6 col-md-4">
                            <img class="d-block" src="../../../assets/ministerios/ministerio_relacoes_exteriores.png" alt="Ministério das Relações Exteriores">
                        </div>
                    </div>
                    <div class="item">
                        <div class="col-xs-12 col-sm-6 col-md-4">
                            <img class="d-block" src="../../../assets/ministerios/ministerio_seguranca_publica.png" alt="Ministério da Segurança Pública">
                        </div>
                    </div>
                    <div class="item">
                        <div class="col-xs-12 col-sm-6 col-md-4">
                            <img class="d-block" src="../../../assets/ministerios/ministerio_trabalho.png" alt="Ministério do Trabalho">
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    </section>
</template>

<script>
$(document).ready(function() {
    $("#trigger-do-javascript-para-fazer-o-carousel-funcionar").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 3 seconds
        itemsCustom : [
            [0, 2],     // menos de 450px mostra 2 itens
            [450, 4],   // em 450px mostra 4 itens
            [600, 7],   // em 600px mostra 7 itens
            [700, 9],   // em 700px mostra 9 itens
            [1000, 10], // em 1000px mostra 10 itens
            [1200, 12], // em 1200px mostra 12 itens
        ],
    });
});
</script>

<style scoped>

</style>

