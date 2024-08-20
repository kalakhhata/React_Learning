ReactDOM.render(<h1>Hello, Everyone from script through react.</h1>,document.getElementById("root")) 

//I just came to know that the .render() function overwrites the content you wanna show if you target the same dom tag again and again instead just render every thing in single declaration or target different dom tag.

ReactDOM.render(<ul>Animals<li>Cat</li><li>Dog</li><li>Lion</li></ul>,document.querySelector("#root"))

function Navbar()
{
    return(
        <p>Here, I am rendering the Paragraph tag through creating it's component.</p>
    )
}

ReactDOM.render(<Navbar/>,document.getElementById("navbar"))


//I am just practicing vanilla JS here for appending the Child
let rand = document.getElementById('rand');
let h1 = document.createElement('h1');
h1.textContent = "Hello, I am just practicing vanilla JS here for appending the Child";
rand.appendChild(h1);