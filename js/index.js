function destroy() {
    document.querySelector('html').innerHTML = '';
    document.querySelector('html').style.backgroundColor = 'black';
    target.hidden = '';
}
const buttonDestroy = document.querySelector('.dont-click-btn');
buttonDestroy.addEventListener('click', destroy);
