function showAllNotes(){

    var storedNotesString = localStorage.getItem("all_notes")
    var allNotes = JSON.parse(storedNotesString)
    if(allNotes != null){
        var noteDisplayer = document.getElementById("all_notes_display")
        noteDisplayer.innerHTML = null
        var numberOfNotes = allNotes.length
        for (var i = 0; i < numberOfNotes; i++) {
            var aNote = allNotes[i]
            noteDisplayer.innerHTML += "<hr><p>" + aNote + "</p>"
        } 
    }     
}