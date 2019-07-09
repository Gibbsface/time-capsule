const sizes = {
    desktop: 1000,
    tablet: 700,
    phone: 500
};
console.log(Object.keys(sizes));
export const media = Object.keys(sizes).reduce((acc, label) => {
    console.log(acc);
    console.log(label);
    acc[label] = 
})