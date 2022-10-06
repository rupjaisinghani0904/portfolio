const switchElement = document.querySelector('.switch')

switchElement.addEventListener('click', () => {
    document.body.classList.toggle('dark')
})


const currentLocation = location.href;
const menuItem = document.querySelectorAll('a');
const menuLength = menuItem.length;
for(let i = 0; i < menuLength; i++){
    if(menuItem[i].href === currentLocation){
        menuItem.className = "active"
    }
}