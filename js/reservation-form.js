jQuery.validator.addMethod(
  "validEmail",
  function (value) {
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    return regex.test(value);
  },
  "Nije uneta validna Email adresa"
);

jQuery.validator.addMethod(
  "selectcheck",
  function (value) {
    return value != "0";
  },
  "Izaberite broj ljudi"
);

jQuery.validator.addMethod(
  "notInThePast",
  function (value) {
    const reservationDate = new Date(value);
    if (!reservationDate) {
      return false;
    }
    const currentDate = new Date();

    return reservationDate.getTime() > currentDate.getTime();
  },
  "Izaberite datum"
);

jQuery.validator.addMethod(
  "maxLenght",
  function (value) {
    return /^.{0,250}$/.test(value);
  },
  "Prekoračen je dozvoljeni broj karaktera"
);

$("#reservation-form").validate({
  rules: {
    name: {
      required: true,
    },
    email: {
      validEmail: true,
      required: true,
    },
    datetime: {
      required: true,
      notInThePast: true,
    },
    numberOfPeople: {
      selectcheck: true,
    },
    specialRequest: {
      maxLenght: true,
    },
  },
  messages: {
    name: "Molim Vas unesite ime.",
    email: "Molim Vas unesite validnu Email adresu.",
    numberOfPeople: "Molim vas izeberite broj ljudi.",
    datetime: "Molim Vas izaberite dolazeći datum i vreme.",
  },
  errorPlacement: function (error) {
    const $formMessage = $("#reservation-form-message");
    error.appendTo($formMessage);
  },
});

$("#reservation-form").on("submit", function (event) {
  event.preventDefault();
  $("#success-message").remove();
  const $form = $("#reservation-form");
  var isValid = $form.valid();
  if (!isValid) {
    return;
  }
  var $message = $("<p>", {
    text: "Uspešno ste rezervisali sto. Vidimo se!",
    class: "success",
    id: "success-message",
  });
  const $formMessage = $("#reservation-form-message");
  $message.appendTo($formMessage);
  $form[0].reset();
});

jQuery.extend(jQuery.validator.messages, {
  email: "Nije uneta validna Email adresa",
});
