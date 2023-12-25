const texts = ["Today","Tomorrow","Wed, 27 Dec","Thu, 28 Dec","Fri, 29 Dec","Sat, 30 Dec","Sun, 31 Dec",
       "Mon, 01 Jan","Tue, 02 Jan","Wed, 03 Jan","Thu, 04 Jan","Fri, 05 Jan","Sat, 06 Jan","Sun, 07 Jan",
       "Mon, 08 Jan","Tue, 09 Jan","Wed, 10 Jan","Thu, 11 Jan","Fri, 12 Jan","Sat, 13 Jan","Sun, 14 Jan","Mon, 15 Jan",
       "Tue, 16 Jan","Wed, 17 Jan","Thu, 18 Jan","Fri, 19 Jan","Sat, 20 Jan","Sun, 21 Jan","Mon, 22 Jan","Tue, 23 Jan"];
       const slotsc=["no slots available","8 slots available","8 slots available","8 slots available","8 slots available","8 slots available"
       ,"8 slots available","8 slots available","8 slots available","8 slots available","8 slots available","8 slots available"
       ,"8 slots available","8 slots available","8 slots available","8 slots available","8 slots available","8 slots available"
       ,"8 slots available","8 slots available","8 slots available","8 slots available","8 slots available","8 slots available"
       ,"8 slots available","8 slots available","8 slots available","8 slots available","8 slots available","8 slots available"]


const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const dateElement1 = document.getElementById("date1");
const dateSub1=document.getElementById("slot1");
let currentIndexFirst = 0;
function updateFirst() {
  dateElement1.textContent = texts[currentIndexFirst];
  dateSub1.textContent=slotsc[currentIndexFirst];
}
prevBtn.addEventListener("click", function() {
  currentIndexFirst=currentIndexFirst-3;
  if (currentIndexFirst < 0) {
    currentIndexFirst = 0; 
  }
  updateFirst();
});
nextBtn.addEventListener("click", function() {
  currentIndexFirst=currentIndexFirst+3;
  if (currentIndexFirst >= texts.length && slotsc.length) {
    currentIndexFirst = 27;
  }
  updateFirst();
});
updateFirst();



const dateElement2 = document.getElementById("date2");
const dateSub2=document.getElementById("slot2");
let currentIndexSecond = 1;
function updateSecond() {
  dateElement2.textContent = texts[currentIndexSecond];
  dateSub2.textContent=slotsc[currentIndexSecond];
}
prevBtn.addEventListener("click", function() {
  currentIndexSecond=currentIndexSecond-3;
  if (currentIndexSecond < 1) {
    currentIndexSecond = 1; 
  }
  updateSecond();
});
nextBtn.addEventListener("click", function() {
  currentIndexSecond=currentIndexSecond+3;
  if (currentIndexSecond >= texts.length && slotsc.length) {
    currentIndexSecond = 28;
  }
  updateSecond();
});
updateSecond();



const dateElement3 = document.getElementById("date3");
const dateSub3=document.getElementById("slot3");
let currentIndexThird = 2;
function updateThird() {
  dateElement3.textContent = texts[currentIndexThird];
  dateSub3.textContent=slotsc[currentIndexThird];
}
prevBtn.addEventListener("click", function() {
  currentIndexThird=currentIndexThird-3;
  if (currentIndexThird < 2) {
    currentIndexThird = 2; 
  }
  updateThird();
});
nextBtn.addEventListener("click", function() {
  currentIndexThird=currentIndexThird+3;
  if (currentIndexThird >= texts.length && slotsc.length) {
    currentIndexThird = 29;
  }
  updateThird();
});
updateThird();












function reload() {
    window.location.reload();
}

          var acc=document.getElementsByClassName("accordion");
          var i;
          for(i=0; i<acc.length;i++) {
            acc[i].addEventListener("click",function()
            {
              this.classList.toggle('active');
              this.parentElement.classList.toggle("active");
              var ans=this.nextElementSibling;
              
              if (ans.style.display==='block') {
                ans.style.display="none";

              }
              else {
                ans.style.display="block";
              }
            });
}



