import React from "react";
import image from "../../assets/create/girl.png";
import omar from "../../assets/create/omar.png";
import image2 from "../../assets/create/girl2.png";
import image3 from "../../assets/create/girl3.png";

const Create1 = () => {
  <style>
    {`
   /* Default for mobile */
.producer-info {
  text-align: center;
}

/* Override for larger screens with stronger specificity */
@media (min-width: 768px) {
  .producer-info.flex {
    text-align: left !important;
  }
}
      
        `}
  </style>;
  return (
    <div className="bg-black min-h-screen p-4 md:p-6 lg:p-8">
      <div className="text-white text-2xl md:text-3xl lg:text-4xl font-['Orbitron'] text-center mb-8 md:mb-10 lg:mb-14">
        Our producers, your perfect sound.
      </div>

      <div className="mx-auto space-y-8 md:space-y-10 lg:space-y-12 max-w-[90%]">
        {/* Producer 1 */}
        <div className="flex flex-col lg:flex-row items-center lg:gap-8 mb-12 md:mb-16 lg:mb-20">
          <div className="flex flex-col lg:flex-row w-full">
            <div className="rounded-lg mb-4 lg:mb-0 lg:mr-0 mx-auto lg:mx-0">
              <img
                src={image}
                alt="Tiana Calzoni"
                className="max-w-full h-auto"
              />
            </div>
            <div
              className="flex flex-col justify-center"
              style={{ textAlign: "center" }}
            >
              <style jsx>{`
                @media (min-width: 768px) {
                  div {
                    text-align: left !important;
                  }
                }
              `}</style>
              <p className="underline underline-offset-7 text-3xl md:text-4xl lg:text-5xl text-[#E28412] mb-2 md:mb-3 lg:mb-4">
                Tiana Calzoni
              </p>
              <div className="flex flex-col lg:flex-row items-center gap-1 md:gap-2 text-xl md:text-2xl lg:text-4xl">
                <span className="text-white font-['Orbitron'] tracking-widest">
                  Achievements :
                </span>
                <span className="text-white font-['Orbitron'] tracking-widest">
                  Lorem Ipsum is simply dum.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Producer 2 */}
        <div className="flex flex-col lg:flex-row items-center justify-start lg:justify-end gap-4 lg:gap-8 mb-12 md:mb-16 lg:mb-20">
          <div className="flex flex-col-reverse lg:flex-row w-full lg:justify-end">
            <div
              className="flex flex-col justify-center"
              style={{ textAlign: "center" }}
            >
              <style jsx>{`
                @media (min-width: 768px) {
                  div {
                    text-align: left !important;
                  }
                }
              `}</style>
              <p className="underline underline-offset-7 text-3xl md:text-4xl lg:text-5xl text-[#FFC2C2] mb-2 md:mb-3 lg:mb-4">
                Omar Curtis
              </p>
              <div className="flex flex-col lg:flex-row items-center gap-1 md:gap-2 text-xl md:text-2xl lg:text-4xl">
                <span className="text-white font-['Orbitron'] tracking-widest">
                  Achievements :
                </span>
                <span className="text-white font-['Orbitron'] tracking-widest">
                  Lorem Ipsum is simply dum.
                </span>
              </div>
            </div>
            <div className="rounded-lg lg:mr-4 mx-auto lg:mx-0">
              <img src={omar} alt="Omar Curtis" className="max-w-full h-auto" />
            </div>
          </div>
        </div>

        {/* Producer 3 */}
        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8 mb-12 md:mb-16 lg:mb-20">
          <div className="flex flex-col lg:flex-row w-full">
            <div className="rounded-lg mb-4 lg:mb-0 lg:mr-0 mx-auto lg:mx-0">
              <img
                src={image2}
                alt="Tiana Calzoni"
                className="max-w-full h-auto"
              />
            </div>
            <div
              className="flex flex-col justify-center"
              style={{ textAlign: "center" }}
            >
              <style jsx>{`
                @media (min-width: 768px) {
                  div {
                    text-align: left !important;
                  }
                }
              `}</style>
              <p className="underline underline-offset-7 text-3xl md:text-4xl lg:text-5xl text-[#FC5252] mb-2 md:mb-3 lg:mb-4">
                Cheyenne Calzoni
              </p>
              <div className="flex flex-col lg:flex-row items-center gap-1 md:gap-2 text-xl md:text-2xl lg:text-4xl">
                <span className="text-white font-['Orbitron'] tracking-widest">
                  Achievements :
                </span>
                <span className="text-white font-['Orbitron'] tracking-widest">
                  Lorem Ipsum is simply dum.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Producer 4 */}
        <div className="flex flex-col lg:flex-row items-center justify-start lg:justify-end gap-4 lg:gap-8 mb-12 md:mb-16 lg:mb-20">
          <div className="flex flex-col-reverse lg:flex-row w-full lg:justify-end">
          <div
              className="flex flex-col justify-center"
              style={{ textAlign: "center" }}
            >
              <style jsx>{`
                @media (min-width: 768px) {
                  div {
                    text-align: left !important;
                  }
                }
              `}</style>
              <p className="underline underline-offset-7 text-3xl md:text-4xl lg:text-5xl text-[#FF12CB] mb-2 md:mb-3 lg:mb-4">
                Kaiya Franci
              </p>
              <div className="flex flex-col lg:flex-row items-center gap-1 md:gap-2 text-xl md:text-2xl lg:text-4xl">
                <span className="text-white font-['Orbitron'] tracking-widest">
                  Achievements :
                </span>
                <span className="text-white font-['Orbitron'] tracking-widest">
                  Lorem Ipsum is simply dum.
                </span>
              </div>
            </div>
            <div className="rounded-lg lg:mr-4 mx-auto lg:mx-0">
              <img
                src={image3}
                alt="Omar Curtis"
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create1;
