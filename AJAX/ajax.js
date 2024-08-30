console.log("AJAX tutorial in one vidio.");

let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickHandler);

function buttonClickHandler() {
    console.log("button clicked.");

    // create xhr object
    const xhr = new XMLHttpRequest();

    // open the object
    xhr.open('GET', 'ajaxFile.txt', true);

    //what to do on progress (optional)
    xhr.onprogress = function()
    {
        console.log("on Progress...");
    }


    //call when state is change.
    xhr.onreadystatechange = function () {

        console.log("ready state is", xhr.readyState);
    }

    //what to do when response is ready.
    xhr.onload = function () {
        if (this.status === 200) {

            console.log(this.responseText)
        } else {
            console.log("some error...");
        }
    }

    //send the request
    xhr.send();


    console.log("we are done.");

}

let postBtn = document.getElementById('postBtn');
postBtn.addEventListener('click',postButtonClickHandler);

function postButtonClickHandler()
{
    console.log("post calling...");

    //create object
    const xhr = new XMLHttpRequest();

    //open
    xhr.open('POST','https://dummy.restapiexample.com/api/v1/create',true);
    xhr.getResponseHeader('Content-type','applilcation/json');
    params = `{"name":"test12345sdsdfs6","salary":"123","age":"23"}`;
    xhr.send(params);

    console.log("post request done.");

}

let popBtn = document.getElementById('popBtn');

popBtn.addEventListener('click',PopHandler);
function PopHandler(){
    console.log("clicked pop Handler");

    const xhr = new XMLHttpRequest();

    xhr.open('GET','https://dummy.restapiexample.com/api/v1/employees',true);
    xhr.getResponseHeader('Content-type','application/json');

    xhr.onload = function()
    {
        if(this.status === 200)
        {
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            let list = document.getElementById('list');
            str = "";
            for(key in obj)
            {
                str += `<li>${obj[key].employee_name}</li>`
            }
        }
        else{
            console.log("Some error occured");
        }
    }

    xhr.send();

}