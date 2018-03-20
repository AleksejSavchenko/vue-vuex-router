import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import qs from 'querystring'




Vue.use(Vuex);
const url = 'http://local.osd.ua/assets/components/users_cabinet/public.php';
const store = new Vuex.Store({
    state: {
        count: 10,
        categoryList: '',
        productsList: '',
    },
    actions: {
        categoryList ({ commit }, query_profile) {
            axios.post(url, qs.stringify({
                'action': 'shop/categories/getlist'
            })).then(function (response) {
                console.log(response.data);
                commit( 'set', {type: 'categoryList', items: response.data} )
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        productsList ({ commit }, params) {
            axios.post(url, qs.stringify({
                'action': 'shop/products/getlist',
                'subcategoryId': params['subcategoryId'],
                'in_stock': '0',
                'search_name': ''

            })).then(function (response) {
                console.log(response.data);
                commit( 'set', {type: 'productsList', items: response.data} )
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
        categoryList(state) {
            return state.categoryList['results']
            // return state.categoryList.map(item => {
            //     return item
            // })
        },
        productsList(state) {
            return state.productsList['results']
        },
        count(state) {
            return state.count
        }
    }
});

export default store;