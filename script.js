(() => {
  const search = document.querySelector('#search');
  const buttons = [...document.querySelectorAll('[data-filter]')];
  const papers = [...document.querySelectorAll('.paper')];
  let year = 'all';
  function filter() {
    const query = search.value.trim().toLocaleLowerCase();
    let count = 0;
    papers.forEach(paper => {
      const show = (year === 'all' || paper.dataset.year === year) && paper.textContent.toLocaleLowerCase().includes(query);
      paper.hidden = !show;
      if (show) count++;
    });
    document.querySelector('#empty').hidden = count !== 0;
    document.querySelector('#results').textContent = `${count} publication${count === 1 ? '' : 's'}`;
  }
  search.addEventListener('input', filter);
  buttons.forEach(button => button.addEventListener('click', () => {
    year = button.dataset.filter;
    buttons.forEach(other => {
      const active = other === button;
      other.classList.toggle('active', active);
      other.setAttribute('aria-pressed', String(active));
    });
    filter();
  }));
})();
