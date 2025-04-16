import LeftSection from "../LeftSection";
import RightSection from "./RightSection";
import { useScreenSize } from "../../../utility";
import Character_Png from "../../../assets/images/Character_Png.png";

const SignIn = () => {
  const isMobile = useScreenSize();
  return (
    <>
      {!isMobile ? (
        <>
          <div className="flex h-screen">
            <LeftSection />
            <RightSection />
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col md:flex-row min-h-screen">
            <div
              className="w-full md:w-1/2 flex flex-col justify-between bg-gradient-to-br from-green-600 via-teal-700 to-emerald-900 px-4 py-6 md:py-10 relative"
              style={{
                backgroundImage: `url(${Character_Png}), linear-gradient(to bottom right, #006400, #008080, #2d6a4f)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="flex flex-col items-center md:items-start text-left md:text-left gap-6 relative z-10">
                <h1 className="text-left w-full text-xl font-bold text-white mb-4">
                  Whispora
                </h1>
                <h2 className="text-2xl md:text-4xl font-bold text-white leading-snug text-left w-full">
                  Unlock a world of knowledge and possibilities!
                </h2>
              </div>

              <div className="block md:hidden w-full max-w-sm mx-auto bg-emerald-100/80 p-6 rounded-2xl shadow-lg mt-8 relative z-10">
                <RightSection />
              </div>
            </div>

            <div className="hidden md:flex w-full md:w-1/2 items-center justify-center p-6 bg-emerald-100/80 rounded-2xl relative z-10">
              <div className="w-full max-w-sm">
                <RightSection />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SignIn;
