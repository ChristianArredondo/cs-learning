const list = document.getElementById('list');

/**
 * - div (if odd, add grey background)
 *    - h3 (if userId === 3, make green)
 *    - p
 */
const getPost = ({ id, userId, title, body }, index) => {
  // wrapping div
  const wrappingDiv = document.createElement('div');
  wrappingDiv.className = 'post-container';
  if (index % 2 !== 0) {
    wrappingDiv.style.backgroundColor = 'grey';
  }
  wrappingDiv.setAttribute('data-id', id);
  // h3 title
  const h3Title = document.createElement('h3');
  if (userId === 3) {
    h3Title.style.color = 'green';
  }
  h3Title.innerText = title;
  // p body
  const pBody = document.createElement('p');
  pBody.innerText = body;

  // insert h3 title and p body into wrapping div
  wrappingDiv.append(h3Title, pBody);

  return wrappingDiv;
};

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(posts => {
    // create posts container
    const divPostsWrapper = document.createElement('div');
    divPostsWrapper.className = 'posts-container';
    // construct and append posts
    const postChildren = Array.from(posts).map((post, i) => getPost(post, i));
    divPostsWrapper.append(...postChildren);


    // insert posts container into DOM
    const contentContainer = document.getElementById('content');
    contentContainer.append(divPostsWrapper);
  });