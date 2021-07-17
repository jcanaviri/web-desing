'use strict';

const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  const { key, charCode, keyCode } = e;
  insert.innerHTML = `
    <div class="key">
        ${key === ' ' ? 'Space' : key}
        <small>event.key</small>
    </div>
    <div class="key">
        ${charCode}
        <small>event.charCode</small> 
    </div>
    <div class="key">
        ${keyCode}
        <small>event.keyCode</small>
    </div>  
  `;
});
