@val external alert : string => unit = "alert";
@react.component
let make = () => {
  let (username, onChange) = React.useState(() => "");
  let (password, setPassword) = React.useState(() => "");
  let (usernameApproved, setUsernameApproved) = React.useState(() => false);
  let (hasLowercaseLetter, setHasLowercaseLetter) = React.useState(() => false);
  let (hasUppercaseLetter, setHasUppercaseLetter) = React.useState(() => false);
  let (hasDigit, setHasDigit) = React.useState(() => false);
  let (hasSixCharacters, setHasSixCharacters) = React.useState(() => false);
  let (registerButtonDisabled, setRegisterButtonDisabled) = React.useState(() => true);
  
  let handleSubmit = (event) => {
    ReactEvent.Form.preventDefault(event);
    alert("Username: " ++ username ++ " Password: " ++ password);
    onChange(_previousState => "");
    setPassword(_previousState => "");
  };

  React.useEffect1(
    () => {
      Js.Re.test_(%re("/....../"), username)
      ? setUsernameApproved(_previousState => true)
      : setUsernameApproved(_previousState => false);
      
      None;
    }, [username],
  );
  
  React.useEffect7(() => {
     if (Js.Re.test_(%re("/[a-z]/"), password) != hasLowercaseLetter) {
        setHasLowercaseLetter(_previousState => !_previousState)
      };
     if (Js.Re.test_(%re("/[A-Z]/"), password) != hasUppercaseLetter) {
        setHasUppercaseLetter(_previousState => !_previousState)
      };
     if (Js.Re.test_(%re("/\\d/"), password) != hasDigit) {
        setHasDigit(_previousState => !_previousState)
      };
     if (Js.Re.test_(%re("/....../"), password) != hasSixCharacters) {
        setHasSixCharacters(_previousState => !_previousState)
      };
     if ((usernameApproved && hasLowercaseLetter && hasUppercaseLetter && hasDigit && hasSixCharacters) == registerButtonDisabled) {
        setRegisterButtonDisabled(_previousState => !_previousState);
      };

      None;
    }, (usernameApproved, password, hasLowercaseLetter, hasUppercaseLetter, hasDigit, hasSixCharacters, registerButtonDisabled)
  );

  
  <form onSubmit=handleSubmit style=Styles.formStyle>
      
    <p style=Styles.labelStyle>{React.string("Username:")}</p>
    <input
      placeholder="Enter username"
      onChange={
        event => {
          let value = ReactEvent.Form.target(event)["value"];
          onChange(_ => value)
        }
      }
      value=username
    />

    <p style=Styles.labelStyle>{React.string("Password:")}</p>
    <input
      placeholder="Enter password"
      onChange={
        event => {
          let value = ReactEvent.Form.target(event)["value"];
          setPassword(_ => value)
        }
      }
      value=password
    />

    <div style=Styles.conditionsContainerStyle>
      <p>{React.string("Your password must contain:")}</p>
      <div style=Styles.checkboxStyle >
        <input type_="checkbox" readOnly=true checked=hasLowercaseLetter />
        <p style=Styles.passwordConditionsStyle>{React.string("one lowercase letter,")}</p>
      </div>
      <div style=Styles.checkboxStyle >
        <input type_="checkbox" readOnly=true checked=hasUppercaseLetter />
        <p style=Styles.passwordConditionsStyle>{React.string("one uppercase letter,")}</p>
      </div>
      <div style=Styles.checkboxStyle >
        <input type_="checkbox" readOnly=true checked=hasDigit />
        <p style=Styles.passwordConditionsStyle>{React.string("one digit and")}</p>
      </div>
      <div style=Styles.checkboxStyle >
        <input type_="checkbox" readOnly=true checked=hasSixCharacters />
        <p style=Styles.passwordConditionsStyle>{React.string("must have at least six characters.")}</p>
      </div>
    </div>
    <button disabled=registerButtonDisabled type_="submit">{React.string("Register")}</button>
  </form>;
};