let counts = 0;
const display = document.querySelector('div');
document.getElementById('counter').onclick = () => {
    counts +=1;
    display.textContent = counts;
}
