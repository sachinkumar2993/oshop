﻿export class User {

    userId:any;
    emailId:string;
    
    constructor(public username:string,public password:string,public isAdmin:boolean){

    }
}