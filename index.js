$(function handleShoppingList(){
  $('#js-shopping-list-form').submit(event =>{
    event.preventDefault();
    const myItem = $(this.find('input [name="shopping-list-entry"]'));
    $('.shopping-list').append(myItem);
    }
   });
   $('#shopping-item-toggle').click(function(){
    this.toggleClass("checked");
    });
    $('#shopping-item-delete').click(function(){
      const removedItem = $(this.closest("li"));
      $('removedItem').removeClass("shopping-item");
     });
     
     $(handleShoppingList());
      
