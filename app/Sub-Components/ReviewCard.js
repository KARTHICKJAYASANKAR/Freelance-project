import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

function BasicRating() {
    const [value, setValue] = React.useState(5);
  
    return (
      <Box sx={{ '& > legend': { mt: 2 } }}>
        {/* <Typography component="legend">Read only</Typography> */}
        <Rating name="read-only" value={value} readOnly />
      </Box>
    );
  }

const ReviewCard = () => {
  return (
    <div className='review-card-div'>
        <div>
            <div>
            <img src='https://res.cloudinary.com/dgtonwmdv/image/upload/v1709403733/images/default_dp_kdnksj.jpg'/>
            <p>Name xxx</p>
            </div>

            <div className='star-div'>
                <BasicRating/>
            </div>
        </div>
        <p>
        Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim
        </p>
    </div>
  )
}

export default ReviewCard