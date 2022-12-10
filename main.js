const restaurantData=[
    {
        id:1,
        rName:"Maharashtrian Thali",
        details:"North Indian,Chinese, Beverages,Snackes",
        rating:3,
        time:44,
        cost:"200 FOR TWO",
        offer:50,
        code:"WELCOME50",
        src:"./assets/img/01.webp",
        promoted:"Promoted"
    },
    {
        id:2,
        rName:"Shree Kala-Aaba Misalwale",
        details:"Snacks,North Indian,Chinese, Beverages,Bakery, Dessert",
        rating:4,
        time:30,
        cost:"250 FOR TWO",
        offer:30,
        code:"WELCOME50",
        src:"./assets/img/02.webp",
        promoted:" "
    },
    {
        id:3,
        rName:"Haldiram's Restaurant",
        details:"Sweets,North Indian,Chinese, Beverages,Snacks",
        rating:4.5,
        time:20,
        cost:"350 FOR TWO",
        offer:20,
        code:"WELCOME50",
        src:"./assets/img/03.webp",
        promoted:"Promoted"
    },
    {
        id:4,
        rName:"Gavkari",
        details:"North Indian,Chinese, Beverages",
        rating:4.5,
        time:20,
        cost:"350 FOR TWO",
        offer:20,
        code:"WELCOME50",
        src:"./assets/img/04.webp",
        promoted:""
    },
    {
        id:5,
        rName:"Cafe Durga",
        details:"Bakery, Dessert,North Indian,Chinese, Beverages",
        rating:4.5,
        time:20,
        cost:"350 FOR TWO",
        offer:20,
        code:"WELCOME50",
        src:"./assets/img/05.webp",
        promoted:"Promoted"
    },
    {
        id:6,
        rName:"Hotel Peth Pujari",
        details:"Maharashtrian,Beverages, Fast Food,Snaks",
        rating:4.5,
        time:20,
        cost:"350 FOR TWO",
        offer:20,
        code:"WELCOME50",
        src:"./assets/img/06.webp",
        promoted:""
    },
    {
        id:7,
        rName:"Ganesh Bhel",
        details:"Maharashtrian,Dessert,North Indian,Chinese, Beverages",
        rating:4.5,
        time:20,
        cost:"350 FOR TWO",
        offer:20,
        code:"WELCOME50",
        src:"./assets/img/07.webp",
        promoted:"Promoted"
    },
    {
        id:8,
        rName:"Govindas",
        details:"Chaat,North Indian,South,Indian,Fast Food,Beverages,Desserts",
        rating:4.5,
        time:20,
        cost:"350 FOR TWO",
        offer:20,
        code:"WELCOME50",
        src:"./assets/img/08.webp",
        promoted:"Promoted"
    },
]


const rList=document.getElementById("rList")

for (let item=0;item<restaurantData.length;item++){
    // const{rName}
    // const cardBox=document.createDocumentFragment()
    const cardBox=document.createElement("div");
    cardBox.className="place";

    cardBox.innerHTML=`
    <div class="list-item">
      <div class="item-content">
        <div class="top-img">
          <img 
            width="250"
            height="120"
            src="${restaurantData[item].src}" 
        </div>
        <div
          class="status"
          style="
            background: rgb(58, 60, 65);
            color: rgb(255, 255, 255);
            border-color: rgb(30, 32, 35) transparent;
          "
        >
          <div class="status-title">${restaurantData[item].promoted}</div>
        </div>
        <div class="place-name-div">
          <div class="name">${restaurantData[item].rName}</div>
          <div
            class="food-items"
            title="Bakery, Desserts, Beverages, Combo, European, Ice Cream, Juices, Waffle, Sweets">
          ${restaurantData[item].details}
          </div>
        </div>
        <div class="info-div">
          <div class="rating">
            <span class="icon-star"
              ><i class="fa-solid fa-star"></i></span
            ><span>${restaurantData[item].rating}</span>
          </div>
          <div>•</div>
          <div>${restaurantData[item].time} MINS</div>
          <div>•</div>
          <div class="price">₹${restaurantData[item].cost} </div>
        </div>
        <div class="offer-div">
          <span class="icon-offer-filled"
            ><i class="fa-solid fa-tags"></i
          ></span>
          <span class="offer-text">${restaurantData[item].offer}% off | Use ${restaurantData[item].code}</span>
        </div>
      </div>
      <div class="quick-view">
        <span role="button" aria-label="Open" class="view-btn"
          >Quick View</span
        >
      </div>
    </div>`;


    rList.appendChild(cardBox)
  

}


