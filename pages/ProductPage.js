const BasePage = require('./BasePage');

class ProductPage extends BasePage {
  constructor(page) {
    super(page);
    this.productsLink = 'a[href="/products"]';
    this.mensTshirt = 'a[href="/product_details/2"]';
    this.addToCartButton = 'button[type="button"]';
    this.viewCartButton = 'a[href="/view_cart"]';
    this.proceedToCheckoutButton = 'a.check_out';
    this.placeOrderButton = 'a[href="/payment"]';
  }

  async navigateToProducts() {
    await this.click(this.productsLink);
  }

  async addMensTshirtToCart() {
    await this.navigateToProducts();
    await this.click(this.mensTshirt);
    await this.click(this.addToCartButton);
    await this.click(this.viewCartButton);
  }

  async proceedToCheckout() {
    await this.click(this.proceedToCheckoutButton);
  }

  async placeOrder() {
    await this.click(this.placeOrderButton);
  }
}

module.exports = ProductPage; 