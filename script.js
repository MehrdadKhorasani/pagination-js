const URL = `https://jsonplaceholder.typicode.com/posts`
const container = document.querySelector('.container')
let page = 1;
const postPerPage = 5

async function dataFetching(){
  const skip = (page - 1) * postPerPage; 
  const res = await fetch(`${URL}`);
  const data = await res.json();

  data.forEach(post => {
    container.insertAdjacentHTML("afterbegin",
    `
    <div class="post">
      <div class="post-title">${post.title}</div>
      <div class="post-body">${post.body}</div>
    </div>
    `
  );
  });

}
dataFetching()