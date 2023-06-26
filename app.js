
//narayan narayan
//om namah shivaya

let i=0;
const styleElement = document.createElement('style');
document.head.appendChild(styleElement);

const elements = document.getElementsByClassName("place");
Array.from(elements).forEach( e => {

    const position = e.getBoundingClientRect();
    const topPosition = position.top;

    i+=1;
    styleElement.innerHTML += `.main .timeline ul li:nth-child(${i})::before { top: ${topPosition+5}px; }`;
});


