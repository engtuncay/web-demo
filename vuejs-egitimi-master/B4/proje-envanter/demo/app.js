Vue.component('EnvanterList', {
    template: '#envanter-list-template',
    props: {
        title: {type: String, required: true, default: 'Liste'},
        items: {type: Array, required: true, default: []},
    }
});

const App = new Vue({
    el: '#app',
    data: {
        item: {},
        allItems: [
            {"id": 1, "baslik": "Masa", "kategori": "Mobilya", "adet": "1", "fiyat": 259, "arsiv": false},
            {"id": 2, "baslik": "Kitaplık", "kategori": "Mobilya", "adet": "2", "fiyat": 159, "arsiv": false},
            {"id": 3, "baslik": "Monitor", "kategori": "Elektronik", "adet": "5", "fiyat": 400, "arsiv": true}
        ],
    },
    created() {
    },
    computed: {
        activeItems() {
            return this.allItems.filter(value => value.arsiv === false);
        },
        archievedItems() {
            return this.allItems.filter(value => value.arsiv === true);
        }
    },
    methods: {}
});