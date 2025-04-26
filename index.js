window.onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = 'I Have Something'; // no split yet
    const titleElement = document.querySelector('.title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index] === ' ' ? '&nbsp;' : titles[index];
        index++;
        setTimeout(appendTitle, 200); // typing speed: 200ms per letter
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};

  