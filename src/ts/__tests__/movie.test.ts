import Movie from "../domain/Movie";

test('new pbject is defined', () => {
  const movie = new Movie(157, true, 'Avengers', 2012, 'USA', 'Avengers Assemble!', ['fant'], 137, 199);

  expect(movie).toBeDefined();
});