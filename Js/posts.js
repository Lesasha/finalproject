const postsController = new postsController(0);


function addPostCard(item){
    const postHTML = '<div class="card" style="width: 20rem;">\n' +
        '    <img src="'+post.img +'" width="300" height="250"  alt="post image">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">'+post.name+'</h5>\n' +
        '        <p class="card-text">'+post.description+'</p>\n' +
        '        <a href="#" class="btn btn-primary">Add</a>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<br/>';
    const postsContainer = document.getElementById("post-items");
    postsContainer.innerHTML += postHTML;
}

function loadStorageSampleData(){
    if(!localStorage.getPost("posts")){
        const samplePosts = [{'name':'Concert',
        'img':'https://www.gs1india.org/media/Juice_pack.jpg',
        'description':'RNB concerts with all the artists'},
        {'name':'Yoga Class',
        'img':'https://s3-ap-southeast-1.amazonaws.com/www8.fairprice.com.sg/fpol/media/images/product/XL/13086598_LXL1.jpg',
        'description':'Hot Yoga Class with goats'}];
        localStorage.setPost("items", JSON.stringify(samplePosts));
    }
}

function loadCardsListFromPostsController(){
    for(var i = 0, size = postsController.posts.length; i < size ; i++){
        const item = postsController.items[i];
        addItemCard(post);
    }
}

loadStorageSampleData();
postsController.loadPostsFromLocalStorage();
loadCardsListFromPostsController();