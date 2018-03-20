<template>
    <section class="main">
        <!-- steps container -->
        <div class="container">
            <div class="steps-container table-wrapper">
                <a href="/ordering.html" class="step-one step-item active">
                    <span class="step-number">1</span><span class="step-text">Выбор товаров</span>
                </a>
                <a href="/dostavka-i-oplata.html" class="step-two step-item">
                    <span class="step-number">2</span><span class="step-text">Доставка и оплата</span>
                </a>
                <a href="/podtverzhdenie-zakaza.html" class="step-three step-item">
                    <span class="step-number">3</span><span class="step-text">Подтверждение заказа</span>
                </a>
            </div>
        </div><!-- end steps container -->

        <!-- filter container -->

        <!-- tablas product container -->
        <div class="container">

            <category-list :categoryList="categoryList"></category-list>

        </div><!-- end tablas product container -->

        <!-- pagination container -->
        <div class="bg-blue-block pagination-page">
            <div class="container">
                <div class="row table-wrapper">
                    <div class="col l3 m12 s12 center-align hide-on-med-only hide-on-small-and-down">
                        <a href="#" class="btn-trash center button--pipaluk">
                            <i class="fa fa-trash-o" aria-hidden="true"></i>
                        </a>
                        <p class="description">Очистить корзину</p>
                    </div>
                    <div class="col l6 m12 s12">
                        <div class="total-cost">
                            <table class="bordered">
                                <tbody class="bordered responsive-table black-text">
                                <tr>
                                    <td>Общая стоимость заказа (РРЦ):</td>
                                    <td class="total_price">0 грн</td>
                                </tr>
                                <tr>
                                    <td>Сумма скидки (РРЦ - оптовая цена):</td>
                                    <td class="total_price_personal_sale">0 грн</td>
                                </tr>
                                <tr class="blue-text">
                                    <td>Итого к оплате:</td>
                                    <td class="total_price_opt">0 грн</td>
                                </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
                    <div class="col m6 s12 center-align hide-on-large-only">
                        <a href="#trash" class="btn-trash center button--pipaluk">
                            <i class="fa fa-trash-o" aria-hidden="true"></i>
                        </a>
                        <p class="description">Очистить корзину</p>
                    </div>
                    <div class="col l3 m6 s12 center-align">
                        <a href="/dostavka-i-oplata.html" class="btn-next center button--pipaluk">
                            <i class="fa fa-chevron-right" aria-hidden="true"></i>
                        </a>
                        <p class="description">Продолжить оформление</p>
                    </div>
                </div>
            </div>
        </div><!-- end pagination container -->
        <div class="cs-loader" v-if="loading">
            <div class="cs-loader-inner">
                <label>	●</label>
                <label>	●</label>
                <label>	●</label>
                <label>	●</label>
                <label>	●</label>
                <label>	●</label>
            </div>
        </div>
    </section>

</template>

<script>
    import CategoryList from '@/components/CategoryList'
    export default {
        name: 'Ordering',
        components: {'category-list': CategoryList},
        data() {
            return {
                loading: false,
                expanding: 'none'
            }
        },
        beforeCreate() {

            // console.log(this.$store.dispatch('categoryList', this.query));
            return this.$store.dispatch('categoryList', this.query)

        },
        created() {
            return {
                loading: true
            }
        },
        methods: {
            expandingFunc(){
                return this.expanding === 'none' ? this.expanding = 'block' : this.expanding = 'none';
            },
            cabinetAuth(){
                store.dispatch('cabinetAuth', this.query)
            }
        },
        computed: {
            count() {
                return this.$store.getters.count
            },
            categoryList() {
                return this.$store.getters.categoryList
            }
        }
    }
</script>
