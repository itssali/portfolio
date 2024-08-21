document.addEventListener('DOMContentLoaded', function () {
    const postsContainer = document.getElementById('posts-container');

    fetch('blogs.json')
        .then(response => response.json())
        .then(posts => {
            posts.forEach(post => {
                fetch(`blogs/${post}`)
                    .then(response => response.text())
                    .then(markdown => {
                        const postElement = document.createElement('div');
                        postElement.classList.add('post');
                        postElement.innerHTML = marked.parse(markdown);
                        postsContainer.appendChild(postElement);
                    })
                    .catch(error => console.error('Error loading post:', error));
            });
        })
        .catch(error => console.error('Error fetching posts.json:', error));
});