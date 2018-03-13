import Vue from 'vue'
import Vuex from 'vuex'
import jsonp from 'jsonp'
import axios from 'axios'
import qs from 'querystring'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 10
    },
    actions: {
        cabinetProfile ({ commit }, query) {
            const url = 'https://osd.dev3.evergreens.com.ua/assets/components/users_cabinet/public.php';

            axios.post(url, qs.stringify({ action: 'company/data/getlist' }));
                    // action: 'company/data/getlist'

        }
    }
})

export default store;