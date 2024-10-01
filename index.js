document.addEventListener('DOMContentLoaded',()=>{
    const cardContainer=document.getElementById('card-container');

    const arr= new Array(8).fill(0);

    const cardHTML=`
    <div class=" border bg-white rounded-[25px] shadow-2xl p-6 h-[22rem] w-[17rem] flex flex-col items-center">
    <img src="./assets/product-removebg-preview.png" alt="product-img" class="object-cover h-[13rem]"/>
    <h2 class="font-medium">CRYSTAL AGATE PHONE GRIP</h2>
    <h2 class="text-sky-700 font-medium">18.99$</h2>
    <button class="flex justify-center items-center text-blue-600 bg-white border-2 border-blue-500 p-3 m-2 w-[10rem] h-[3rem] rounded-[12px] text-sm" >BUY NOW<button>
    </div>
    `;

    const cards= arr.map(()=>cardHTML).join('');
    cardContainer.innerHTML=cards;
}) 