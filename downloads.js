let btndownload=document.querySelector('#resume_download');
let imag=document.querySelector("#link_download");

btndownload.addEventListener('click',()=>{
    let imgpath = imag.getAttribute('href');
    let filename =getFileName(imgpath);
    saveAs(imgpath,filename);
    console.log('hh')
});

function getFileName(src) {
    return src.substring(src.lastIndexOf('/')+1);
}