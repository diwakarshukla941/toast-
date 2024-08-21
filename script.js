const toastBox = document.getElementById('toastBox');
let successMessage = '<i class="fa-solid fa-circle-check"></i> successfully Submitted';
let errorMessage = ' <i class="fa-solid fa-bomb"></i> error!!!, something went wrong';
let invalidMessage = '<i class="fa-solid fa-circle-question"></i> invalid input ,please check!!';

const showToast = (msg) =>{
    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    if(msg.includes('error')){
        toast.classList.add('error');
    }else if(msg.includes('invalid')){
        toast.classList.add('invalid');
    }

    setTimeout(()=>{
        toast.remove();
    },6000)
}