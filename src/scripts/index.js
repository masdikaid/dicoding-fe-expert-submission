import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';

console.log('Hello Coders! :)');
const burger = document.getElementById("burger");
const navmobile = document.getElementById("nav-mobile");

burger.addEventListener("click", event => {
    navmobile.classList.toggle("nav-show");
});
