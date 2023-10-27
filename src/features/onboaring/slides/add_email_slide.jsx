import OnboardingFooter from "../footer/onboarding_footer.jsx";
import {Box, TextField} from "@mui/material";
import {useState} from "react";
import {useSwiper} from "swiper/react";

const AddEmailSlide = () => {
  const swiper = useSwiper();
  const [allowNext, setAllowNext] = useState(false);

  return <div id={'add-email-slide'} className={`d-flex flex-column h-100 align-items-center`}
  >
    <div className={'h-100 d-flex flex-column align-items-center'}>
      <h2 className={`h2 fw-semibold mb-3`}>
        Add your email address
      </h2>
      <p className={`mb-4 h5 fw-normal`}>
        Your email address is used to verify your access.
      </p>
      <Box
        component="form"
        width={'360px'}
      >
        <TextField
          required
          type="email"
          id="email"
          label="Email"
          fullWidth={true}
          onChange={(e) => {
            setAllowNext(e.target.validity.valid);
          }}
        />
      </Box>
    </div>

    <OnboardingFooter
      showOnlyOne={true}
      nextButtonText={'Next'}
      isNextDisabled={!allowNext}
      onNext={() => {
        swiper.slideNext();
      }}
    />
  </div>
}

export default AddEmailSlide;