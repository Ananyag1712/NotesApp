let notes =
JSON.parse(localStorage.getItem("notes")) || [];

displayNotes();

function addNote(){

    const noteInput =
        document.getElementById("noteInput");

    const noteText =
        noteInput.value;

    if(noteText === "") return;

    notes.push(noteText);

    localStorage.setItem(
        "notes",
        JSON.stringify(notes)
    );

    noteInput.value = "";

    displayNotes();
}

function displayNotes(){

    const notesContainer =
        document.getElementById("notesContainer");

    notesContainer.innerHTML = "";

    notes.forEach((note,index)=>{

        notesContainer.innerHTML += `
        <div class="note">

            <p>${note}</p>

            <button
                class="delete-btn"
                onclick="deleteNote(${index})">

                Delete

            </button>

        </div>
        `;
    });
}

function deleteNote(index){

    notes.splice(index,1);

    localStorage.setItem(
        "notes",
        JSON.stringify(notes)
    );

    displayNotes();
}