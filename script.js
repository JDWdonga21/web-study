// 사용자가 입력 -> 버튼 누르면 - > 값을 가지고 와서 -> 리스트에 추가
function addTodo(){
    let todo = $("#input-area").val();
    console.log(todo);
    let id = Math.floor(Math.random()*10000);
    let list_item = `
        <li class="list-group-item d-flex justify-content-between align-items-center list-${id}" style="text-align: center;">
            ${todo}
            <span class="badge badge-danger badge-pill" onclick="deleteTodo(${id})">삭제</span>
        </li>
    `
    $("#list-group").append(list_item);
    $("#input-area").val('');
}

function deleteTodo(id){
    $(".list-"+id).remove();
}
