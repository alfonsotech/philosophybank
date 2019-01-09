var linkPreview = require("link-preview")
var axios = require('axios')

axios.get('http://localhost:3000/api/resources').then(function(resources) {
  // console.log('resources.data.docs>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', resources.data.docs[0].media);
  resources.data.docs.map(function(resource) {
    // console.log('resource.media >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', resource.media);
    linkPreview.parse(resource.url).then(function(data) {
      console.log('data', data)
      let url = 'http://localhost:3000/api/resources/' + resource._id
      // console.log('url', url);
      if(!resource.description) {
        console.log('no description');
        axios.put(url, {media: data.imgs[imgs.length-1], description: data.des}).then(response => {
          // console.log('response.data', response.data);
          console.log('response OK');
        }).catch(function(error){
          console.log(error);
        });
      } else {
        console.log('there is a description');
        axios.put(url, {media: data.imgs[imgs.length-1]}).then(response => {
          // console.log('response.data', response.data);
          console.log('response OK');
        }).catch(function(error){
          console.log(error);
        });

      }




    })
  })
}).catch(function(err) {
  console.log('err', err);
})
