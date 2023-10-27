import OnboardingHeader from "./header/onboarding_header.jsx";
import {LinearProgress} from "@mui/material";
import {useEffect, useState} from "react";
import WelcomeTab from "./tabs/welcome_tab.jsx";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/scss';

const Onboarding = () => {
  const [onboardingProgress, setOnboardingProgress] = useState(0);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setHeight(window.innerHeight);
    })
  });

  return <div id={'onboarding'}
              className={`d-flex flex-column`}
              style={{
                height: height,
              }}
  >
    <OnboardingHeader />

    <LinearProgress variant="determinate" value={onboardingProgress}
                    style={{
                      backgroundColor: 'white',
                      height: '7px',
                    }}
    />

    <Swiper
      onSlideChange={(swiper) => {
        setOnboardingProgress((swiper.activeIndex + 1) * (100 / swiper.slides.length));
      }}
      onSwiper={(swiper) => {
        setOnboardingProgress((swiper.activeIndex + 1) * (100 / swiper.slides.length));
      }}
      allowTouchMove={false}
      slidesPerView={1}
      spaceBetween={0}
      className={'h-100 w-100'}
      style={{
        backgroundColor: '#f2f1f5',
      }}
    >
      <SwiperSlide>
        <WelcomeTab />
      </SwiperSlide>
      <SwiperSlide>
        <div />
      </SwiperSlide>
    </Swiper>
  </div>
}

export default Onboarding;
