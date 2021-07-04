window.addEventListener('DOMContentLoaded',(event)=>{
    createInnerHtml();
});

const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>"
                        +"<th>Salary</th><th>Start Date</th><th>Actions</th>";
    let innerHtml = `${headerHtml}`;
    let employeePayrollList = createEmployeePayrollJSON();
    for(const employeePayrollData of employeePayrollList){
        innerHtml = `${innerHtml}
        <tr>
            <td><img class="profile" alt="" src="${employeePayrollData._profilePic}">
        </td>
        <td>${employeePayrollData._name}</td>
        <td>${employeePayrollData._gender}</td>
        <td>${getDeptHtml(employeePayrollData._department)}</td>
        <td>${employeePayrollData._salary}</td>
        <td>${employeePayrollData._startDate}</td>
        <td>
            <img id="1" onclick="remove(this)" alt="delete"
                src="C:/Users/Admin/EmpPayRollApp/assets/icons/delete-black-18dp.svg">
            <img id="1" alt="edit" onclick="update(this)" 
                src="C:/Users/Admin/EmpPayRollApp/assets/icons/create-black-18dp.svg">
        </td>
        </tr>
    `;
    }
    document.querySelector('#table-display').innerHTML = innerHtml;
}

const createEmployeePayrollJSON = () => {
    let employeePayrollListLocal = [
        {
            _name: "Vaibhav Jagtap",
            _gender: "M",
            _department: [
                "Engineering",
                "Finance"
            ],
            _salary: "450000",
            _startDate: "13 Oct 2019",
            _note: '',
            _profilePic: "C:/Users/Admin/EmpPayRollApp/assets/profile-images/Ellipse -2.png"
        },
        {
            _name: "Suraj",
            _gender: "M",
            _department: [
                "Sales"
            ],
            _salary: "300000",
            _startDate: "24 Dec 2020",
            _note: '',
            _profilePic: "C:/Users/Admin/EmpPayRollApp/assets/profile-images/Ellipse -4.png"
        }
    ];
    return employeePayrollListLocal;
}

const getDeptHtml = (deptList) =>{
    let deptHtml = '';
    for(const dept of deptList){
        deptHtml = `${deptHtml}<div class = 'dept-label'>${dept}</div>`
    }
    return deptHtml;
}