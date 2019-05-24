// const Nightmare = require('nightmare')
// const nightmare = Nightmare()
//
// function runThis(data) {
//   console.log('a console.log', data);
// }
// sc-artwork sc-artwork-placeholder-3  image__full g-opacity-transition

// nightmare
//   .goto('https://soundcloud.com/lsepodcasts/feminism-in-transnational')
//   .evaluate(() => {
//       let img = document.querySelector('.image__full'),
//     style = img.currentStyle || window.getComputedStyle(img, false),
//     bi = style.backgroundImage.slice(4, -1).replace(/"/g, "");
//      return bi
//     }
//
//  )
//   .end()
//   .then(runThis)
//   .catch(error => {
//     console.error('Search failed:', error)
//   })





//
// let test;
// nightmare
//   .goto('https://aeon.co/essays/your-brain-probably-is-a-computer-whatever-that-means')
//   .evaluate(() => {
//       let img = document.querySelector('.responsive-image'),
//     style = img.currentStyle || window.getComputedStyle(img, false),
//     bi = style.backgroundImage.slice(4, -1).replace(/"/g, "");
//
//     return bi
//     }
//  )
//   .end()
//   .then((data) => {
//     test = data
//     console.log('test', test);
//   })
//   .catch(error => {
//     console.error('Search failed:', error)
//   })







//   let img = document.querySelector('.sc-artwork'),
// style = img.currentStyle || window.getComputedStyle(img, false),
// bi = style.backgroundImage.slice(4, -1).replace(/"/g, "");
