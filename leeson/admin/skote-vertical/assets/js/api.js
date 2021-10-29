
const url = 'http://localhost:3000/products';
const addModalForm = document.querySelector('.custom-validation')
const editModalForm = document.querySelector('#myEditModal .custom-validation-item');
let id = '';

fetch(url) 
    .then(res => res.json())
    .then(data => {
        data.forEach(user => {
            rendenrUsers(user)
        });
    });

const tableUsers = document.querySelector('#table-user');
const rendenrUsers =(user) => {
    const output =`
    <tr data-id = '${user.id}'>
    <td class="imgfont"><img src="${user.img}" alt=""></td>
    <td class="fontt">${user.name}</td>
    <td class="fontt">${user.tag}</td>
    <td class="fontt">${user.price}</td>
    <td class="fontt">${user.sale}</td>
    <td class=""><a class="btn-edit text-success"><i class="fas fa-user-edit"></i></a> 
        <a class="btn-del ms-2 text-primary"><i class="fas fa-trash-alt"></i></a>
    </td>   
</tr>
    `;//''
    tableUsers.insertAdjacentHTML('beforeend', output);
   const btndel = document.querySelector(`[data-id = '${user.id}']  .btn-del`);
   btndel.addEventListener('click', (e) => {
     fetch(`${url}/${user.id}`, {
        method:'DELETE'
    })
    .then(res => res.json())
    .then(() => location.reload());
   });
   // edit
   const btnEdit = document.querySelector(`[data-id = '${user.id}']  .btn-edit`);
   btnEdit.addEventListener('click', (e) => {
       e.preventDefault();
       id = user.id;
       $("#myEditModal").modal('show');
       editModalForm.name.value = user.name;
       editModalForm.tag.value = user.tag;
       editModalForm.price.value = user.price;
       editModalForm.sale.value = user.sale;
       editModalForm.img.value = user.img;
   })
}
addModalForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let input = document.getElementsByClassName('input-add');
    var name = input[0].value;
    var tag = input[1].value;
    var price = input[2].value;
    var sale = input[3].value;
    var url = input[4].value;

    var product = {
        img: url,
        name,
        tag,
        price,
        sale,
    }

    fetch('http://localhost:3000/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product),
    }).then(res => console.log(res));

    
})

editModalForm.addEventListener('submit', (e) => {
    e.preventDefault();
    fetch(`${url}/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: editModalForm.name.value,
            tag: editModalForm.tag.value,
            price: editModalForm.price.value,
            sale: editModalForm.sale.value,
            img: editModalForm.img.value,
        })
    })
    .then(res => res.json())
    .then(() => Location.reload())
    editModalForm.name.value = '';
    editModalForm.tag.value = '';
    editModalForm.price.value = '';
    editModalForm.sale.value = '';
    editModalForm.img.value = '';
})

