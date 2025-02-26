<script>
import {piniaStore} from "@/store";
import {throttle} from "lodash";
// import {debounce} from "lodash"; It is good for search input field | সার্চ ফিল্ডের মতো ইভেন্টের জন্য Debounce ভালো।
// import {throttle} from "lodash"; it is good for form submission and I use it for form submission



export default {
  name:'aboutPage',
  data(){
    return {
      name:'',
      password:'',
      number:[1,2,3,4,5,6,7],
      edit:false,
      index:null,

    }
  },

  setup(){
    const store = piniaStore();
    const users = store.user;
    return {users,store};

  },
  methods:{

    submitForm()
    {
     if (!this.edit)
     {
       let person = {name:this.name,password:this.password};
       this.store.new_user(person);
       this.name = '';
       this.password = '';
       alert('Sing up successfully');
       this.$router.push('/home');
       alert('Welcome to the Home Page Sir !');
     } else
     {
       let person = {name:this.name,password:this.password};
       this.store.edit_user(this.index,person);
       this.name = '';
       this.password = '';
       this.index = null;
       this.edit = false;
       alert('Edited successfully');
     }
    },
    edit_person(person){
     let val =  this.users[person];
     this.name = val.name;
     this.password = val.password;
     this.edit = true;
     this.index = person;
    },

  },
  created() {
    this.debounceSubmit = throttle(this.submitForm,10000); // I should use throttle for form submitting instead of debounce |
  },
  computed:
      {
    numbers(){
      return this.number.find((_,val)=>{
        return val === 5;
      });
    }
      }

}
</script>

<template>
  <h1>{{numbers}}</h1>
  <h1>{{index}}</h1>
  <div class=" ">
    <table class="table table-responsive text-white">
      <thead>
      <tr>
        <th>First Name</th>
        <th>Password</th>
        <th>Action</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(user,index)  in users" :key="index">
        <td>{{user.name}}</td>
        <td>{{user.password}}</td>
        <td>
          <button class="btn btn-success" @click="edit_person(index)">Edit</button>
          <button class="btn btn-danger ms-3" @click="store.deleteUser(index)">Destroy</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
  <hr>
<div class="wrap">
  <form @submit.prevent="debounceSubmit" class="form form-responsive">
    <input type="text" placeholder="Name !"  v-model="name" class="form-control mb-3" required>
    <input type="password" placeholder="Password !"  v-model="password" class="form-control mb-3" required>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</div>
</template>

<style>

</style>