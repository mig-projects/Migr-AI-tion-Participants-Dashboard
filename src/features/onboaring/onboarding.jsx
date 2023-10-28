import OnboardingHeader from "./header/onboarding_header.jsx";
import {LinearProgress} from "@mui/material";
import {useEffect, useState} from "react";
import WelcomeSlide from "./slides/welcome_slide.jsx";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/scss';
import './onboarding.scss';
import AddEmailSlide from "./slides/add_email_slide.jsx";
import CreatePasswordSlide from "./slides/create_password_slide.jsx";
import CategorySelectionSlide from "./slides/category_selection_slide.jsx";
import ExperienceDescriptionSlide from "./slides/experience_desccription_slide.jsx";
import DiscriminationNameSlide from "./slides/discrimination_name_slide.jsx";
import ExperienceHeadlineSlide from "./slides/experience_headline_slide.jsx";
import InfluentialFactorsSlide from "./slides/influential_factors_slide.jsx";

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
      initialSlide={7}
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
        paddingTop: '100px',
      }}
    >
      <SwiperSlide>
        <WelcomeSlide />
      </SwiperSlide>
      <SwiperSlide>
        <AddEmailSlide />
      </SwiperSlide>
      <SwiperSlide>
        <CreatePasswordSlide />
      </SwiperSlide>
      <SwiperSlide>
        <CategorySelectionSlide />
      </SwiperSlide>
      <SwiperSlide>
        <ExperienceDescriptionSlide />
      </SwiperSlide>
      <SwiperSlide>
        <DiscriminationNameSlide />
      </SwiperSlide>
      <SwiperSlide>
        <ExperienceHeadlineSlide />
      </SwiperSlide>
      <SwiperSlide>
        <InfluentialFactorsSlide />
      </SwiperSlide>
    </Swiper>
  </div>
}

export default Onboarding;
