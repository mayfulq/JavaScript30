  const triggers = document.querySelectorAll('a');
  const highlight = document.createElement('span');
  const liFirst = document.querySelector('.menu .first');
  let linkCoords;

  highlight.classList.add('highlight');
  document.body.appendChild(highlight);

  function highlightLink() {
      const coords = {
          width: linkCoords.width,
          height: linkCoords.height,
          top: linkCoords.top + window.scrollY,
          left: linkCoords.left + window.scrollX
      };

      highlight.style.width = `${coords.width}px`;
      highlight.style.height = `${coords.height}px`;
      highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;

  }

  function initial() {
      linkCoords = liFirst.getBoundingClientRect();
      highlight.style.transition = 'none';
      highlightLink();


  }

  triggers.forEach(a => a.addEventListener('mouseenter', (e) => {
      linkCoords = e.target.getBoundingClientRect();
      highlight.style.transition = 'all 0.2s';
      highlightLink();
  }));

  window.addEventListener('load', initial);