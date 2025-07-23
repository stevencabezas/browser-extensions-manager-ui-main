
let checkboxes = document.querySelectorAll('.toggle-extension');

checkboxes.forEach(ckbox => {
    ckbox.addEventListener( 'change', function(e){
        let parent = ckbox.closest('.extension-card');
        if(!e.target.checked){
            parent.classList.add('hide')
        }else{
            parent.classList.remove('hide')
        }
    })
})
