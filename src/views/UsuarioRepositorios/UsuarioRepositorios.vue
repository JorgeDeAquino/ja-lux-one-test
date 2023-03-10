<template>
    <section class="container_UsuarioDetalhe">
        <div class="usuario_info">
            <img src="" alt="Foto Usuario">
        </div>
        <div class="lista_repositorios">
            <CardResultado />
            <ButtonVerMais />
        </div>
    </section>
</template>

<script>
import ButtonVerMais from '../../components/ButtonVerMais/ButtonVerMais.vue'
import CardResultado from '../../components/CardResultado/CardResultado.vue'

export default {
    name: 'UsuarioRepositorios',
    components: {
        ButtonVerMais,
        CardResultado
    }
}
</script>

<style src="./styles.scss" lang="scss" scoped />