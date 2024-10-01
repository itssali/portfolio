document.addEventListener('DOMContentLoaded', function () {
    const postsContainer = document.getElementById('posts-container');

    let postIndex = 1;

    function loadPost(index) {
        const fileName = `/blog posts/post${index}.md`;
        fetch(fileName)
            .then(response => {
                if (response.ok) {
                    return response.text();
                } else {
                    throw new Error('No more posts found');
                }
            })
            .then(markdown => {
                const postElement = document.createElement('div');
                postElement.classList.add('post');
                postElement.innerHTML = marked.parse(markdown);
                postsContainer.insertBefore(postElement, postsContainer.firstChild); // Prepend the post
                loadPost(index + 1); // Load the next post
            })
            .catch(error => {
                console.log(`Finished loading posts: ${error.message}`);
            });
    }

    loadPost(postIndex);
});