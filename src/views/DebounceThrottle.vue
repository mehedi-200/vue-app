<template>
  <div class="col-md-6 offset-md-3">
    <div class="w-100 m-auto mt-5 mb-3">
      <input type="text" name="" id="" @input="searchData" class="form-control" placeholder="Search Here">
      <div class="w-100 mt-3">
        <ul>
          <li  v-for="item in filters" :key="item.index" >{{item}}</li>
          <li v-if="this.search !== ''" :style="list_style"> {{filters.length === 0 ? 'We do not find any match !':''}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {debounce} from "lodash"; //It is good for search input field | সার্চ ফিল্ডের মতো ইভেন্টের জন্য Debounce ভালো।
export default {
  data() {
    return {
      list_style:'list-style:none',
      search:'',
      items: [
        "Apple", "Banana", "Mango", "Orange", "Pineapple", "Grapes", "Strawberry", "Watermelon", "Kiwi", "Peach",
        "Car", "Bike", "Bus", "Train", "Airplane", "Ship", "Truck", "Scooter", "Helicopter", "Tram",
        "Cat", "Dog", "Elephant", "Lion", "Tiger", "Giraffe", "Zebra", "Horse", "Monkey", "Rabbit",
        "Red", "Blue", "Green", "Yellow", "Black", "White", "Purple", "Pink", "Brown", "Orange",
        "Chair", "Table", "Bed", "Sofa", "Cupboard", "Desk", "Lamp", "Fan", "Clock", "Mirror",
        "Laptop", "Mobile", "Tablet", "Smartwatch", "Headphone", "Keyboard", "Mouse", "Monitor", "Printer", "Speaker",
        "Book", "Notebook", "Pen", "Pencil", "Eraser", "Sharpener", "Ruler", "Marker", "Calculator", "Diary",
        "Football", "Cricket", "Basketball", "Volleyball", "Tennis", "Badminton", "Golf", "Hockey", "Baseball", "Chess",
        "Doctor", "Engineer", "Teacher", "Pilot", "Artist", "Chef", "Farmer", "Lawyer", "Scientist", "Soldier",
        "Sun", "Moon", "Star", "Planet", "Galaxy", "Comet", "Asteroid", "Meteor", "Nebula", "Black Hole",
        "School", "Hospital", "Library", "Restaurant", "Cinema", "Museum", "Park", "Mall", "Stadium", "Zoo",
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October",
        "November", "December", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Holiday",
        "Pizza", "Burger", "Pasta", "Rice", "Bread", "Butter", "Milk", "Cheese", "Egg", "Fish",
        "Flower", "Tree", "Grass", "Leaf", "Root", "Branch", "Seed", "Fruit", "Vegetable", "Herb",
        "Mountain", "River", "Lake", "Ocean", "Desert", "Forest", "Island", "Valley", "Hill", "Cave",
        "Gold", "Silver", "Copper", "Iron", "Diamond", "Platinum", "Mercury", "Zinc", "Aluminum", "Lead",
        "Mathematics", "Science", "History", "Geography", "English", "Physics", "Chemistry", "Biology", "Economics", "Philosophy",
        "Happy", "Sad", "Angry", "Excited", "Nervous", "Scared", "Surprised", "Tired", "Lazy", "Energetic",
        "Rain", "Snow", "Storm", "Cloud", "Wind", "Thunder", "Lightning", "Fog", "Sunshine", "Drizzle"
      ],
    };
  },
  computed: {
    filters() {
      return this.search ? this.items.filter(item=>item.toLowerCase().includes(this.search.toLowerCase())):'';
    },
  },
  methods: {
    searchData: debounce(function (event) {
      this.search = event.target.value;
    }, 500),
  },


}

</script>
