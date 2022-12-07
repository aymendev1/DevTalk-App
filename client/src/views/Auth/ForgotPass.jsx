import { MdMail } from "react-icons/md";
import "./Auth.css";
import { ReactComponent as Logo } from "../../assests/logo.svg";
import { ReactComponent as MailBox } from "../../assests/mailbox.svg";
export default function ForgotPass() {
  return (
    <div className="auth">
      <div>
        <Logo className="mailBox" />
        <span> DEV TALK</span>
      </div>
      <div>
        <MailBox />
        <span>Forgot password?</span>
        <span>
          Please enter your registered email address. We'll send instructions to
          help reset your password.
        </span>
        <div>
          <MdMail />
          <input type="email" placeholder="example@email.com" />
        </div>
        <button>Send Reset instructions</button>
      </div>
    </div>
  );
}
