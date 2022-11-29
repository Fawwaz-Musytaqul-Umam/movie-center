const main = () => {
    setTimeout(() => {
        document.body.style.opacity = 1;
        document.body.style.transition = 'opacity 1.2s ease-out'
    }, 1000);
};

export default main;
