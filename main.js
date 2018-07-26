var app = new Vue({
    el: "#app",
    data: {
        product: 'Socks',
        image: './images/green_socks.jpeg',
        inventory: 100,
        details: ['80% cotton', '20% polyester', 'Gender-neutral'],
        variants: [
            {
                variantId: 2234,
                variantColor: 'green',
                variantImage: './images/green_socks.jpeg'
            }, 
            {
                variantId: 2235,
                variantColor: 'blue',
                variantImage: './images/blue_socks.jpeg'
            }            
        ],
        cart: 0
    },
    methods: {
        addToCart: function() {
            this.cart++;
        },
        updateProduct: function(variantImage)  {
            this.image = variantImage;
        }
    }
})