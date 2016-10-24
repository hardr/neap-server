
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('coffee').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('coffee').insert({name: 'Death\'s Toll', roaster: 'Bob', origin: 'Latin America', roast: 'medium', caffeine: 100, decaf: false, price: 12, quantity: 3}),
        knex('coffee').insert({name: 'Death\'s Refund', roaster: 'Jim', origin: 'Canada', roast: 'just wrong', caffeine: 1, decaf: true, price: 22, quantity: 99}),
        knex('coffee').insert({name: 'Death\'s Life', roaster: 'nature', origin: 'Africa, South', roast: 'dark', caffeine: 50, decaf: false, price: 50, quantity: 12}),
        knex('coffee').insert({name: 'Death\'s Endlife', roaster: 'Starbucks', origin: 'Merica', roast: 'light', caffeine: 9000, decaf: false, price: 9000, quantity: 9000})
      ]);
    });
};
