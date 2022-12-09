const restaurantData=[
    {
        id:1,
        rName:"Maharashtrian Thali",
        details:"North Indian,Chinese, Beverages",
        rating:3.8,
        time:44,
        cost:"200 FOR TWO",
        offer:50,
        code:"WELCOME50",
        src:"./assets/img/01.webp"
    },
    {
        id:2,
        rName:"Shri Kala",
        details:"North Indian,Chinese, Beverages",
        rating:4.2,
        time:30,
        cost:"250 FOR TWO",
        offer:30,
        code:"WELCOME50",
        src:"./assets/img/02.webp"
    },
    {
        id:3,
        rName:"Govindas",
        details:"North Indian,Chinese, Beverages",
        rating:4.5,
        time:20,
        cost:"350 FOR TWO",
        offer:20,
        code:"WELCOME50",
        src:"./assets/img/03.webp"
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
            class="_2tuBw _12_oN"
            alt="Waffl'd"
            width="254"
            height="160"
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
          <div class="status-title">Promoted</div>
        </div>
        <div class="place-name-div">
          <div class="name">${restaurantData[item].rName}</div>
          <div
            class="food-items"
            title="Bakery, Desserts, Beverages, Combo, European, Ice Cream, Juices, Waffle, Sweets"
          >
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


