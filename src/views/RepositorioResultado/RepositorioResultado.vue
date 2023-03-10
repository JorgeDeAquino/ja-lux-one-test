<template>
    <section class="container_RepositorioResultado">
            <CardResultado/>
            <CardResultado/>
            <CardResultado/>
            <CardResultado/>
            <ButtonVerMais />
    </section>
</template>

<script>
import ButtonVerMais from '../../components/ButtonVerMais/ButtonVerMais.vue'
import CardResultado from '../../components/CardResultado/CardResultado.vue'

export default {
    name: 'RepositorioResultado',
    components: {
        ButtonVerMais,
        CardResultado
    }
}
</script>

<style src="./styles.scss" lang="scss" scoped />