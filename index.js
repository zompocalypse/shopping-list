'use strict';

function handleShoppingListAdds(){
  $('#js-shopping-list-form').submit (e => {
    e.preventDefault();
    const newItem = $('#shopping-list-entry').val();
    $('.shopping-list').append(`<li>
    <span class="shopping-item">${newItem}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`);
    $('#shopping-list-entry').empty();
  });
}

function handleShoppingListDeletes(){
  $('ul').on('click', '.shopping-item-delete', function(event) {
    $(event.target).closest('li').remove();
  });
}

function handleShoppingListChecks(){
  $('ul').on('click', '.shopping-item-toggle', function(event) {
    $(event.target).closest('li').find('span.shopping-item').toggleClass('shopping-item__checked');
  });
}

$(handleShoppingListAdds);
$(handleShoppingListDeletes);
$(handleShoppingListChecks);