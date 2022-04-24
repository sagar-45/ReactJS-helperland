import React from 'react'

export const SignUpValidation = (data) => {
    let errrolist = {};
    if (data.Firstname === '') {
        errrolist.Firstname = "Firstname is required"
    }
    if(data.Lastname===''){
        errrolist.Lastname="Lastname is required"
    }
    if(data.Email===''){
        errrolist.Email="Email address is required"
    }
    if(data.M_no===''){
        errrolist.M_no="Mobile number is required"
    }
    else if(data.M_no.length !==10){
        errrolist.M_no="Mobile number is must be 10 digits"
    }
    if(data.Password===''){
        errrolist.Password="Password is required"
    }
    if(data.C_password===''){
        errrolist.C_password="Confirm Password is required"
    }
    return(errrolist)
}
export const loginValidation=(data)=>{
    let errorlist={};
    if (data.Email === '') {
        errorlist.Email = "EMail address is required"
    }
    if(data.Password===''){
        errorlist.Password="Password is required"
    }
    return errorlist;
}