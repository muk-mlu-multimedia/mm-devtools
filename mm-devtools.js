// additional sources: Paul Quinn http://webdesign.tutsplus.com/tutorials/htmlcss-tutorials/quick-tip-a-handy-grid-overlay-toolbar/#comment-1119320169

$(document).ready(function(){

  // Create the development bar and grid classes
  var $developmentBar = $('<ul></ul>', {
      class: 'development-bar',
      // addition
      html: 
        '<li id="development-link-cssdebug">CSS Classes</li>' +
        '<li id="development-link-region-colors">Region Colors</li>' +
        '<li id="development-link-grid-skeleton">Skeleton Grid - 960px</li>'
    });
    $960SkeletonGrid = $('<div></div>', {
      class: 'development-skeleton-960-grid',
      text: ''
    });

  // Add both right after the body tag
  $('body').prepend($developmentBar, $960SkeletonGrid);

  // Toggle the active state when a button is clicked
  $('li[id^="development-link-"').click(function(){
    $(this).toggleClass('active');
  });

  // Add data attributes to toggle cssdebug and regioncolor functions
  $('#development-link-cssdebug').click(function(){
    $('body').attr('data-cssdebug', $('body').attr('data-cssdebug') == 'enabled' ? 'disabled' : 'enabled')
  });

  $('#development-link-region-colors').click(function(){
    $('body').attr('data-regioncolors', $('body').attr('data-regioncolors') == 'enabled' ? 'disabled' : 'enabled')
  });

  $('#development-link-grid-skeleton').click(function(){
    // Calculate document height and apply it to the grid container
    $docHeight = $('body').outerHeight() + 'px';
    $('.development-skeleton-960-grid').height($docHeight);
    $('.development-skeleton-960-grid').toggle();
  });
});