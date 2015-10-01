//overall app logic and loader...
function travelNotes() {
  "use strict";

  //manage input field and new note output
  function createNote() {
    //object for wrapper html for note
    var $note = $("<p>");
    //define input field
    var $note_text = $(".note-input input");

    //Creation of button and label.-mb
    //http://stackoverflow.com/questions/16303954/setting-button-text-via-javascript
    var $button_delete = document.createElement("BUTTON");
    var $label_delete = document.createTextNode("delete");
    $button_delete.appendChild($label_delete);

    //conditional check for input field
    if ($note_text.val() !== "") {
      //set content for note
      //added the delete button to the end of the note.-mb
      $note.html($note_text.val()).append($button_delete);

      //hide new note to setup fadeIn...
      $note.hide();

      //append note text to note-output
      $(".note-output").append($note);

      //fadeIn hidden new note
      $note.fadeIn("slow");
      $note_text.val("");

      //handle user event for 'delete' press for each note.-mb
      $button_delete.onclick = function(e) {
        $note.remove();
        $button_delete.remove();
      }
    }
  }

  //delete all notes function used by the delete all button.-mb
  function deleteAllNotes(){
    $("p").remove();  //This is problematic because it deletes the top and bottom text also.
  }

  //handle user event for `add` button click
  $(".note-input button").on("click", function(e) {
    createNote();
  });

  //handle user event for keyboard press
  $(".note-input input").on("keypress", function(e){
    //check code for keyboard press
    if (e.keyCode === 13) {
      createNote();
    }
  });

  //handle user event for 'delete all' button click-mb
  $(".note-output button").on("click", function(e){
    deleteAllNotes();
  });

};

$(document).ready(travelNotes);
