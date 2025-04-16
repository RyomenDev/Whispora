// import { signupApi } from "../../../api";
import SignUpForm from "./SignUpForm";
import { GoogleSignInButton } from "../../../utility";

const RightSection = () => {
  const handleSubmit = async (formData) => {
    alert(`Registration Successful`);
  };
  const handleGoogleSignUp = () => {};
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="w-2/3">
        <h2 className="text-3xl font-bold">Sign up for free</h2>
        <p className=" text-gray-400 mb-6">
          Let's sign up quickly to get started
        </p>
        <GoogleSignInButton
          onButtonClick={handleGoogleSignUp}
          topic="Register with Google"
        />
        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-gray-400">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <SignUpForm onSignUp={handleSubmit} />

        <p className="mt-3 text-gray-600 flex justify-center">
          Already have an account?{" "}
          <a href="/login" className="text-red-500 hover:underline">
            Click Here
          </a>
        </p>
      </div>
    </div>
  );
};

export default RightSection;
