// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
  {
    id: 5,
    name: "Mayank H SHah",
    job: "IT HEAD",
    img:
      "https://images.unsplash.com/photo-1492681290082-e932832941e6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

const btnp=document.querySelector(".prev-btn");
const btnn=document.querySelector(".next-btn");
const ran_btn=document.querySelector(".random-btn");

const img=document.getElementById("person-img");
const author=document.getElementById("author") ;
const job=document.getElementById("job") ;
const info=document.getElementById("info") ;


let curr = 0;

btnp.addEventListener("click", function()
{
  curr--;
  if (curr < 0){
    curr=reviews.length-1;
  };
console.log(curr);
img.src=reviews[curr].img;
author.textContent=reviews[curr].name;
job.textContent=reviews[curr].job;
info.textContent=reviews[curr].text;

});

btnn.addEventListener("click", function(){
  curr++;
  if (curr >reviews.length-1){
    curr=0;
  };
  img.src = reviews[curr].img;
author.textContent=reviews[curr].name;
job.textContent=reviews[curr].job;
info.textContent=reviews[curr].text;
});

ran_btn.addEventListener("click", function(){

  let arr_value = get_random();
  img.src=reviews[arr_value].img;
  author.textContent=reviews[arr_value].name;
  job.textContent=reviews[arr_value].job;
  info.textContent=reviews[arr_value].text;

});


function get_random(){

  let ran = Math.floor(Math.random()*reviews.length  ); 
  return ran;
};

window.addEventListener('DOMContentLoaded',function(){

img.src = reviews[curr].img;
author.textContent=reviews[curr].name;
job.textContent=reviews[curr].job;
info.textContent=reviews[curr].text;
});