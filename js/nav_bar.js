
const renderNavBar =()=>{
const mainBody = document.querySelector(".main_body");
console.log (mainBody);
const div = document.createElement("div");
div.classList.add("side-nav");
mainBody.appendChild(div);
div.innerHTML =
`<a href="./about-me.html">About Me</a>
<a href="./projects.html">Projects</a>
<a href="https://docs.google.com/document/d/12Z9nyizb6oB1ZdCqUoQLhmuzGL-_14QXzw5_LFrTtkA/edit?usp=sharing">Resume </a>
<a href="./contact-me.html">Contact</a>
<a class = "mobile_hidden" href="https://github.com/JasonOrabella"><img id=github_logo src="../images/github-logo1.png" alt=""></a>
<a class = "mobile_hidden" href="https://www.linkedin.com/in/Jason-OSU"><img id=linkedin_logo src="../images/linkedin-logo.png" alt=""></a>
</div>`
};
export{renderNavBar};
