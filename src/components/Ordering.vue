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

            <ul class="collapsible collapsible-category" data-collapsible="expandable">
                    <li v-for="category in catalog" :key="category.id" :class="{active: expanding === 'none' ? '' : 'active'}">
                        <div class="collapsible-header" @click="expandingFunc()" :class="{active: expanding === 'none' ? '' : 'active'}">
                            {{ category['pagetitle'] }}
                            <i class="fa-chevron-down fa right"></i>
                        </div>
                        <div class="collapsible-body" :style="{display: expanding}">
                            <ul class="collapsible" data-collapsible="accordion">
                                <li v-for="subcategory in category['sub_categories']" :key="subcategory.id"
                                    :class="{active: expanding === 'none' ? '' : 'active'}">
                                    <div class="collapsible-header" :class="{active: expanding === 'none' ? '' : 'active'}">
                                        {{ subcategory['pagetitle'] }}
                                    </div>

                                    <div class="collapsible-body">
                                        <div class="cart-table">
                                            <div class="cart-table-heading">
                                                <div class="cth-photo">Фото</div>
                                                <div class="cth-name  ">Название и артикул</div>
                                                <div class="cth-price-retail   hide-on-small-and-down">РРЦ, грн</div>
                                                <div class="cth-price-wholesale  hide-on-small-and-down">Оптовая цена, грн</div>
                                                <div class="cth-weight hide-on-med-and-down hide-on-small-and-down">Аттрибуты</div>
                                                <div class="cth-size hide-on-small-and-down"></div>
                                                <div class="cth-quantity hide-on-med-and-down hide-on-small-and-down">Количество</div>
                                                <div class="cth-availability hide-on-small-and-down">Наличие</div>
                                                <div class="cth-amount hide-on-small-and-down">Сумма, грн</div>
                                            </div>
                                            <div class="cart-table-body">
                                                <div class="cth-photo">
                                                    <a class="hide-on-large-only show-hide-btn" href="#"><i class="fa fa-plus"></i></a>
                                                    <a href="#cardProduct" class="modal-trigger">
                                                        <img src="../../image/img/product-1.jpg" alt="Электроколяска PCC">
                                                        <img src="../../image/svg/info.svg" class="info" alt="info">
                                                    </a>
                                                </div>
                                                <div class="cth-name">
                                                    <span class="vendor-code">OSD-7F-5</span>
                                                    <a href="#cardProduct" class="modal-trigger name">Электроколяска PCC</a>
                                                </div>
                                                <div class="cth-price-retail">
                                                    <span class="hide-on-med-only hide-on-large-only">РРЦ, грн</span>
                                                    <span>98900</span>
                                                </div>
                                                <div class="cth-price-wholesale">
                                                    <span class="hide-on-med-only hide-on-large-only">Оптовая цена, грн</span>
                                                    <span>95000</span>
                                                </div>
                                                <div class="cth-weight hide-on-med-only">
                                                    <span>Размер: S, Вес: 69</span>
                                                    <span>Размер: S, Вес: 69</span>
                                                    <span>Размер: S, Вес: 69</span>
                                                </div>
                                                <div class="cth-size">
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                </div>
                                                <div class="cth-quantity hide-on-med-only">
                                                    <div class="calc table-wrapper">
                                                        <a class="minus disabled"><i class="fa fa-minus" aria-hidden="true"></i></a>
                                                        <input class="input-calc tooltipped" type="text" value="0" data-position="bottom" data-delay="50" data-tooltip="При покупке от 2 шт этого товара оптовая цена составит 19000 грн">
                                                        <a class="plus tooltipped" data-position="bottom" data-delay="50" data-tooltip="При покупке от 2 шт этого товара оптовая цена составит 19000 грн"><i class="fa fa-plus" aria-hidden="true"></i></a>
                                                        <a class="btn-trash">
                                                            <i class="fa fa-trash-o" aria-hidden="true"></i>
                                                        </a>
                                                    </div>
                                                    <div class="calc table-wrapper">
                                                        <a class="minus"><i class="fa fa-minus" aria-hidden="true"></i></a>
                                                        <input class="input-calc tooltipped" type="text" value="2" data-position="bottom" data-delay="50" data-tooltip="При покупке от 2 шт этого товара оптовая цена составит 19000 грн">
                                                        <a class="plus tooltipped" data-position="bottom" data-delay="50" data-tooltip="При покупке от 2 шт этого товара оптовая цена составит 19000 грн"><i class="fa fa-plus" aria-hidden="true"></i></a>
                                                        <a class="btn-trash">
                                                            <i class="fa fa-trash-o" aria-hidden="true"></i>
                                                        </a>
                                                    </div>
                                                    <div class="calc table-wrapper">
                                                        <a class="minus"><i class="fa fa-minus" aria-hidden="true"></i></a>
                                                        <input class="input-calc tooltipped" type="text" value="3" data-position="bottom" data-delay="50" data-tooltip="При покупке от 2 шт этого товара оптовая цена составит 19000 грн">
                                                        <a class="plus tooltipped" data-position="bottom" data-delay="50" data-tooltip="При покупке от 2 шт этого товара оптовая цена составит 19000 грн"><i class="fa fa-plus" aria-hidden="true"></i></a>
                                                        <a class="btn-trash">
                                                            <i class="fa fa-trash-o" aria-hidden="true"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="cth-availability hide-on-small-and-down">
                                                    <span><i class="fa fa-check" aria-hidden="true"></i></span>
                                                    <span><i class="fa fa-check" aria-hidden="true"></i></span>
                                                    <span><i class="fa fa-check" aria-hidden="true"></i></span>
                                                </div>
                                                <div class="cth-amount">
                                                    <span class="hide-on-med-only hide-on-large-only">Сумма, грн: </span>
                                                    <span>190 000</span>
                                                </div>
                                                <!-- tablet and mobile -->
                                                <div class="mobile-show">
                                                    <div class="cart-table hide-on-large-only">
                                                        <div class="cart-table-heading">
                                                            <div class="cth-weight">Вес, кг</div>
                                                            <div class="cth-size">Размер</div>
                                                            <div class="cth-quantity">Количество</div>
                                                        </div>
                                                        <div class="cart-table-body">
                                                            <div class="cth-weight">
                                                                <span>69</span>
                                                                <span>75</span>
                                                                <span>83</span>
                                                            </div>
                                                            <div class="cth-size">
                                                                <span>S</span>
                                                                <span>M</span>
                                                                <span>L</span>
                                                            </div>
                                                            <div class="cth-quantity">
                                                                <div class="calc table-wrapper">
                                                                    <a class="minus disabled"><i class="fa fa-minus" aria-hidden="true"></i></a>
                                                                    <input class="input-calc tooltipped" type="text" value="0" data-position="bottom" data-delay="50" data-tooltip="При покупке от 2 шт этого товара оптовая цена составит 19000 грн">
                                                                    <a class="plus tooltipped" data-position="bottom" data-delay="50" data-tooltip="При покупке от 2 шт этого товара оптовая цена составит 19000 грн"><i class="fa fa-plus" aria-hidden="true"></i></a>
                                                                    <a class="btn-trash">
                                                                        <i class="fa fa-trash-o" aria-hidden="true"></i>
                                                                    </a>
                                                                </div>
                                                                <div class="calc table-wrapper">
                                                                    <a class="minus"><i class="fa fa-minus" aria-hidden="true"></i></a>
                                                                    <input class="input-calc tooltipped" type="text" value="2" data-position="bottom" data-delay="50" data-tooltip="При покупке от 2 шт этого товара оптовая цена составит 19000 грн">
                                                                    <a class="plus tooltipped" data-position="bottom" data-delay="50" data-tooltip="При покупке от 2 шт этого товара оптовая цена составит 19000 грн"><i class="fa fa-plus" aria-hidden="true"></i></a>
                                                                    <a class="btn-trash">
                                                                        <i class="fa fa-trash-o" aria-hidden="true"></i>
                                                                    </a>
                                                                </div>
                                                                <div class="calc table-wrapper">
                                                                    <a class="minus"><i class="fa fa-minus" aria-hidden="true"></i></a>
                                                                    <input class="input-calc tooltipped" type="text" value="3" data-position="bottom" data-delay="50" data-tooltip="При покупке от 2 шт этого товара оптовая цена составит 19000 грн">
                                                                    <a class="plus tooltipped" data-position="bottom" data-delay="50" data-tooltip="При покупке от 2 шт этого товара оптовая цена составит 19000 грн"><i class="fa fa-plus" aria-hidden="true"></i></a>
                                                                    <a class="btn-trash">
                                                                        <i class="fa fa-trash-o" aria-hidden="true"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
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
    export default {
        name: 'Ordering',
        data() {
            return {
                loading: false,
                expanding: 'none'
            }
        },
        beforeCreate() {

            return this.$store.dispatch('cabinetCatalog', this.query)

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
            msg() {
                return this.$store.state.count
            },
            catalog() {
                return this.$store.state.catalog
            }
        }
    }
</script>
