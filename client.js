function addNewEmployeeForm(event) {
  {
    event.preventDefault();
  }
  let firstNameVal = document.querySelector('#firstNameInput').value;
  console.log(firstNameVal);
  let lastNameVal = document.querySelector('#lastNameInput').value;
  console.log(lastNameVal);
  let idNumberVal = document.querySelector('#idNumberInput').value;
  console.log(idNumberVal);
  let jobTitleVal = document.querySelector('#jobTitleInput').value;
  console.log(jobTitleVal);
  let annualSalaryVal = document.querySelector('#annualSalaryInput').value;
  console.log(annualSalaryVal);

  let addNewEmployeeTable = document.querySelector('#newAddedEmployee');

  addNewEmployeeTable.innerHTML += `

<tr>
  <td>${firstNameVal}</td>
  <td>${lastNameVal}</td>
  <td>${idNumberVal}</td>
  <td>${jobTitleVal}</td>
  <td>${annualSalaryVal}</td>
</tr>`;
}
