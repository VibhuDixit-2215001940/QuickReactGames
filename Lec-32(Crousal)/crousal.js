let arr = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFNkF1eX8VEfk4x-Q2o-Me07eZcnJX6unXTw&s',
    'https://i.pinimg.com/736x/13/d4/91/13d491a5eca601454a91bb3396024a1a.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYZEWMjOkIeh0FIcVv767KaMxzxcdGpf5tZg&s',
    'https://i.pinimg.com/736x/3b/0f/d5/3b0fd5a1a7af7c7df5967c06d32ddb42.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAIr8-sSg4q-2o26lPK-wOYLorhNJ0MxK7QQ&s',
    'https://preview.redd.it/7ldfoaanfooc1.jpeg?auto=webp&s=2eb6f57884db43d1935340131135d52c6871f65c',
    'https://dialoda.id/wp-content/uploads/2024/03/Keiani-20Mabe-20Biodata-20Lengkap.jpg'
]

let a = document.querySelector('img');
console.log(a.getAttribute('src'))
a.setAttribute('style',"height:400px;width:400px")
let index = 0;

setInterval(()=>{
    a.setAttribute('src',arr[index]);
    a.setAttribute('style',"height:400px;width:400px")
    console.log(a.getAttribute('src'))
    index = (index+1)%arr.length;
},2000)