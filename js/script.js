// init Isotope
var $grid = $('.collection-list').isotope({
  // options
});
// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  resetFilterBtns();
  $(this).addClass('active-filter-btn');
  $grid.isotope({ filter: filterValue });
});

var filterBtns = $('.filter-button-group').find('button');
function resetFilterBtns(){
  filterBtns.each(function(){
    $(this).removeClass('active-filter-btn');
  });
}

// 
function scrollToSection() {
  const selectElement = document.getElementById("select");
  const sectionId = selectElement.value; // Lấy giá trị id của section
  
  const targetSection = document.querySelector(sectionId); // Tìm phần tử theo id
  if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" }); // Cuộn đến phần tử
  } else {
      console.error("Không tìm thấy section:", sectionId);
  }
}
