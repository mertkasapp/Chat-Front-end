const faqItemElements = document.querySelectorAll(".faq-item");


const toogleActive=(e)=>{
    e.classList.toggle("active");
};

faqItemElements.forEach((faqItem)=>{
    faqItem.addEventListener("click",()=>toogleActive(faqItem))
});

