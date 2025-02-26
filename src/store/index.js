import {defineStore} from "pinia";


export const piniaStore = defineStore('registration',{
    state:()=>({
        user:[
            {name:'alex',password:'1234'},
            {name:'josh',password:'12345678'}
             ],
        isLoggedIn:false,
    }),
    actions:{
        new_user(person)
        {
            this.user.push(person);
            this.isLoggedIn = true;
        },
        edit_user(index,person)
        {
            this.user[index].name = person.name;
            this.user[index].password = person.password;
        },
        deleteUser(person)
        {
            this.user.splice(person,1);
        }
    },
    getters:{
        edit(state)
        {
           return state.edit_user;
        },

    }
})