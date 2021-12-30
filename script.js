const taskList = document.querySelector('ul')

function deleteTask() {
  let btnsDelete = taskList.getElementsByTagName('i')
  console.log(btnsDelete)

  function delTask(e) {
    console.log((e.target.parentNode.parentNode.style.display = 'none'))
  }

  for (let i = 0; i < btnsDelete.length; i++) {
    btnsDelete[i].addEventListener('click', delTask)
  }
}
deleteTask()

function checkTask() {
  let checkboxes = taskList.querySelectorAll('.check')
  console.log(checkboxes)

  function doneTask(e) {
    let element = e.target
    let task = element.nextElementSibling
    if (element.checked == true) {
      console.log('checked')

      task.style.textDecoration = 'line-through'
      task.nextElementSibling.classList.add('active')
    } else {
      task.style.textDecoration = 'none'
      task.nextElementSibling.classList.remove('active')
    }
  }

  checkboxes.forEach(checkbox => {
    console.log(checkbox)
    checkbox.addEventListener('click', doneTask)
  })
}
checkTask()

function addTask() {
  console.log('função add chamada')
  const elTask = document.querySelector('#task')
  const task = elTask.value
  elTask.value = ''
  taskList.innerHTML += `
    <li>
    <input class="check" type="checkbox" name="" id="">
    <span>${task}</span>
    <span class="delete"><i class="fas fa-trash-alt"></i></span>
    </li>
  `

  deleteTask()
  checkTask()
}
