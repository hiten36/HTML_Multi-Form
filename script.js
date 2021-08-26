document.getElementById('next1').addEventListener('click',()=>{
    document.querySelector('.part2').style.display='block';
    document.querySelector('.part1').style.display='none';
})
document.getElementById('next2').addEventListener('click',()=>{
    document.querySelector('.part3').style.display='block';
    document.querySelector('.part2').style.display='none';
})
document.getElementById('prev1').addEventListener('click',()=>{
    document.querySelector('.part1').style.display='block';
    document.querySelector('.part2').style.display='none';
})
document.getElementById('prev2').addEventListener('click',()=>{
    document.querySelector('.part2').style.display='block';
    document.querySelector('.part3').style.display='none';
})

document.querySelector('.submit').addEventListener('click',(e)=>{
    e.preventDefault();
    var data={};
    data["fname"]=document.getElementById('fname').value;
    data["lname"]=document.getElementById('lname').value;
    data["nname"]=document.getElementById('nname').value;
    data["email"]=document.getElementById('email').value;
    data["phone"]=document.getElementById('phone').value;
    data["country"]=document.getElementById('country').value;
    data["zip"]=document.getElementById('zip').value;
    data["city"]=document.getElementById('city').value;
    
    console.log(data);
})