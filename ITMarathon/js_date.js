$(document).ready(function () {
  const guess1 = $("#register123").serializeArray();

  $(".btn").on("click", function () {
    localStorage.setItem("fullname", $("form input[name=fullname]").val());
    localStorage.setItem(
      "email_r",
      $("form").find("input[name=email_r]").prop("value")
    );
    localStorage.setItem(
      "number_r",
      $("form").find("input[name=number_r]").prop("value")
    );
    localStorage.setItem(
      "edu_r",
      $("form").find("input[name=edu_r]").prop("value")
    );
    localStorage.setItem(
      "addr_r",
      $("form").find("textarea[name=addr_r]").val()
    );
    localStorage.setItem(
      "about_r",
      $("form").find("textarea[name=about_r]").val()
    );
    localStorage.setItem(
      "achiv_r",
      $("form").find("input[name=achiv_r]").prop("value")
    );
    localStorage.setItem(
      "achivexplic_r",
      $("form").find("textarea[name=achivexplic_r]").val()
    );
  });
  $("#cvname").text(localStorage.getItem("fullname"));
  $("#cvnumber").text(localStorage.getItem("number_r"));
  $("#cvemail").text(localStorage.getItem("email_r"));
  $("#cvaddr").text(localStorage.getItem("addr_r"));
  $("#cvabout").text(localStorage.getItem("about_r"));
  $("#cvedu").text(localStorage.getItem("edu_r"));
  $("#cvachiv1").text(localStorage.getItem("achiv_r"));
  $("#cvachivexplic").text(localStorage.getItem("achivexplic_r"));
});
