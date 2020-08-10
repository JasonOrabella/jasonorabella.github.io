$(document).ready ->
  $('#contact-form').submit (e) ->
    name == document.getElementById('inputName')
    email = document.getElementById('inputEmail')
    message = document.getElementById('inputMessage')
    if !name.value or !email.value or !message.value
      alertify.error 'Please check your entries'
      return false
    else
      $.ajax
        method: 'POST'
        url: '//formspree.io/name@youremail.com'
        data: $('#contact-form').serialize()
        datatype: 'json'
      e.preventDefault()
      $(this).get(0).reset()
      alertify.success 'Message sent'