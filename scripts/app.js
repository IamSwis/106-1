function saveTask() {
    console.log("Saving the task")
}


function init() {
    console.log("this is a task manager");
    //We want to load all the data we have in the form 


    // we want to hook the events
    $("#btnSave").click(saveTask)
    //

}

window.onload = init();