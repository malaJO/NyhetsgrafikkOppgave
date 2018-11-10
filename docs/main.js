// Initiate the CountUp variables

  // People NAV counter
  var NavPeo = new CountUp("peopleCountNAV",0, 63472, 0, 3, optionsThousand);
  // Percent NAV
  var NavPer = new CountUp("percentCountNAV",0, 2.4, 2, 3, optionsThousand);
  // People SBB
  var SBBPeo = new CountUp("peopleCountSBB",0, 113000, 0, 5, optionsThousand);
  // Percent SBB
  var SBBPer = new CountUp("percentCountSBB",0, 4, 2, 6, optionsThousand);

// Get what classes the counter class has in addition
  var count = document.getElementsByClassName('counter')[0].classList;
  // console.log(count);


// Check how far down the page the user is
function howLow() {
var scrollY = window.pageYOffset || document.documentElement.scrollTop;
var cards = document.getElementsByClassName('DataCard');
var venn = document.getElementsByClassName('VennDia');

// Add classes to start animation
if (scrollY>600 && scrollY<1000) {
  cards[0].classList.add('NAVAnim');
  cards[1].classList.add('SSBAnim');
  venn[0].classList.add('animPulse');
  count.add('started');
} else {
  count.remove('started');}
}

// Start counter if the class is added
function doesItContainClass() {
  if (count.contains("started")) {
    NavPeo.start();
    NavPer.start();
    SBBPeo.start();
    SBBPer.start();;
  }
}

// Call the functions on scroll event
window.addEventListener('scroll', howLow);
window.addEventListener('scroll', doesItContainClass)
