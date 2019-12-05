function onFormSubmit() {
    // get form data
    let formData = readFormData()
    insertNewRecord(formData);

}

function readFormData() {
    // after reading data, insert into the array
    let formData = {};
    // get value of each Id
    formData["Name"] = document.getElementById("Name").value;
    formData["Age"] = document.getElementById("Age").value;
    formData["Department"] = document.getElementById("Department").value;
    return formData;
}

function insertNewRecord(data){
    let table = document.getElementById("studentList").getElementsByTagName("tbody")[0];
    let newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.Name;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.Age;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Department;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = `<a href="">Edit</a>
                      <a href="">Delete</a>`;
}

function onEdit(td){
    selectedRow = td.parentElement.parentElement
    document.getElementById("Name").value;
}

