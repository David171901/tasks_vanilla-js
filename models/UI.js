import { Task } from "./Task.js";

export class UI{

    /**
     * 
     * @param {Task} product 
     */
    addProduct(task){
        const TASKLIST = document.getElementById('tasks');
        const element = document.createElement('tr');
        element.innerHTML = `
            <td>${task.name}</td>
            <td>${task.description}</td>
            <td><a class="product__button" data-action="delete">Delete</a></td>
        `;
        TASKLIST.appendChild(element);
        this.resetForm();
    }

    resetForm(){
        document.getElementById('form').reset();
    }

    deleteProduct(element){
        element.parentElement.parentElement.remove();
    }

}