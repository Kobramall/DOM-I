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

const secondAnchor = firstAnchor.nextSibling
secondAnchor.textContent = "Product"

const thirdAnchor = secondAnchor.nextSibling
thirdAnchor.textContent = "Vision"

const fourthAnchor = thirdAnchor.nextSibling
fourthAnchor.textContent = "Features"

const fifthAnchor = fourthAnchor.nextSibling
fifthAnchor.textContent = "About"

const sixthAnchor = fifthAnchor.nextSibling
sixthAnchor.textContent = "Contact"

const firstImg = document.querySelector("header img");

firstImg.src ="http://localhost:9000/img/logo.png"

const h1 =document.querySelector("h1")
h1.textContent = "DOM Is Awesome"

const ctaButton = document.querySelector(".cta button")
ctaButton.textContent = "Get Started"

const ctaImg = document.querySelector(".cta img");
ctaImg.src = "http://localhost:9000/img/cta.png"

const oneText = document.querySelector(".text-content:nth-of-type(1)");
const twoText = document.querySelector(".text-content:nth-of-type(2)");
const threeText = document.querySelector(".text-content:nth-of-type(3)");
const fourText = document.querySelector(".text-content:nth-of-type(4)");
const fiveText = document.querySelector(".text-content:nth-of-type(5)");

oneText.h4 = "Features"
oneText.p = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio,in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

twoText.h4 = "About"
twoText.p = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

threeText.h4 = "Services"
threeText.p = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio,in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

fourText.h4 ="Product"
fourText.p = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

fiveText.h4 = "Vision"
fiveText.p = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
