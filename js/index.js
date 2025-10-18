var websiteNameInput = document.getElementById("SiteName")
// console.log(websiteNameInput);
var websiteURLInput = document.getElementById("SiteURL")
// console.log(websiteURLInput);

var popup = document.getElementById("popup");
var myBody = document.getElementById("my-body-layer")
var closeButton = document.getElementById("closeButton")
// console.log(popup);


var books = []

if(localStorage.getItem("BooksList") !== null){
    books = JSON.parse(localStorage.getItem("BooksList"));
    displayBooks(books)
}
function addBook(){
    var book = {
        id : books.length,
        name : websiteNameInput.value,
        url : websiteURLInput.value
    }

    

    if(book.name == "" || book.name.length < 3 || book.url == "" ){
        popup.classList.remove("d-none");
        myBody.classList.remove("d-none");
        return
    }

    
    
    books.push(book);
    displayBooks(books);
    localStorage.setItem("BooksList" , JSON.stringify(books));

    clearForm();

}


function displayBooks(list){

    
    var cartona = ""
    for (let i = 0; i < list.length; i++) {

        if(list[i] == null){
            continue
        }
        var URL = list[i].url
        if(!URL.startsWith("https://")){
            URL = "https://".concat(URL)
            console.log(URL);
            
        }

        cartona += `
        
            <tr>
                <th scope="row">${i+1}</th>
                <td>${list[i].name}</td>
                <td><a  href="https://${list[i].url}" target="_blank" class="text-decoration-none btn btn-success"><i class="fa-solid fa-eye me-2"></i>Visit</a></td>
                <td><button onclick="deleteBook(${list[i].id})" class="btn btn-danger"><i class="fa-solid fa-trash-can me-2"></i>Delete</button></td>
            </tr>

        `
        
    }

    document.getElementById("tableBody").innerHTML = cartona;
}
function visitURL(){

}
function deleteBook(id){
    books[id]= null;
    displayBooks(books)
    localStorage.setItem("BooksList" , JSON.stringify(books));

}
function clearForm(){
    websiteNameInput.value = "" ;
    websiteURLInput.value = ""
}


function closePopup(){
    popup.classList.add("d-none");
    myBody.classList.add("d-none")
}