window.addEventListener('DOMContentLoaded',(event)=>{
    createInnerHtml();
});

const createInnerHtml = () => {
    const innerHtml = `
    <tr>
    <th></th>
    <th>Name</th>
    <th>Gender</th>
    <th>Department</th>
    <th>Salary</th>
    <th>Start Date</th>
    <th>Actions</th>
    </tr>
    <tr>
        <td><img class="profile" alt="" src="C:/Users/Admin/EmpPayRollApp/assets/profile-images/Ellipse -2.png">
    </td>
    <td>Vaibhav</td>
    <td>Male</td>
    <td><div class="dept-label">HR</div>
            <div class="dept-label">Finance</div></td>
    <td>450000</td>
    <td>1 Nov 2020</td>
    <td>
        <img id="1" onclick="remove(this)" alt="delete"
            src="C:/Users/Admin/EmpPayRollApp/assets/icons/delete-black-18dp.svg">
        <img id="1" alt="edit" onclick="update(this)" 
            src="C:/Users/Admin/EmpPayRollApp/assets/icons/create-black-18dp.svg">
    </td>
    </tr>
`;
    document.querySelector('#table-display').innerHTML = innerHtml;
}
