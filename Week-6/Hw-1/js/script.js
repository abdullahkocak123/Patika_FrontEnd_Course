// function which adds X for deleting that task
function addCloseButton(li) {
  const span = document.createElement("span");
  span.textContent = "×"; // X item
  span.className = "close";
  span.onclick = function () {
    li.remove();
  };

  //to add that span to DOM. otherwise it wont be seen on screen
  li.appendChild(span);
}

// Addind close button to all existing tasks
document.querySelectorAll("#list li").forEach((li) => {
  addCloseButton(li);
});

// when clicked any task, we add class: checked so we can see effect in css file: ul li.checked{...}
document.querySelectorAll("#list li").forEach((li) => {
  li.addEventListener("click", function () {
    this.classList.toggle("checked");
  });
});

function newElement() {
  const input = document.getElementById("task");
  if (input.value.trim() === "") {
    // using Toast class of Bootstap;
    $("#errorToast").toast("show");
    // not to add task if it is empty;
    return;
  }

  //Existing TODO list;
  const list = document.getElementById("list");

  //New task;
  const newtask = document.createElement("li");
  newtask.textContent = input.value;

  // we add listener for class:checked to new task too as we did for existing ones above
  newtask.addEventListener("click", function () {
    this.classList.toggle("checked");
  });

  // adding X button for closing to new task too as we did for existing ones above
  addCloseButton(newtask);

  list.appendChild(newtask);
  // using Toast class of Bootstap;
  $("#liveToast").toast("show");
  //input should be cleared;
  input.value = "";
}
