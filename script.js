// fetch('https://picsum.photos/v2/list')
// .then(response => response.json())
// .then(data => {
//     var div = document.createElement('div');

//     for (var key in data) {

//             var element = data[key];
//             var id = element [0];
//             var author = element [1];
//             var width = element [2];
//             var height = element [3];
//             var download_url = element[5];

//         console.log(data[key]);
//         div.innerHTML += '<li><img id=' +id+ 'class="thumb normal" src=' + download_url + 'onmouseover="preview(this)"/></li>';
//     }
//     document.getElementById('image').appendChild(div);
// })
// .catch(error => console.error(error));


var lastImg = 1; 
document.getElementById(-1).src = document.getElementById(lastImg).src;
document.getElementById(lastImg).className = "thumb selected ";

function preview(img) {
    document.getElementById(lastImg).className = "thumb";
    img.className = "thumb selected";
    document.getElementById(-1).src = img.src;
    lastImg = img.id
}
