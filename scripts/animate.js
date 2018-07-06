// rotating effect on toggle icon
const rotate = document.querySelector('.fa-bars');

rotate.addEventListener('mouseenter', function(event){
    rotate.classList.add('fa-rotate-90');
});

rotate.addEventListener('mouseleave', function(event){
    rotate.classList.remove('fa-rotate-90');
});