class PostsController {
    // Set up the items and currentId property in the contructor
    constructor(currentId = 0) {
        this.posts = [];
        this.currentId = currentId;
    }

    // Create the addItem method
    addPosts(title, description,imageUrl) {
        const posts = {
            // Increment the currentId property
            id: this.currentId++,
            name: title,
            description: description,
            imageUrl: imageUrl
            

        };

        // Push the item to the items property
        this.posts.push(posts);
    }
}
const post1 = {
    id: 1,
    name: 'My first post',
    description: 'This is my first post',
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Post-greenland-uummannaq.jpg/1200px-Post-greenland-uummannaq.jpg"
    host: 'Andres Lowles',
    eventDate: '2020-09-20'
};

const post2 = {
    id: 2,
    name: 'My second post',
    description: 'This is my second post',
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Post-greenland-uummannaq.jpg/1200px-Post-greenland-uummannaq.jpg"
    host: 'Andres Lowles',
    eventDate: '2020-09-20'
};
const post3 = {
    id: 3,
    name: 'My first post',
    description: 'This is my first post',
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Post-greenland-uummannaq.jpg/1200px-Post-greenland-uummannaq.jpg"
    host: 'Andres Lowles',
    eventDate: '2020-09-20'
};

const post4 = {
    id: 4,
    name: 'My second post',
    description: 'This is my second post',
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Post-greenland-uummannaq.jpg/1200px-Post-greenland-uummannaq.jpg"
    host: 'Andres Lowles',
    eventDate: '2020-09-20'
};
const post5 = {
    id: 5,
    name: 'My first post',
    description: 'This is my first post',
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Post-greenland-uummannaq.jpg/1200px-Post-greenland-uummannaq.jpg"
    host: 'Andres Lowles',
    eventDate: '2020-09-20'
};

const post6 = {
    id: 6,
    name: 'My second post',
    description: 'This is my second post',
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Post-greenland-uummannaq.jpg/1200px-Post-greenland-uummannaq.jpg"
    host: 'Andres Lowles',
    eventDate: '2020-09-20'
};