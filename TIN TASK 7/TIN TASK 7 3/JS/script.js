

$( document ).ready(function() {
    
    $(document).on('click', '.untoggled', function(event) {
        const doc = document.querySelector('.untoggled');
        doc.classList.remove('untoggled');
        doc.classList.add('toggled');
        document.getElementById('nav-links').classList.add("nav-visible");
        document.getElementById('nav-links').classList.remove("nav-hidden");
    })

    $(document).on('click', '.toggled', function(event) {
        console.log("Closing...")
        const doc = document.querySelector('.toggled');
        doc.classList.remove('toggled');
        doc.classList.add('untoggled');
        document.getElementById('nav-links').classList.remove("nav-visible");
        document.getElementById('nav-links').classList.add("nav-hidden");

    })

})

