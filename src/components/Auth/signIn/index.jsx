import LeftSection from "../LeftSection";
import RightSection from "./RightSection";
import { useScreenSize } from "../../../utility";
import Character_Png from "../../../assets/images/Character_Png.png";

const SignIn = () => {
  const isMobile = useScreenSize();

  return (
    <div className="h-screen w-screen bg-emerald-50 overflow-hidden">
      {!isMobile ? (
        <div className="grid grid-cols-2 h-full w-full">
          <LeftSection />
          <RightSection />
        </div>
      ) : (
        <div className="h-screen w-screen grid">
          <div
            className="h-full w-full flex flex-col justify-around px-4 py-6"
            style={{
              backgroundImage: `url(${Character_Png}), linear-gradient(to bottom right, #006400, #008080, #2d6a4f)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="flex flex-col items-center text-left gap-6 relative z-10 ">
              <h1 className="text-xl font-bold text-white mb-4 w-full">
                Whispora
              </h1>
              <h2 className="text-2xl font-bold text-white leading-snug w-full">
                Unlock a world of knowledge and possibilities!
              </h2>
            </div>

            <div className="block md:hidden w-full max-w-sm mx-auto bg-emerald-100/90 p-6 rounded-2xl shadow-lg mt-8 relative z-10">
              <RightSection />
            </div>

            <div className="hidden md:flex items-center justify-center bg-emerald-100/90 relative z-10">
              <div className="w-full max-w-sm p-6">
                <RightSection />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignIn;

