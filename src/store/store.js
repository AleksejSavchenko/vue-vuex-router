import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'
import qs from 'querystring'




Vue.use(Vuex);
const url = 'http://local.osd.ua/assets/components/users_cabinet/public.php';
const store = new Vuex.Store({
    state: {
        count: 10,
        catalog: ''
    },
    actions: {
        cabinetCatalog ({ commit }, query_profile) {

            axios.post(url, qs.stringify({
                // 'action': 'shop/products/getlist'
                'action': 'shop/categories/getlist'
            })).then(function (response) {
                console.log(response.data['results']);
                commit( 'set', {type: 'catalog', items: response.data['results']} )
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        cabinetAuth ({ commit }, query_auth) {

            axios.post(url, qs.stringify({
                action: 'auth/login',
                username: 'New Company',
                password: '123123123',
                rememberme : false
            }));
        }
    },
    mutations: {
        set (state, { type, items}) {
            state[type] = items;
        }
    },
    getters: {
        catalog(state) {
            return state.catalog.map(item => {
                return item
            })
        }
    }
});

export default store;