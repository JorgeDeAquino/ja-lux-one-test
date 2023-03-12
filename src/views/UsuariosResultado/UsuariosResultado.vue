<template>
    <section class="container_UsuariosResultado">
        <UserCard />
        <UserCard />
        <ButtonVerMais />
    </section>
</template>

<script>
import ButtonVerMais from '../../components/ButtonVerMais/ButtonVerMais.vue'
import UserCard from '../../components/UserCard/UserCard.vue'

export default {
    name: 'UsuariosResultado',
    components: {
        ButtonVerMais,
        UserCard
    }
}
</script>

<style src="./styles.scss" lang="scss" scoped />