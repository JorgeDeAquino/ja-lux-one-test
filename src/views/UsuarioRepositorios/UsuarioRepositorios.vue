<template>
    <section class="container_UsuarioDetalhe">
        <div class="usuario_card">
            <img src="https://avatars.githubusercontent.com/u/102498673?v=4" alt="Foto Usuario">
            <div class="usuario_infos">
                <h2>Nome do Usuario</h2>
                <h3>@ usuario</h3>
                <ul>
                    <li>
                        <img src="@/assets/images/organization.svg" alt="icone">
                        <span>
                            Empresa
                        </span>
                    </li>
                    <li>
                        <img src="@/assets/images/location.svg" alt="icone">
                        <span>
                            localidade
                        </span>
                    </li>
                    <li>
                        <img src="@/assets/images/repository.svg" alt="icone">
                        <span>
                            Repositorios
                        </span>
                    </li>
                    <li>
                        <img src="@/assets/images/followers.svg" alt="icone">
                        <span>
                            Seguidores
                        </span>
                    </li>
                </ul>
            </div>
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