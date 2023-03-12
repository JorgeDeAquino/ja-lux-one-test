<template>
    <section class="container_PaginaInicial">
        <img src="../../assets/images/Logo-GitHub.svg" alt="Logo GitHub">
        <div class="btns">
            <button @click="btnSelecao('btn1')" class="btn_escolha" :class="{ btnSelecionado1 }" >Repositório</button>
            <button @click="btnSelecao('btn2')" class="btn_escolha" :class="{ btnSelecionado2 }">Usuário</button>
        </div>
        <div class="input_search">
            <input type="text" placeholder="Buscar...">
            <i></i>
        </div>
    </section>
</template>

<script>
export default {
    name: 'PaginaInicial',
    data() {
        return {
            btnSelecionado1: false,
            btnSelecionado2: false,
        }
    },
    methods: {
        btnSelecao(select) {
            if (select == "btn1") {
                this.btnSelecionado1 = true;
                this.btnSelecionado2 = false;
            } else {
                this.btnSelecionado1 = false;
                this.btnSelecionado2 = true;
            }
        }
    }
}
</script>

<style src="./styles.scss" lang="scss" scoped />