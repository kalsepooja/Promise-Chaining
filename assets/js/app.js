const cl = console.log;
const formControl = document.getElementById('blogForm');
const titleControl = document.getElementById('title');
const contentControl = document.getElementById('content');
const blogContainer = document.getElementById('blogContainer');



const blogArray = [
    {
        title: "html",
        content: "html is a programming language which is used to create web pages."
    },

    {
        title: "javascript",
        content: "js is a programming language which is used to apply functionality."
    },
];

const onSubHandler = (eve) =>{
    eve.preventDefault();
    let obj = {
        title: titleControl.value,
        content: contentControl.value,
    }
    // cl(obj)
    createObject(obj)
        .then((res) => {
            blogArray.push(res)
            return readBlogs()
        })
        .then((res) => {
            cl(res)
            templeting(blogArray)
        })
        .catch((err) => {
            cl(err)
        })
};

const createObject = (obj) =>{
    let promise = new Promise((resolve, reject) => {
       setTimeout(() =>{
        let error = false;
        if(!error){
            resolve(obj);
        }else{
            reject('something went wrong while creating blogs.')
        }
       })
    })
    return promise
};

const readBlogs = () => {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            let err = false;
            if(!err) {
                resolve(blogArray)
            }else{
                reject('something went wrong while fetching data.')
            }
        })
    })
    return promise
};

const templeting = (arr) =>{
    let result = "";
    arr.forEach(ele => {
        result += `
        <div class="row">
            <div class="col-md-6">
                <div class="card mb-4">
                    <div class="card-header">
                        ${ele.title}
                    </div>
                    <div class="card-body">
                         ${ele.content}
                    </div>
                    <div class="card-body">
                        <button class="btn btn-primary">Edit</button>
                        <button class="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>
        </div>

        
        `
    })
    blogContainer.innerHTML = result;
}
templeting(blogArray);








formControl.addEventListener("submit", onSubHandler)