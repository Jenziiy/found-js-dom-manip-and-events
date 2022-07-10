/* Create reference to the div's element ID container */
const container = document.querySelector('#container');

// create new div in-memory and store its reference to the variable 'content'
const content = document.createElement('div');

// add the new classname 'content' to the div element.
content.classList.add('content');

//add some new text to the div. 
content.textContent = 'This is the glorious text-content!';

// append .content div to the container element of type div. 
container.appendChild(content);




// create in-memory paragraph.
const para = document.createElement('p');

// manipulate the in-memory paragraph with text and add a style attribute of property color. 
para.textContent = 'Hey I\'m red!';
para.style.color = 'red';

//append manipulated paragraph to the container div element.
container.appendChild(para);

// repeat the in-memory creation , manipulation and append operation for the following elements.......
const headerThree = document.createElement('h3');
headerThree.textContent = 'I\'m a blue H3!';
headerThree.style.color = 'blue';
container.appendChild(headerThree);

//create three new elements. put new div container as a child to the first div container, append both paragraph and h1 elements as child to the parent div and style elements accordingly.
const container_two = document.createElement('div');
const para_two = document.createElement('p');
const h1 = document.createElement('h1');
container_two.setAttribute('style', 'background-color:pink;border:black;border-style:solid;');
h1.textContent = 'I am in a div!';
para_two.textContent = 'ME TOO!';
container_two.appendChild(h1);
container_two.appendChild(para_two);
container.appendChild(container_two);