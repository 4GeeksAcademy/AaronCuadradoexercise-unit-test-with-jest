 // Importar la función sum del archivo app.js
const { sum, fromDollarToYen } = require('./app.js');


test('adds 14 + 9 to equal 23', () => {

    let total = sum(14, 9);

  
    expect(total).toBe(23);
}); 

test("One euro should be 1.07 dollars", function() {
   
    const { fromEuroToDollar } = require('./app.js');

   
    const dollars = fromEuroToDollar(1);

   
    const expected = 1 * 1.07;

    
    expect(fromEuroToDollar(dollars)).toBe(expected); 
});

test("One dollar should be 156.5 yenes", function() {
    
    const { fromDollarToYen } = require('./app.js');

    
    const yenes = fromDollarToYen(1);

   
    const expected = (1/1.07) * 156.5;

    
    expect(fromDollarToYen(yenes)).toBe(expected); 
});


test("One yen should be 0.87 pounds", function() {
 
    const { fromYenToPound } = require('./app.js');

  
    const pounds = fromYenToPound(1);

    
    const expected = (1 / 156.5) * 0.87;

    
    expect(fromYenToPound(pounds)).toBe(expected); 
});