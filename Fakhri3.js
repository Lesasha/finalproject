function changebar(){
    var navbar= document.getElementById('navbar')
    var barvalue= window.scrollY
if(navbar < 150){
    navbar.classList.remove('bgcolor')
}else{
    navbar.classList.add('bgcolor')
}
}

window.addEventListener('scroll',changebar)

/*Post container*/

functiom addItemCard(item)  = document.getElementByid('list-items')
const Fakhri items = [ 
    <'div class="card" id="10">
        <img src="pexels-piccinng-3075993.jpg" alt="">
        <div class="imgclass">
          <h4><b>John Doe</b></h4>
          <p>Architect & Engineer</p>
        </div>']


const post1 = {
    id: 1,
    name: 'My first post',
    description: 'This is my first post',
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Post-greenland-uummannaq.jpg/1200px-Post-greenland-uummannaq.jpg",
    host: 'Andres Lowles',
    eventDate: '2020-09-20'
};

const post2 = {
    id: 2,
    name: 'My second post',
    description: 'This is my second post',
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Post-greenland-uummannaq.jpg/1200px-Post-greenland-uummannaq.jpg",
    host: 'Andres Lowles',
    eventDate: '2020-09-20'
};
const post3 = {
    id: 3,
    name: 'My first post',
    description: 'This is my first post',
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Post-greenland-uummannaq.jpg/1200px-Post-greenland-uummannaq.jpg",
    host: 'Andres Lowles',
    eventDate: '2020-09-20'
};

const post4 = {
    id: 4,
    name: 'My second post',
    description: 'This is my second post',
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Post-greenland-uummannaq.jpg/1200px-Post-greenland-uummannaq.jpg",
    host: 'Andres Lowles',
    eventDate: '2020-09-20'
};
const post5 = {
    id: 5,
    name: 'My first post',
    description: 'This is my first post',
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Post-greenland-uummannaq.jpg/1200px-Post-greenland-uummannaq.jpg",
    host: 'Andres Lowles',
    eventDate: '2020-09-20'
};

const post6 = {
    id: 6,
    name: 'My second post',
    description: 'This is my second post',
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Post-greenland-uummannaq.jpg/1200px-Post-greenland-uummannaq.jpg",
    host: 'Andres Lowles',
    eventDate: '2020-09-20'
};
const post7 = {
    id: 7,
    name: 'My second post',
    description: 'This is my second post',
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Post-greenland-uummannaq.jpg/1200px-Post-greenland-uummannaq.jpg",
    host: 'Andres Lowles',
    eventDate: '2020-09-20'
}
const post8 = {
id: 8,
name: 'My second post',
description: 'This is my second post',
img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Post-greenland-uummannaq.jpg/1200px-Post-greenland-uummannaq.jpg",
host: 'Andres Lowles',
eventDate: '2020-09-20'
}
const post9 ={
    id: 9,
name: 'My second post',
description: 'This is my second post',
img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Post-greenland-uummannaq.jpg/1200px-Post-greenland-uummannaq.jpg",
host: 'Andres Lowles',
eventDate: '2020-09-20'

}
const post10 ={
    id: 10,
name: 'My second post',
description: 'This is my second post',
img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Post-greenland-uummannaq.jpg/1200px-Post-greenland-uummannaq.jpg",
host: 'Andres Lowles',
eventDate: '2020-09-20'
 

}
/*to write to local storage these 10 post*/

function loadstoragesampledata() {
        const storageItems = localStorage.getItem("items")
        if (!storageItems) {
            const sampleItems = [post1,post2,post3,post4,post5,post6,post7,post8,post9,post10];
            localStorage.setItem("items", JSON.stringify(sampleItems));
        } 
    /*Modify the ItemsController so it loads the data from the storage implementing a new function items.js*/
    function  loadItemsFromLocalStorage() {
        const storageItems = localStorage.getItem("items")
         if (storageItems) {
            const items = JSON.parse(storageItems)
    }
        

        
        
  



    
