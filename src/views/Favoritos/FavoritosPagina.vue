<template>
    <section class="container_favoritos">
        <div class="title">
            <img src="../../assets/images/Logo-GitHub.svg" alt="Logo GitHub">
            <h2>Repositórios Favoritos</h2>
        </div>
        <div class="container_cards">
            <div class="card">
                <div class="lista_title">
                    <h2 class="titulo">Nome....</h2>
                    <button><img src="" alt="star"></button>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut temporibus eius facilis</p>
                <img src="" alt="star"> <span>500</span>
            </div>
            <ButtonVerMais />
        </div>
    </section>
</template>

<script>

import ButtonVerMais from '../../components/ButtonVerMais/ButtonVerMais.vue'

export default {
    name: 'FavoritosPagina',
    components: {
        ButtonVerMais
    }
}
</script>

<style src="./styles.scss" lang="scss" scoped />