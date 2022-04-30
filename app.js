import { Task } from "./models/Task.js";
import { UI } from "./models/UI.js";

const ui = new UI();

document.getElementById('form').addEventListener('submit',(e)=>{
    e.preventDefault()
    const NAME = document.getElementById('name').value;
    const DESCRIPTION = document.getElementById('description').value;

    const product = new Task(NAME,DESCRIPTION);
    ui.addProduct(product);

})

document.getElementById('tasks').addEventListener('click',(e)=>{
    if(e.target.dataset.action === "delete"){
        ui.deleteProduct(e.target)
    }
})