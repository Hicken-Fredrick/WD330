function saveNote(){

    var currentDateAndTime = new Date()
    var aNoteDescription = document.getElementById("description_input").value
    var aNoteText = document.getElementById("note_editor").value
    var aCompleteNote = currentDateAndTime.toLocaleString() + "--" + aNoteDescription 
    aCompleteNote += "<p>" + aNoteText + "</p>"
    var storedNotesString = localStorage.getItem("all_notes")
    var allNotes = JSON.parse(storedNotesString)

    if(allNotes == null){
        allNotes = []
    }

        allNotes.push(aCompleteNote)
        var allNotesString = JSON.stringify(allNotes)
        localStorage.setItem("all_notes", allNotesString)
        showAllNotes()     
    }