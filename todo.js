let inputTodo = document.querySelector('[input-todo]')
let todoList = document.querySelectorAll('div.todos') 
let btn = document.querySelector('.btn')

let isEditable = false

btn.addEventListener('click', () => {
   
    render(inputTodo)
    //createTodo(inputTodo.value)   
})

function render(input) {
    
    if(input.value){

        document.querySelector('.todo-list').append(createTodo(input))
        input.value = ""
    } else {
        alert("insira um ToDo!")
    }
    
}

function createTodo(input){
    

    let todoDiv = document.createElement('div')
        todoDiv.setAttribute("class", "todos")

    let todoinput = document.createElement('input')
        todoinput.setAttribute("type", "checkbox")
        
        todoinput.setAttribute("id", "teste")
        todoinput.setAttribute("class", "check-todo")

        

    let todoP = document.createElement('p')

        todoP.innerHTML = input.value

    let btnDiv = document.createElement('div')
        

    let btnEdit  = document.createElement('button')
            btnEdit.setAttribute("class", "btn btn-edit")
            btnEdit.innerHTML = "edit"
            btnDiv.appendChild(btnEdit)


    let btnX  = document.createElement('button')
        btnX.setAttribute("class", "btn")
        btnX.innerHTML = "x"
        btnDiv.appendChild(btnX)


        



        todoP.appendChild(btnDiv)
        todoDiv.appendChild(todoinput)
        todoDiv.appendChild(todoP)  
        
        
        btnX.addEventListener('click', () => {
            let inputEdit = document.querySelector('.input-edit')
            
            if(isEditable && !inputEdit.value){
                
                alert("digite um novo texto!")
                
                
            }else if(isEditable &&  inputEdit.value ){
                
                let content = inputEdit.value
                todoP.innerText = content
                

                todoP.appendChild(btnDiv)
                todoDiv.appendChild(todoinput)
                todoDiv.appendChild(todoP)

                btnX.innerHTML = "x"             
                btnEdit.setAttribute("class", "btn btn-edit")                
                
                isEditable = false
            
            }else {
                todoDiv.remove()
            }
        })

        btnEdit.addEventListener('click', () => {
            todoP.appendChild(editTodo())
            btnEdit.setAttribute("class", "btn btn-edit hide")
            btnX.innerHTML = "ok"


            
        })
            

    return todoDiv
    
}

    function editTodo() {
        isEditable = true
        let divEdit = document.createElement('div')
        let inputEdit = document.createElement('input')
        divEdit.setAttribute("class", "div-edit")
        inputEdit.setAttribute("class", "input-edit")

        divEdit.appendChild(inputEdit)
        

        return divEdit
    }

    
