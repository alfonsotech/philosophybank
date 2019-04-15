const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })

// sc-artwork sc-artwork-placeholder-3  image__full g-opacity-transition

nightmare
  .goto('https://soundcloud.com/lsepodcasts/feminism-in-transnational')
  .evaluate(() => {
      let img = document.querySelector('.image__full'),
    style = img.currentStyle || window.getComputedStyle(img, false),
    bi = style.backgroundImage.slice(4, -1).replace(/"/g, "");
    let mediaImage = bi
    return mediaImage
    }

 )
  .end()
  .then(console.log)
  .catch(error => {
    console.error('Search failed:', error)
  })

//   let img = document.querySelector('.sc-artwork'),
// style = img.currentStyle || window.getComputedStyle(img, false),
// bi = style.backgroundImage.slice(4, -1).replace(/"/g, "");
