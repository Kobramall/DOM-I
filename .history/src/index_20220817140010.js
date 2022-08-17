const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')

const allAnchor = document.querySelectorAll("nav a");
allAnchor.forEach(link => link.classList.add("italic"))

const firstAnchor = document.querySelector("a");
firstAnchor.textContent = "Services"

const secondAnchor = document.querySelector("a:nth-of-type(2)");
secondAnchor.textContent = "Product"

const thirdAnchor = document.querySelector("a:nth-of-type(3)");
thirdAnchor.textContent = "Vision"

const fourthAnchor = document.querySelector("a:nth-of-type(4)");
fourthAnchor.textContent = "Features"

const fifthAnchor = document.querySelector("a:nth-of-type(5)");
fifthAnchor.textContent = "About"

const sixthAnchor = document.querySelector("a:nth-of-type(6)");
sixthAnchor.textContent = "Contact"

const firstImg = document.querySelector("header img");

firstImg.src ="http://localhost:9000/img/logo.png"

const h1 =document.querySelector("h1")
h1.textContent = "DOM Is Awesome"

const ctaButton = document.querySelector(".cta button")
ctaButton.textContent = "Get Started"

const ctaImg = document.querySelector(".cta img");
ctaImg.src = "http://localhost:9000/img/cta.png"

const oneText = document.querySelector(".text-content:nth-of-type(1) h4");
const oneTextp = document.querySelector(".text-content:nth-of-type(1) p");

const twoText = document.querySelector(".text-content:nth-of-type(2) h4");
const twoTextp = document.querySelector(".text-content:nth-of-type(2) p");

const threeText = document.querySelector(".bottom-content .text-content:nth-of-type(1) h4");
const threeTextp = document.querySelector(".bottom-content .text-content:nth-of-type(1) p");

const fourText = document.querySelector(".bottom-content .text-content:nth-of-type(2) h4");
const fourTextp = document.querySelector(".bottom-content .text-content:nth-of-type(2) p");

const fiveText = document.querySelector(".bottom-content .text-content:nth-of-type(3) h4");
const fiveTextp = document.querySelector(".bottom-content .text-content:nth-of-type(3) p");

oneText.textContent = "Features"
oneTextp.textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio,in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

twoText.textContent = "About"
twoTextp.textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

threeText.textContent = "Services"
threeTextp.textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio,in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

fourText.textContent ="Product"
fourTextp.textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

fiveText.textContent = "Vision"
fiveTextp.textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
 const mainContentImg = document.querySelector(".main-content img")

 mainContentImg.src = "http://localhost:9000/img/accent.png"

 const contactHeader = document.querySelector(".contact h4")
contactHeader.textContent = "Contact"

const contactParOne = document.querySelector(".contact p")
const contactParTwo = contactParOne.nextSibling;
const contactParThree = contactParTwo.nextSibling;

contactParOne.textContent = "123 Way 456 Street Somewhere, USA"
contactParTwo.textContent = "1 (888) 888-8888"
contactParThree.textContent = "sales@greatidea.io"

const footerAnchor = document.querySelector("footer a")

footerAnchor.textContent = "Copyright Great Idea! 2021" 
footerAnchor.classList.add("bold")
