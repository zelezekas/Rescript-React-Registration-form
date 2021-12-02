'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Styles$ReasonReactForm = require("./Styles.bs.js");

function RegistrationForm(Props) {
  var match = React.useState(function () {
        return "";
      });
  var onChange = match[1];
  var username = match[0];
  var match$1 = React.useState(function () {
        return "";
      });
  var setPassword = match$1[1];
  var password = match$1[0];
  var match$2 = React.useState(function () {
        return false;
      });
  var setUsernameApproved = match$2[1];
  var usernameApproved = match$2[0];
  var match$3 = React.useState(function () {
        return false;
      });
  var setHasLowercaseLetter = match$3[1];
  var hasLowercaseLetter = match$3[0];
  var match$4 = React.useState(function () {
        return false;
      });
  var setHasUppercaseLetter = match$4[1];
  var hasUppercaseLetter = match$4[0];
  var match$5 = React.useState(function () {
        return false;
      });
  var setHasDigit = match$5[1];
  var hasDigit = match$5[0];
  var match$6 = React.useState(function () {
        return false;
      });
  var setHasSixCharacters = match$6[1];
  var hasSixCharacters = match$6[0];
  var match$7 = React.useState(function () {
        return true;
      });
  var setRegisterButtonDisabled = match$7[1];
  var registerButtonDisabled = match$7[0];
  var handleSubmit = function ($$event) {
    $$event.preventDefault();
    alert("Username: " + (username + (" Password: " + password)));
    Curry._1(onChange, (function (_previousState) {
            return "";
          }));
    return Curry._1(setPassword, (function (_previousState) {
                  return "";
                }));
  };
  React.useEffect((function () {
          if (/....../.test(username)) {
            Curry._1(setUsernameApproved, (function (_previousState) {
                    return true;
                  }));
          } else {
            Curry._1(setUsernameApproved, (function (_previousState) {
                    return false;
                  }));
          }
          
        }), [username]);
  React.useEffect((function () {
          if (/[a-z]/.test(password) !== hasLowercaseLetter) {
            Curry._1(setHasLowercaseLetter, (function (_previousState) {
                    return !_previousState;
                  }));
          }
          if (/[A-Z]/.test(password) !== hasUppercaseLetter) {
            Curry._1(setHasUppercaseLetter, (function (_previousState) {
                    return !_previousState;
                  }));
          }
          if (/\d/.test(password) !== hasDigit) {
            Curry._1(setHasDigit, (function (_previousState) {
                    return !_previousState;
                  }));
          }
          if (/....../.test(password) !== hasSixCharacters) {
            Curry._1(setHasSixCharacters, (function (_previousState) {
                    return !_previousState;
                  }));
          }
          if ((usernameApproved && hasLowercaseLetter && hasUppercaseLetter && hasDigit && hasSixCharacters) === registerButtonDisabled) {
            Curry._1(setRegisterButtonDisabled, (function (_previousState) {
                    return !_previousState;
                  }));
          }
          
        }), [
        usernameApproved,
        password,
        hasLowercaseLetter,
        hasUppercaseLetter,
        hasDigit,
        hasSixCharacters,
        registerButtonDisabled
      ]);
  return React.createElement("form", {
              style: Styles$ReasonReactForm.formStyle,
              onSubmit: handleSubmit
            }, React.createElement("p", {
                  style: Styles$ReasonReactForm.labelStyle
                }, "Username:"), React.createElement("input", {
                  placeholder: "Enter username",
                  value: username,
                  onChange: (function ($$event) {
                      var value = $$event.target.value;
                      return Curry._1(onChange, (function (param) {
                                    return value;
                                  }));
                    })
                }), React.createElement("p", {
                  style: Styles$ReasonReactForm.labelStyle
                }, "Password:"), React.createElement("input", {
                  placeholder: "Enter password",
                  value: password,
                  onChange: (function ($$event) {
                      var value = $$event.target.value;
                      return Curry._1(setPassword, (function (param) {
                                    return value;
                                  }));
                    })
                }), React.createElement("div", {
                  style: Styles$ReasonReactForm.conditionsContainerStyle
                }, React.createElement("p", undefined, "Your password must contain:"), React.createElement("div", {
                      style: Styles$ReasonReactForm.checkboxStyle
                    }, React.createElement("input", {
                          checked: hasLowercaseLetter,
                          readOnly: true,
                          type: "checkbox"
                        }), React.createElement("p", {
                          style: Styles$ReasonReactForm.passwordConditionsStyle
                        }, "one lowercase letter,")), React.createElement("div", {
                      style: Styles$ReasonReactForm.checkboxStyle
                    }, React.createElement("input", {
                          checked: hasUppercaseLetter,
                          readOnly: true,
                          type: "checkbox"
                        }), React.createElement("p", {
                          style: Styles$ReasonReactForm.passwordConditionsStyle
                        }, "one uppercase letter,")), React.createElement("div", {
                      style: Styles$ReasonReactForm.checkboxStyle
                    }, React.createElement("input", {
                          checked: hasDigit,
                          readOnly: true,
                          type: "checkbox"
                        }), React.createElement("p", {
                          style: Styles$ReasonReactForm.passwordConditionsStyle
                        }, "one digit and")), React.createElement("div", {
                      style: Styles$ReasonReactForm.checkboxStyle
                    }, React.createElement("input", {
                          checked: hasSixCharacters,
                          readOnly: true,
                          type: "checkbox"
                        }), React.createElement("p", {
                          style: Styles$ReasonReactForm.passwordConditionsStyle
                        }, "must have at least six characters."))), React.createElement("button", {
                  disabled: registerButtonDisabled,
                  type: "submit"
                }, "Register"));
}

var make = RegistrationForm;

exports.make = make;
/* react Not a pure module */
