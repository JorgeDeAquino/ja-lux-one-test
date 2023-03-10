<template>
    <section class="container_favoritos">
        <div class="title">
            <img src="../../assets/images/Logo-GitHub.svg" alt="Logo GitHub">
            <h2>Repositórios Favoritos</h2>
        </div>
        <div class="container_cards">
            <CardResultado/>
            <ButtonVerMais />
        </div>
    </section>
</template>

<script>

import ButtonVerMais from '../../components/ButtonVerMais/ButtonVerMais.vue'
import CardResultado from '../../components/CardResultado/CardResultado.vue'

export default {
    name: 'FavoritosPagina',
    components: {
        ButtonVerMais,
        CardResultado
    }
}
</script>

<style src="./styles.scss" lang="scss" scoped />