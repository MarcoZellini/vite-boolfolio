<template>
    <div id="jumbotron" class="p-5 bg-light">
        <div class="container py-5 text-lg-start">
            <div class="row row-cols-1 row-cols-md-2">
                <div class="col py-4">
                    <img class="img-fluid pt-5" src="../assets/img/undraw_mailbox_re_dvds.svg" alt="">
                </div>
                <div class="col d-flex flex-column justify-content-center align-items-center py-4">
                    <h1 class="display-5 fw-bold">Hi There!</h1>
                    <p class="fs-4">Compile this form to get in touch!</p>

                    <form action="#" method="POST" @submit.prevent="sendForm" v-if="!this.loading">
                        <div class="row ms-3">

                            <div class="col-12">
                                <div class="alert alert-success" role="alert" v-if="this.success">
                                    <strong>Success</strong> {{ this.success }}
                                </div>

                                <div class="alert alert-success" role="alert" v-if="this.errors.length > 0">
                                    <strong>Errors</strong> Some Word
                                </div>
                            </div>

                            <div class="col-12">
                                <div class="mb-3">
                                    <label for="name" class="form-label">Name</label>
                                    <input type="text" class="form-control" name="name" id="name"
                                        aria-describedby="nameHelpId" v-model="name"
                                        :class="{ 'is-invalid': this.errors.name }" placeholder="e.g. Mario Rossi">
                                    <small id="nameHelpId" class="form-text text-muted">Write your name</small>
                                </div>

                                <div class="alert alert-danger" role="alert" v-if="this.errors.name">
                                    <strong>Error:</strong>
                                    <ul>
                                        <li v-for="error in this.errors.name">{{ error }}</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-6">
                                <div class="mb-3">
                                    <label for="email" class="form-label">Email</label>
                                    <input type="email" class="form-control" name="email" id="email"
                                        aria-describedby="emailHelpId" placeholder="e.g. mail@example.it" v-model="email"
                                        :class="{ 'is-invalid': this.errors.email }">
                                    <small id="emailHelpId" class="form-text text-muted">Write your email</small>
                                </div>

                                <div class="alert alert-danger" role="alert" v-if="this.errors.email">
                                    <strong>Error:</strong>
                                    <ul>
                                        <li v-for="error in this.errors.email">{{ error }}</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-6">
                                <div class="mb-3">
                                    <label for="phone" class="form-label">Phone</label>
                                    <input type="tel" class="form-control" name="phone" id="phone"
                                        placeholder="e.g. 1234567890" v-model="phone"
                                        :class="{ 'is-invalid': this.errors.phone }">
                                    <small id="phoneHelpId" class="form-text text-muted">Write your phone</small>
                                </div>

                                <div class="alert alert-danger" role="alert" v-if="this.errors.phone">
                                    <strong>Error:</strong>
                                    <ul>
                                        <li v-for="error in this.errors.phone">{{ error }}</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-12">
                                <div class="mb-3">
                                    <label for="message" class="form-label">Message</label>
                                    <textarea class="form-control" name="message" id="message" rows="3"
                                        aria-describedby="messageHelpId" v-model="message"
                                        :class="{ 'is-invalid': this.errors.message }"
                                        placeholder="Write a message..."></textarea>
                                    <small id="messageHelpId" class="form-text text-muted">Write your message</small>
                                </div>

                                <div class="alert alert-danger" role="alert" v-if="this.errors.message">
                                    <strong>Error:</strong>
                                    <ul>
                                        <li v-for="error in this.errors.message">{{ error }}</li>
                                    </ul>
                                </div>
                            </div>

                            <button type="submit" class="btn btn-primary" :disabled="this.loading">
                                <span v-if="!this.loading">Get in Touch</span>
                                <span v-else class="px-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-send-fill" viewBox="0 0 16 16">
                                        <path
                                            d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                                    </svg>
                                </span>
                            </button>

                        </div>
                    </form>
                    <div class="d-flex justify-content-center align-items-center" v-else>
                        <i class="fa-regular fa-envelope fa-beat fa-2xl"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'ContactsPage',
    data() {
        return {
            baseUrl: 'http://127.0.0.1:8000',
            name: '',
            email: '',
            phone: '',
            message: '',
            loading: false,
            success: null,
            errors: []
        }
    },
    methods: {
        sendForm() {

            this.loading = true;
            this.errors = [];
            this.success = null;

            const payload = {
                name: this.name,
                email: this.email,
                phone: this.phone,
                message: this.message
            }

            axios.post(this.baseUrl + '/api/contacts', payload)
                .then(response => {

                    const result = response.data

                    if (result.success) {
                        this.success = result.message;

                        this.name = '';
                        this.email = '';
                        this.phone = '';
                        this.message = '';


                    } else {
                        this.errors = result.errors
                    }

                    this.loading = false;
                })
                .catch(error => {
                    console.error(error);
                })

        }
    }
}
</script>

<style lang="scss" scoped></style>