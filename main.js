const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      product: 'Socks',
      brand: 'Vue Mastery',
      // image: './assets/images/socks_blue.jpg',
      index: 0,

      details: ['50% cotton', '30% wool', '20% polyester'],
      variants: [
        {
          id: 2234,
          color: 'green',
          image: './assets/images/socks_green.jpg',
          quantity: 50,
        },
        {
          id: 2235,
          color: 'blue',
          image: './assets/images/socks_blue.jpg',
          quantity: 0,
        },
      ],
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    updateIndex(index) {
      this.index = index;
    },
  },
  computed: {
    inStock() {
      return this.variants[this.index].quantity;
    },
    image() {
      return this.variants[this.index].image;
    },
  },
});
