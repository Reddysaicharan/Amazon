import{cart, addToCart} from '../data/cart.js';
import{products} from '../data/products.js';
import{formatCurrency} from './utilities/money.js';

let ProductsHtml = '';

products.forEach(product => {
    ProductsHtml += `
    <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
           $${formatCurrency(product.priceCents)}
          </div>

          <div class="product-quantity-container-${product.id}">
            <select>
              <option selected value="0">1</option>
              <option value="1">2</option>
              <option value="2">3</option>
              <option value="3">4</option>
              <option value="4">5</option>
              <option value="5">6</option>
              <option value="6">7</option>
              <option value="7">8</option>
              <option value="8">9</option>
              <option value="9">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart-button" data-product-id="${product.id}" >
            Add to Cart
          </button>
        </div> `;
});

    document.querySelector('.js-products-grid').innerHTML = ProductsHtml;
 
    function updateCartQuantity() {
      let cartQuantity = 0;
      cart.forEach(item => {
        cartQuantity += item.quantity;
      });
      document.querySelector('.js-cart-quantity').innerHTML=cartQuantity;
    }
    document.querySelectorAll('.js-add-to-cart-button').forEach(button => {
      button.addEventListener('click', (event) => {
        const productId = button.dataset.productId;
        addToCart(productId);
        updateCartQuantity();

        document.querySelector('.js-cart-quantity').innerHTML=cartQuantity;
    });
  });
