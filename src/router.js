import { createRouter, createWebHistory } from 'vue-router'
import PaginaInicial from './views/PaginaIncial/PaginaInicial.vue'
import FavoritosPagina from './views/Favoritos/FavoritosPagina.vue'
import RepositorioResultado from './views/RepositorioResultado/RepositorioResultado.vue'
import ResultadoNaoEncontrado from './views/ResultadoNaoEncontrado/ResultadoNaoEncontrado.vue'
import PaginaNaoEncontrada from './views/PaginaNaoEncontrada/PaginaNaoEncontrada.vue'

const routes = [
    {
        name: 'PaginaInicial',
        path: '/',
        component: PaginaInicial
    },
    {
        name: 'favoritos',
        path: '/favoritos',
        component: FavoritosPagina
    },
    {
        name: 'repositorio-resultado',
        path: '/repositorio-resultado',
        component: RepositorioResultado
    },
    {
        name: 'resultado-nao-encontrado',
        path: '/resultado-nao-encontrado',
        component: ResultadoNaoEncontrado
    },
    {
        name: 'pagina-nao-encontrada',
        path: '/pagina-nao-encontrada',
        component: PaginaNaoEncontrada
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router