import {useSwiper} from "swiper/react";
import {useEffect, useState} from "react";
import variables from "../../../variables.module.scss";
import OnboardingFooter from "../footer/onboarding_footer.jsx";
import HourGlass from "../../../assets/images/hour_glass.png";
import {delay} from "../../../utility_functions.js";

const ReflectOnExperienceSlide = () => {
  const swiper = useSwiper();

  const [allowNext, setAllowNext] = useState(false);

  useEffect(() => {
    if (swiper.activeIndex === 8) {
      setAllowNext(false);
      delay(5000).then(() => {
        setAllowNext(true);
      });
    }
  }, [swiper.activeIndex]);

  return <div id={'reflect-on-experience-slide'} className={`d-flex flex-column h-100 align-items-center`}
              style={{
                backgroundColor: variables.backgroundPurple,
              }}
  >
    <div className={'h-100 d-flex flex-column align-items-center slides-wrapper text-white gap-3'}
         style={{
           maxWidth: '1000px',
         }}
    >
      <img src={HourGlass} alt="Hour Glass mb-4"/>
      <h2 className={`h2 fw-semibold text-center`}>
        Reflect on the experience that you just described.
      </h2>

      <p className={`text-center`}>
        Take a minute and think about how organisational factors influenced your experience.
      </p>
    </div>

    <OnboardingFooter
      nextButtonText={'Next'}
      isNextDisabled={!allowNext}
      onNext={() => {
        swiper.slideNext();
      }}
      previousButtonText={'Back'}
      onPrevious={() => {
        swiper.slidePrev();
      }}
    />
  </div>;
}

export default ReflectOnExperienceSlide;