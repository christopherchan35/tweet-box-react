$(document).ready(function() {
  // Initially disable the button
  $('button').prop('disabled', true);
  // When the value of the text area changes
  $('textarea').on('input', function() {
      // If there's a least one character in the textarea
      if ($(this).val().length > 0) {
        // Enable the button
        $('button').prop('disabled', false);
      } else {
        // Else, disable the button
        $('button').prop('disabled', true);
      }
  });
});
