import Cart from '../service/Cart';
import Book from '../domain/Book';

test('new card should be empty', () => {
  const cart = new Cart();
  
  expect(cart.items.length).toBe(0);
});

test('add to cart is working', () => {
  const cart = new Cart();

  const book = new Book(125, "Captain's Daughter", 'Pushkin A.S.', 399, 95);

  cart.add(book);

  expect(cart.items.length).toBe(1);
});
