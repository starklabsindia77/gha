
import React from 'react';

// import { IconButton } from '@material-ui/core';
import BusinessIcon from '@mui/icons-material/Business';
import Stack from '@mui/material/Stack';
import PinDropIcon from '@mui/icons-material/PinDrop';
import './CourseCard.css';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
// import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import { Typography, Button } from '@mui/material';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function CourseCard(props) {
	const data = props.data
	const apply = () => {
		window.open('https://admi-frontend.vercel.app/', "_blank", "noopener noreferrer")		
	};	

	return (
		<div className='post'>
			<Stack direction='row' justifyContent='space-between'>
				<Typography variant='h6' p={2} style={{ width: '180px', height: '150px' }} mt={4}>
					{data.name}
				</Typography>
				<Stack minWidth={"700px"} p={1}>
					<Stack direction='row' justifyContent='space-between' p={1}>
						<Stack>
							{data.img ? (
								<img src='' alt='' />
							) : (
								<Typography variant='h5'>{data.name}</Typography>
							)}
							<Stack direction='row'>
								<Button variant='text' size='large' startIcon={<BusinessIcon />}>
									{data.university.name}
								</Button>
								<Button variant='text' size='large' startIcon={<PinDropIcon />}>
									{data.university.country}
								</Button>
							</Stack>
						</Stack>
						<Stack direction='row' justifyContent='flex-end'>
							<Checkbox
								{...label}
								icon={<FavoriteBorder />}
								checkedIcon={<Favorite />}
								// onClick={wishlist}
								// checked={wishCheck}
								size='large'
							/>
							{/* <IconButton size='large'>
								<TextSnippetIcon fontSize='large' />
							</IconButton> */}
							
							
								<Button
									style={{ width: '150px', height: '50px', mt: '30px' }}
									variant='contained'
									color='info'
									onClick={apply}
								>
									Apply Now
								</Button>
							
						</Stack>
					</Stack>
					<Stack
						direction='row'
						justifyContent='space-around'
						p={2}
						style={{ backgroundColor: '#F1F2F5', borderRadius: '10px' }}>
						<Stack style={{ bgColor: 'D6D6D6' }}>
							<Typography color='#6b7280'>TUITION FEE </Typography>
							<Typography variant='h6' fontWeight='600'>
								{data.averageFees === 'NA'
									? data.averageFees
									: `${data.averageFees} AUD`}
							</Typography>
						</Stack>
						<Stack>
							<Typography color='#6b7280'>APPLICATION FEE </Typography>
							<Typography variant='h6' fontWeight='600'>
								{data.applicationFees === 'NA'
									? data.applicationFees
									: `${data.applicationFees} AUD`}
							</Typography>
						</Stack>
						<Stack>
							<Typography color='#6b7280'>INTAKE </Typography>
							<Typography variant='h6' fontWeight='600'>
								{data.intake}
							</Typography>
						</Stack>
						<Stack>
							<Typography color='#6b7280'>WORK PERMIT</Typography>
							<Typography variant='h6' fontWeight='600'>
								{data.durationOfWorkPermit}
							</Typography>
						</Stack>
						<Stack>
							<Typography color='#6b7280'>SCHOLARSHIP</Typography>
							<Typography variant='h6' fontWeight='600'>
								{data.Scholarship}
							</Typography>
						</Stack>
						{/* <Stack>
							<Typography ml={2} color='#6b7280'>
								TUITION FEE{' '}
							</Typography>
							<Typography variant='h6' fontWeight='600'>
								≈ $ 15000 AUD
							</Typography>
						</Stack> */}
					</Stack>
				</Stack>
			</Stack>
		</div>
	);
}

export default CourseCard;
