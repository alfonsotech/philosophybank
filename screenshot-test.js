const webCapture = require('webpage-capture');
webCapture('https://github.com/b4dnewz', {}, (err, res) => {
  // handle err
  console.log('Output saved to:', res);
});
