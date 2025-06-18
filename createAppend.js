// html elements
let body = document.querySelector("body");
let container = document.querySelector(".container");

// 1. Create an h2 element.
// - Store it in a variable called h2.

let h2 = document.createElement("h2");


// 2. Set the innerHTML of h2 to your name.
h2.innerHTML = "Addison";


// 3. Style at least two different properties for the heading.
h2.style.backgroundColor = "black";
h2.style.color = "white";


// 4. Select the container div and append the h2 element.
container.append(h2);


// 5. Create a paragraph element.
// - Store it in a variable called para.
let para = document.createElement("p");

// 6. Set the innerHTML of para to a fact about yourself.
para.innerHTML = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Cras a dignissim diam, ac efficitur risus. 
    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
    Proin neque sapien, tristique ac purus sed, lacinia volutpat ex. 
    In porta pretium erat vel pharetra. 
    Aliquam erat volutpat. 
    Nullam maximus erat ut bibendum gravida. 
    Phasellus tempus, diam et accumsan vulputate, elit nisi consectetur nisl, sit amet egestas enim ligula eu tellus. 
    Pellentesque condimentum, sem eget dictum viverra, orci ligula consectetur nisl, fermentum ullamcorper lorem dui et dolor. 
    Maecenas volutpat neque massa, nec efficitur nunc tincidunt ornare. 
    Fusce consequat laoreet arcu in vehicula. In eu suscipit ligula. 
    Pellentesque lacinia dolor finibus mattis pulvinar. 
    Phasellus non vestibulum velit, egestas rhoncus odio. 
    Vestibulum eget tortor vel leo rutrum tincidunt vel ac felis.
`;
// 7. Style at least two different properties for the paragraph.
para.style.backgroundColor="red";
para.style.color = "blue";

// 8. Select the container div and append the paragraph element.
container.append(para);


// Uncomment the code below after completing 1-8.
// Where do you see this on the page?
// Why is it located there even though the body is selected?
let h1 = document.createElement('h1');
h1.innerHTML = "My Webpage";
body.appendChild(h1);