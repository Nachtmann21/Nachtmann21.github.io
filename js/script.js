$('#exampleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget); // Button that triggered the modal
  var recipient = button.data('whatever'); // Extract info from data-* attributes
  var recipientImage = '';

  // Determine the image source based on the recipient's name
  if (recipient === 'Diagram1') {
    recipientImage = '../images/diagram1.jpg';
  } else if (recipient === 'Diagram2') {
    recipientImage = '../images/diagram2.jpg';
  } else if (recipient === 'Parsovanie Do JSON') {
    recipientImage = '../images/parsovanieDoJSON.jpg';
  }

  // Update the modal's content, including the image source
  var modal = $(this);
  modal.find('.modal-title').text(recipient);
  modal.find('#recipient-image').attr('src', recipientImage);
  modal.find('.modal-body input').val(recipient);
});
