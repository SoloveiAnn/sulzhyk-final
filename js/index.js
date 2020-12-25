function destroy() {
    document.querySelector('html').innerHTML = '';
    document.querySelector('html').style.backgroundColor = 'black';
}
const buttonDestroy = document.querySelector('.destroy-btn');
buttonDestroy.addEventListener('click', destroy);

