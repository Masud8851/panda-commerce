// console.log('Connected.')

// যতগুলা ইলিমেন্টে h2 ট্যাগ আছে সেগুলাকে সিলেক্ট করে তার লেখাগুলার কালার lightblue করেদিতে পারো কিনা। 
let secondHeader = document.getElementsByTagName('h2');
for(let i=0; i<secondHeader.length; i++)
{
    secondHeader[i].style.color = 'blue';
}

// backpack আইডি দিয়ে একটা সেকশন আছে। সেই সেকশনের ব্যাকগ্রাউন্ড কালার tomato করে দিতে পারো কিনা। 

