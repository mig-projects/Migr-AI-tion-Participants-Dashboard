import {LinearProgress} from "@mui/material";
import {useEffect, useState} from "react";
import WelcomeSlide from "./slides/welcome_slide.jsx";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/scss';
import './onboarding.scss';
import AddEmailSlide from "./slides/add_email_slide.jsx";
import CreatePasswordSlide from "./slides/create_password_slide.jsx";
import TakeABreakSlide from "./slides/take_a_break_slide.jsx";
import variables from '../../variables.module.scss';
import PropTypes from "prop-types";
import {useLocation} from "react-router-dom";
import ExperienceHeader from "../describe_your_experience/header/experience_header.jsx";

const Onboarding = () => {
  const [onboardingProgress, setOnboardingProgress] = useState(0);
  const [height, setHeight] = useState(window.innerHeight);

  const location = useLocation();
  const {withoutSignup} = location.state || {};

  const [email, setEmail] = useState('');

  useEffect(() => {
    window.addEventListener('resize', () => {
      setHeight(window.innerHeight);
    })
  });

  return <div id={'describe-your-experience'}
              className={`d-flex flex-column`}
              style={{
                height: height,
              }}
  >
    <ExperienceHeader />

    <LinearProgress variant="determinate" value={onboardingProgress}
                    style={{
                      backgroundColor: 'white',
                      height: '7px',
                    }}
    />

    <Swiper
      initialSlide={0}
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
        backgroundColor: variables.backgroundColor,
      }}
    >
      <SwiperSlide className={`swiper-slide`}>
        <WelcomeSlide />
      </SwiperSlide>
      <SwiperSlide className={`swiper-slide`}>
        <AddEmailSlide
          onEmailSubmit={(newEmail) => {
            setEmail(newEmail);
          }}
        />
      </SwiperSlide>
      <SwiperSlide className={`swiper-slide`}>
        <CreatePasswordSlide
          email={email}
        />
      </SwiperSlide>
      <SwiperSlide className={`swiper-slide`}>
        <TakeABreakSlide />
      </SwiperSlide>
    </Swiper>
  </div>
}

Onboarding.propTypes = {
  withSignup: PropTypes.bool,
}

export default Onboarding;
