function addPromise(a, b) {
      return new Promise(function(resolve, reject){
                  if (typeof a === 'number' && typeof b === 'number'){
                        resolve(a + b);
                        }
                  reject('The function requires two numbers');
      });
}

addPromise(7, 'bccv').then(function(result){
      console.log('Promise Success: ', result);
}, function (err) {
      console.log('Promise error: ', err);
});
