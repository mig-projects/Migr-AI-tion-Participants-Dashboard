import ExperienceFooter from "../footer/experience_footer.jsx";
import {Autocomplete, Box, TextField} from "@mui/material";
import {useState} from "react";
import {useSwiper} from "swiper/react";
import PropTypes from "prop-types";
import {insertNewExperience, updateExperienceDiscriminationNames} from "../../supabase/database/experience.js";
import {toast} from "react-toastify";

const DiscriminationNameSlide = ({
  experienceID,
  setExperienceID,
}) => {
  const swiper = useSwiper();

  const [discriminationNameList, setDiscriminationNameList] = useState([]);
  const discriminationNameOptions = [
    'Aegism',
    'Sexism',
    'Racism',
    'Homophobia',
  ];

  return <div id={'discrimination-name-slide'} className={`d-flex flex-column h-100 align-items-center`}
  >
    <div className={'h-100 d-flex flex-column align-items-center slides-wrapper'}>
      <h2 className={`h2 fw-semibold mb-4`}>
        Does this type of discrimination have a name? (Optional)
      </h2>
      <p className={`mb-4 h5 fw-normal`}>
        i.e. ageism or sexism
      </p>
      <Box
        maxWidth={'700px'}
        minWidth={'360px'}
        className={`mt-2`}
      >
        <Autocomplete
          multiple
          freeSolo
          id="discrimination-name"
          options={discriminationNameOptions}
          onChange={(event, newValue) => {
            setDiscriminationNameList(newValue);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
            />
          )}
        />
      </Box>
    </div>

    <ExperienceFooter
      nextButtonText={'Next'}
      onNext={async () => {
        if (experienceID) {
          const {error} = await updateExperienceDiscriminationNames({
            experienceID,
            discriminationNameList,
          });

          if (error) {
            toast.error(error.message);
            return;
          }
        } else {
          const {data, error} = await insertNewExperience({
            discriminationNameList,
          });
          setExperienceID(data[0].id);
          if (error) {
            toast.error(error.message);
            return;
          }
        }

        toast.success('Progress saved!', {
          autoClose: 1000,
        });
        swiper.slideNext();
      }}
      previousButtonText={'Back'}
      onPrevious={() => {
        swiper.slidePrev();
      }}
    />
  </div>
}

DiscriminationNameSlide.propTypes = {
  experienceID: PropTypes.number,
  setExperienceID: PropTypes.func,
};

export default DiscriminationNameSlide;
