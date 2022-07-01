const functions = require('./functions');
 
// toBe
test('adding 2 + 2 should be 4', () => {
    expect(functions.add(2,2)).toBe(4);
})

// Equality
test('adding 2 + 2 not equal to 5', () => {
    expect(functions.add(2,2)).not.toBe(5);
})

// null
test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
})

// number 0, null, empty string, NaN are all examples of falsy
test('Should be falsy', () => {
    expect(functions.checkValue(undefined)).toBeFalsy();
  });

// truthy
test('Should be truthy', () => {
    var name="Software testing help"
    expect(functions.checkValue(name)).toBeTruthy();
  });

 // toEqual(Compare the values)
 test('User should be Sheba Jose Object', () => {
    expect(functions.createUser()).toEqual({
        firstName : 'Sheba',
        lastName : 'Jose'
    });
  });

// Lesser and Greater than
test('Should be under 500',() => {
    const value = 200;
    const value1 = 200;
    expect(value + value1).toBeLessThan(500);
})  

test('Should be greater than 20',() => {
    const num = 100;
    const num1 = 50
    expect(num + num1).toBeGreaterThan(100);
})

// toBeLessThanOrEqual and toBeGreaterThanOrEqual
test('Should be under or equal 500',() => {
    const value = 200;
    const value1 = 200;
    expect(value + value1).toBeLessThanOrEqual(400);
})  

test('Should be greater than or equal 20',() => {
    const num = 100;
    const num1 = 50
    expect(num + num1).toBeGreaterThanOrEqual(100);
})

// String Matchers(Regex)
test('String Matchers',() => {
    const value = 'Testing';
    expect(value).toMatch(/Testing/);
})

// Array
test('Admin should be in userNames',() => {
    const userNames = ['Sheba', 'Jose', 'admin'];
    expect(userNames).toContain('admin');
})


// Working with async data

// Promise
// test('User fetched name should be Leanne Graham', () => {
//      expect.assertions(1);
//    return functions.fetchUser().then(data => {
//     expect(data.name).toEqual('Leanne Graham');
//   });
// });

// test('The data is peanut butter', () => {
//     return functions.fetchUser().then(data => {
//       expect(data.name).toBe('peanut butter');
//     });
//   });

// Async And Await
// test('User fetched name should be Leanne Graham', async () => {
//     expect.assertions(1);
//     const data = await functions.fetchUser();
//     expect(data.name).toEqual('Leanne Graham');
//   });

//   test('the fetch fails with an error', async () => {
//     // expect.assertions(1);
//     try {
//       await functions.fetchUser();
//     } catch (e) {
//       expect(err).toMatch('error');
//     }
//   }); 


  //async and await with resolves or rejects.

 
//   test('The data is Leanne Graham', async () => {
//    await expect(functions.fetchUser()).resolves.toBe('peanut butter');
  
//   });

//   test('the data is peanut butter',  () => {
//      expect(functions.fetchData()).resolves.toBe('Sheba');
//   });
  
//   test('The fetch fails with an error', async () => {
//     const data = await functions.fetchUser();
//     expect(data.name).rejects.toMatch('error');
//   });

// beforeEach
const nameCheck = () => console.log('Checking Name....');

describe('Checking Names', () => {
  beforeEach(() => nameCheck());

  test('User is Sheba', () => {
    const user = 'Sheba';
    expect(user).toBe('Sheba');
  });

  test('User is Jeeny', () => {
    const user = 'Jeeny';
    expect(user).toBe('Jeeny');
  });
});


// beforeAll, afterAll, beforeEach, afterEach
describe("Calculator tests", () => {
    var input1 = 0
   var input2 = 0
   
   beforeAll(() => {
     console.log("beforeAll called");
   });
   
   afterAll(() => {
     console.log("afterAll called");
   });
    beforeEach(() => {
     console.log("beforeEach called");
     input1 = 1;
     input2 = 2;
   });
    afterEach(() => {
     console.log("afterEach called");
   });
   
   test('adding 1 + 2 should return 3', () => {
     var result = functions.add(input1,input2)
     expect(result).toBe(3);
   });
  })