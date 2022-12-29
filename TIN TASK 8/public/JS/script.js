

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

// Open url form with parameter table = selected item
$(document).on('click',"#btnShowForm", function(){
    var table = document.getElementById("table").value
    window.location = 'form?table='+table
})
$(".table-row").click(function(){
    var table = document.getElementById("tableName").innerText.toLowerCase()
    var id = this.id
    


    window.location = 'show?table='+table+'&id='+id
})


$('#logo').click(function(){
    window.location = '/'
})
})





