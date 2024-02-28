let yearlyTotalSalary = [];

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
  let annualSalaryVal = parseInt(
    document.querySelector('#annualSalaryInput').value
  );
  console.log(annualSalaryVal);
  let monthlyEmployeeTotal = Math.round(annualSalaryVal / 12);

  let addNewEmployeeTable = document.querySelector('#newAddedEmployee');

  addNewEmployeeTable.innerHTML += `
    
    <tr>
    <td>${firstNameVal}</td>
    <td>${lastNameVal}</td>
    <td>${idNumberVal}</td>
    <td>${jobTitleVal}</td>
    <td>${monthlyEmployeeTotal}</td>
    <td>${annualSalaryVal}</td>
    <td><button class="deleteButton" onclick="deleteAddNewEmployeeRow(event)">Delete</button></td>
    </tr>`;

  yearlyTotalSalary.push(annualSalaryVal);
  console.log(yearlyTotalSalary);

  function addedAnnualSalary(yearlyTotalSalary) {
    let total = 0;
    for (let i = 0; i < yearlyTotalSalary.length; i++) {
      total += yearlyTotalSalary[i];
    }
    return total;
  }

  let sum = addedAnnualSalary(yearlyTotalSalary);

  console.log(sum);

  let monthlySum = Math.round(sum / 12);
  console.log(Math.round(monthlySum));

  let monthlyTotal = document.querySelector('footer');
  monthlyTotal.innerHTML = `<tr>
    <td>Monthly Salary $</td>
    <td>${monthlySum}</td></tr>`;

  let element = document.getElementById('footerTable');
  let backGroundElement = document.getElementById('imageBody');
  if (monthlySum > 20000) {
    console.log('test');
    element.id = 'newClass';
    backGroundElement.id = 'bodyImage';
    let monthlyTotal = document.querySelector('footer');
    monthlyTotal.innerHTML = `<tr>
      <td> Over Budget $</td>
      <td>${monthlySum}</td></tr>`;
    // let img = document.createElement('img');
    // img.src = '/Users/eriksilcox/Downloads/CfZRntcUAAA8tqs.jpg';
    // element.appendChild(img);
  } else {
    element.id = 'footerTable';
    backGroundElement.id = 'imageBody';
  }
  {
    // document.getElementById('firstNameInput').value = '';
    // document.getElementById('lastNameInput').value = '';
    // document.getElementById('idNumberInput').value = '';
    // document.getElementById('jobTitleInput').value = '';
    // document.getElementById('annualSalaryInput').value = '';

    document.getElementById('submitForm').reset();
  }
}

let deleteButtons = document.querySelectorAll('.deleteButton');
deleteButtons.forEach(function (button) {
  button.addEventListener('click', deleteAddNewEmployeeRow);
});
function deleteAddNewEmployeeRow(event) {
  let row = event.target.closest('tr');

  if (row) {
    row.parentNode.removeChild(row);
    console.log('row deleted');
  } else {
    console.log('row not found');
  }
}

// let element = document.getElementById('footerTable');
//   let backGroundElement = document.getElementById('imageBody');
//   if (monthlySum > 50000) {
//     console.log('test');
//     element.id = 'newClass';
//     backGroundElement.id = 'bodyImage';
//     // let img = document.createElement('img');
//     // img.src = '/Users/eriksilcox/Downloads/CfZRntcUAAA8tqs.jpg';
//     // element.appendChild(img);
//   } else {
//     element.id = 'footerTable';
//     backGroundElement.id = 'imageBody';
