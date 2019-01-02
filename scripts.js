var linkPreview = require("link-preview")

linkPreview.parse('https://medium.com/s/story/advice-for-coping-with-seasonal-depression-from-9-people-who-have-it-a5c04fdfe996')
.then(res => console.log(res.title, res.imgs[0]))
.catch(err => console.log(err));
