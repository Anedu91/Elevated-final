jQuery(function() {
	initFoundation();
});

function initFoundation() {
	jQuery(document).foundation();
}

/* Navbar behavior */
const navbarButton = document.querySelector('.navigation__avatar');
const menuContainer = document.querySelector('.navbar-menu__container')

if(navbarButton){
  navbarButton.addEventListener('click', ()=> {
    event.preventDefault();
    menuContainer.classList.toggle('open')
  })
}
/* Text editor quill */
const editor = document.querySelector('#editor-container');

if(editor){
  var quill = new Quill('#editor-container', {
    modules: {
      toolbar: [
        [{ header: [1, 2, false] }],
        ['bold', 'italic', 'underline'],
        ['image', 'code-block']
      ]
    },
    placeholder: 'Compose an epic...',
    theme: 'snow' 
  });
}

/*Chat behavior*/

const chatSidebar = document.querySelector('.chat__sidebar');
const sidebarButton = document.querySelector('#chat-button');
const sidebarClose = document.querySelector('#sidebar-close');

if(sidebarButton){
  sidebarButton.addEventListener('click', () =>{
    event.preventDefault();
    chatSidebar.classList.add('open')
  });

  sidebarClose.addEventListener('click', ()=>{
    event.preventDefault();
    chatSidebar.classList.remove('open')
  })
}