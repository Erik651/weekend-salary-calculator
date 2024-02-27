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

  let addNewEmployeeTable = document.querySelector('#newAddedEmployee');

  addNewEmployeeTable.innerHTML += `

<tr>
  <td>${firstNameVal}</td>
  <td>${lastNameVal}</td>
  <td>${idNumberVal}</td>
  <td>${jobTitleVal}</td>
  <td>${annualSalaryVal}</td>
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

  let monthlySum = sum / 12;
  console.log(monthlySum);

  let monthlyTotal = document.querySelector('footer');
  monthlyTotal.innerHTML = `<tr>
  <td>Monthly Salary</td>
  <td>${monthlySum}</td></tr>`;

  let element = document.getElementById('footerTable');
  if (monthlySum > 50000) {
    console.log('test');
    element.id = 'newClass';
  } else {
    element.id = 'footerTable';
  }
}
