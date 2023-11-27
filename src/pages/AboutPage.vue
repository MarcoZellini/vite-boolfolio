<template>
    <AboutHero />

    <div id="background" class="bg-secondary-subtle py-5">
        <div class="container">
            <div class="row flex-row-reverse">
                <div class="col-12 col-lg-6 mb-5 mb-mlg-0">
                    <div class="d-flex flex-column justify-content-around h-100">
                        <h1>
                            Attualmente sto completando gli studi per diventare un <span
                                class="d-inline-block mx-auto fw-bold text-warning bg_dark px-2 py-1 rounded-1 text-capitalize mb-1 my-lg-2">Jr.
                                Full Stack Web Developer</span> presso <span
                                class="d-inline-block mx-auto fw-bold text-warning bg_dark px-2 py-1 rounded-1 text-capitalize mb-1 my-lg-2">Boolean
                                Careers.</span>
                        </h1>

                        <div class="fs-3">
                            Nel corso degli studi, ho acquisito competenze fondamentali in
                            <span
                                class="d-inline-block fw-bold text-warning bg_dark px-2 py-1 rounded-1 text-capitalize mb-1 mx-1 my-lg-2"
                                v-for="technology in this.technologies">{{ technology.name }}</span> e ho messo in pratica
                            queste
                            conoscenze attraverso progetti stimolanti.
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-6">
                    <img class="img-fluid" src="../assets/img/undraw_static_assets_rpm6.svg" alt="">
                </div>
            </div>
        </div>
    </div>

    <div id="filosophy" class="bg_dark text-white py-5">
        <div class="container">
            <div class="row">

                <div class="col-12 col-lg-6 mb-5 mb-lg-0">
                    <div class="d-flex flex-column justify-content-around h-100">
                        <h1>
                            Credo che ogni problema possa essere affrontato con
                            <span
                                class="d-inline-block mx-auto fw-bold text-warning bg_primary px-2 py-1 rounded-1 text-capitalize my-2">determinazione
                            </span>
                            e
                            <span
                                class="d-inline-block mx-auto fw-bold text-warning bg_primary px-2 py-1 rounded-1 text-capitalize my-2">creatività.
                            </span>
                        </h1>
                        <div class="fs-3">
                            La mia filosofia di sviluppo si basa sulla <span
                                class="d-inline-block mx-auto fw-bold text-warning bg_primary px-2 py-1 rounded-1 text-capitalize my-1">curiosità
                            </span> continua e sulla volontà di <span
                                class="d-inline-block mx-auto fw-bold text-warning bg_primary px-2 py-1 rounded-1 text-capitalize my-1">sperimentare
                            </span>
                            nuove
                            idee.
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-6">
                    <img class="img-fluid" src="../assets/img/undraw_hacker_mindset_re_8a33.svg" alt="">
                </div>
            </div>
        </div>
    </div>

    <div id="goal" class="bg-secondary-subtle py-5">
        <div class="container">
            <div class="row flex-row-reverse">
                <div class="col-12 col-lg-6 mb-5 mb-mlg-0">
                    <div class="d-flex flex-column justify-content-around h-100">
                        <h1>
                            Il mio
                            <span
                                class="d-inline-block mx-auto fw-bold text-warning bg_dark px-2 py-1 rounded-1 text-capitalize mb-1 my-lg-2">
                                obiettivo
                            </span>
                            attuale è iniziare la carriera da sviluppatore web e crescere professionalmente
                        </h1>
                        <div class="fs-3">
                            Sono entusiasta all'idea di imparare nuove tecnologie di sviluppo e di contribuire a progetti
                            significativi affrontando sfide stimolanti.
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-6">
                    <img class="img-fluid" src="../assets/img/undraw_stepping_up_g6oo.svg" alt="">
                </div>
            </div>
        </div>
    </div>

    <div id="free_time" class="bg_dark text-white py-5">
        <div class="container py-5">
            <div class="row">
                <div class="col-12 col-lg-6 mb-5 mb-lg-0">
                    <div class="d-flex flex-column justify-content-around h-100">
                        <h1>
                            Quando non esploro il mondo della programmazione, sono un
                            <span
                                class="d-inline-block mx-auto fw-bold text-warning bg_primary px-2 py-1 rounded-1 text-capitalize my-2">motociclista.
                            </span>
                        </h1>
                        <div class="fs-3">
                            Mi piace esplorare il mondo attraverso il mio casco e
                            credo che vivere <span
                                class="d-inline-block mx-auto fw-bold text-warning bg_primary px-2 py-1 rounded-1 text-capitalize my-2">
                                esperienze
                            </span> differenti sia fondamentale per arricchire la <span
                                class="d-inline-block mx-auto fw-bold text-warning bg_primary px-2 py-1 rounded-1 text-capitalize my-2">creatività
                            </span> e ottenere
                            una prospettiva equilibrata.
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-6">
                    <img class="img-fluid" src="../assets/img/undraw_traveling_yhxq.svg" alt="">
                </div>
            </div>
        </div>
    </div>


    <div id="finals" class="bg-secondary-subtle py-5">
        <div class="container text-center">
            <h1 class="mb-3">
                <span
                    class="d-inline-block mx-auto fw-bold text-warning bg_primary px-2 py-1 rounded-1 text-capitalize my-2">grazie
                </span>
                <div>Per aver visitato il mio portfolio!</div>
            </h1>
            <div class="fs-3 mx-auto mb-5 mb-lg-0">
                Spero di avere l'opportunità di
                <span
                    class="d-inline-block mx-auto fw-bold text-warning bg_primary px-2 py-1 rounded-1 text-capitalize my-2">crescere
                </span>
                e
                <span
                    class="d-inline-block mx-auto fw-bold text-warning bg_primary px-2 py-1 rounded-1 text-capitalize my-2">contribuire
                </span>
                nel mondo
                dello sviluppo web.
            </div>
            <div class="w-50 mx-auto mt-4">
                <img class="img-fluid py-3" src="../assets/img/undraw_developer_activity_re_39tg.svg" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import AboutHero from '../components/AboutHero.vue';
export default {
    name: 'AboutPage',
    data() {
        return {
            baseUrl: 'http://127.0.0.1:8000',
            skillsApiPath: '/api/technologies',
            technologies: []
        }
    },
    components: {
        AboutHero
    },
    methods: {
        fetchTechnology(url) {
            axios
                .get(url)
                .then(response => {
                    console.log('TECHNOLOGIES', response);
                    this.technologies = response.data.technologies;
                })
                .catch(error => {
                    console.error(error)
                })
        }
    },
    mounted() {
        this.fetchTechnology(this.baseUrl + this.skillsApiPath);
    }
}
</script>

<style lang="scss" scoped></style>