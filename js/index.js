var nameInput = document.getElementById("productName")
var linkInput = document.getElementById("prouductLink")
var productList = []
if (localStorage.getItem("list")){
    productList =JSON.parse(localStorage.getItem("list"));
    display()
}


function addProduct(){
    var product ={
        name: nameInput.value,
        link: linkInput.value,
    }
    productList.push(product)
    localStorage.setItem("list",JSON.stringify(productList))

    display()
}

function display(){



    var temp= ""
    for (var i=1;i<productList.length;i++){
       temp+=`  
                    <tr>
                        <th scope="row">`+i+`</th>
                        <td>`+productList[i].name+`</td>
                       <td><a href="`+productList[i].link+`"><button type="button" class="btn btn-secondary "><i class="p-1 fa-solid fa-eye"></i>visit</button></a>
                        </td>
                        <td> <button onclick="deleteProduct(`+i+`)"  class="btn btn-outline-danger"><i class="p-1 fa-solid fa-trash"></i>delete</button>
                        </td>
                    </tr>
                    
                `
    }
    document.getElementById("myTable").innerHTML= temp

}


function deleteProduct(x){
    productList.splice(x,1)
    localStorage.setItem("list",JSON.stringify(productList))

    display()
}

function validate() {
    var pattern = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}(\/[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=]*)?$/;
    var linkInput = document.getElementById("prouductLink").value
    var nameInput = document.getElementById("productName").value
    if (nameInput.length >= 3 && pattern.test(linkInput)) {
        addProduct();
    } else {
        var myModal = new bootstrap.Modal(document.getElementById('myModal'));
        myModal.show()
    }
}


function validateName() {
    if (nameInput.value.length >= 3) {
        nameInput.classList.add("valid");
        nameInput.classList.remove("invalid");
    } else {
        nameInput.classList.add("invalid");
        nameInput.classList.remove("valid");
    }
}

nameInput.addEventListener("keyup", validateName);

function validateurl() {
    var pattern = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}(\/[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=]*)?$/;
    if (pattern.test(linkInput.value)) {
        linkInput.classList.add("valid");
        linkInput.classList.remove("invalid");
    } else {
        linkInput.classList.add("invalid");
        linkInput.classList.remove("valid");
    }
}
linkInput.addEventListener("keyup", validateurl);