const postsController = new PostsController(0);

// Select the New Item Form
const newPostForm = document.querySelector('#newPostForm');

// Add an 'onsubmit' event listener
newPostForm.addEventListener('submit', (event) => {
    // Prevent default action
    event.preventDefault();

    // Select the inputs
    const newPostName = document.querySelector('#newPostName');
    const newPostDescription = document.querySelector('#newPostDescription');
    const newPostImageUrl = document.querySelector('#newPostImageUrl');    

    // Get the values of the inputs
    const name = newPostName.value;
    const description = newPostDescription.value;
    const imageUrl = newPostImageUrl.value;

    /*
        Validation code here
    */

    // Add the item to the ItemsController
    postsController.addPost(name, description, imageUrl);

    // Clear the form
    newPostName.value = '';
    newPostDescription.value = '';    
});