
function imageQuality(url){
    return url.replace('150x150','250x250').replace('50x50','250x250')
  }

function getid(perma_url){
    return perma_url.split('/').pop();
}




export{
    imageQuality,
    getid
}