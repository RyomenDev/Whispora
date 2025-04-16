import { GoogleSignInButton } from "../../../utility";
import SignInForm from "./SignInForm";

const RightSection = () => {
  const handleGoogleSignIn = async () => {
    alert(`Google SignIn`);
  };

  const handleEmailPasswordSignIn = async (email, password) => {
    alert(`Email: ${email}, Password: ${password}`);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="w-2/3">
        <h2 className="text-3xl font-bold text-gray-800">Sign In</h2>
        <p className="text-gray-500 mb-6">
          Let's sign in quickly to get started
        </p>
        <GoogleSignInButton
          onButtonClick={handleGoogleSignIn}
          topic="Sign In with Google"
        />
        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-gray-400">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>
        <SignInForm onSignIn={handleEmailPasswordSignIn} />
        <p className="text-center mt-6 text-gray-500">
          Don't Have an account?{" "}
          <a href="/register" className="text-red-500 hover:underline">
            Click Here.
          </a>
        </p>
      </div>
    </div>
  );
};

export default RightSection;
