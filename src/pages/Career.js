import React,{useState} from 'react'
import tw from "twin.macro";

const PageContainer = tw.div` grid mt-32 box-border gap-x-2 px-24 grid-cols-5 `
const Hero = tw.div`flex flex-col items-center justify-center rounded-4xl bg-purple-1000 col-span-5 py-20 mb-12`
const HeroTitle = tw.h1`text-4xl font-bold text-white`
const SearchContainer = tw.div`flex gap-1 bg-white p-2 rounded-lg w-1/3`
const SearchInput = tw.input`flex-1 border rounded-lg border-gray-300 pl-3 w-0`
const SearchButton = tw.button`bg-purple-1000 rounded-lg px-4 py-2 text-white`  
const JobContainer = tw.div`flex md:col-span-4  col-span-3 flex-col gap-8  justify-center`
const JobCard = tw.div` flex flex-1 border-b-2 border-gray-300 p-2 pb-4`
const JobImg = tw.img`w-24 h-24 md:h-32 md:w-32 rounded-xl`
const JobDescription = tw.div`flex flex-1 flex-col px-4`
const JobType = tw.div`rounded-full capitalize bg-gray-100 border-gray-300 border p-2 text-gray-500`
const JobTypeContainer = tw.div`flex justify-center items-start` 
const JobTitle = tw.h2`text-4xl font-bold text-primaryBlack`
const JobLocation = tw.h3`text-xl font-bold text-gray-500`
const ContactInfoContainer = tw.div`flex items-center text-gray-400 gap-1`
const LocationContainer = tw.div` flex flex-col gap-1 pl-10 border-r border-gray-300 my-2`
const LocationTitle = tw.h2`text-2xl font-bold text-primaryBlack mb-4`
const Location = tw.div`flex gap-1 items-center `
const TimeTitle = tw.h2`text-2xl font-bold text-primaryBlack my-4`




const places = [
    {address:'Ankawa'},
    {address:'Andazyaran'},
    {address:'Azady'},
    {address:'Badawa'},
    {address:'Bahar'},
    {address:'Berkot'},
    {address:'Binaslawa'},
]

const times = [
    {type:'Full Time'},
    {type:'Part Time'},
]

const jobs = [
  {
  id: 1,
  shopName: "Ankawa Barber Shop",
  location:'Ankawa',
  email:'ankawa@gmail.com',
  phone:'0750 131 2321',
  type:'part time',
  image:'https://www.richardwilding.com/wp-content/uploads/2015/11/Richard-Wilding-Kurdistan-Erbil-Ankawa-006.jpg',
},
{
  id: 2,
  shopName: "Ankawa Barber Shop",
  location:'Ankawa',
  email:'ankawa@gmail.com',
  phone:'0750 131 2321',
  type:'full time',
  image:'https://www.richardwilding.com/wp-content/uploads/2015/11/Richard-Wilding-Kurdistan-Erbil-Ankawa-006.jpg',
},
{
  id: 3,
  shopName: "Ankawa Barber Shop",
  location:'Ankawa',
  email:'ankawa@gmail.com',
  phone:'0750 131 2321',
  type:'part time',
  image:'https://www.richardwilding.com/wp-content/uploads/2015/11/Richard-Wilding-Kurdistan-Erbil-Ankawa-006.jpg',
},
{
  id: 4,
  shopName: "Ankawa Barber Shop",
  location:'Ankawa',
  email:'ankawa@gmail.com',
  phone:'0750 131 2321',
  type:'full time',
  image:'https://www.richardwilding.com/wp-content/uploads/2015/11/Richard-Wilding-Kurdistan-Erbil-Ankawa-006.jpg',
},
]

const Career = () => {
    const [locationCheckedState, setLocationCheckState] = useState(
    new Array(places.length).fill(false)
  );
    const [timeCheckedState, setTimeCheckState] = useState(
    new Array(times.length).fill(false)
    );
    
    const [jobList, setJobList] = useState(jobs)

    const handleTimeChange = (position) => {
        console.log(position);
        const updatedCheckedState = timeCheckedState.map((item, index) =>
      index === position ? !item : item
    );
    setTimeCheckState(updatedCheckedState);
    }
    console.log(timeCheckedState);
    const handleOnChange = (position) => {
    const updatedCheckedState = locationCheckedState.map((item, index) =>
      index === position ? !item : item
    );
    setLocationCheckState(updatedCheckedState);
  };
  return (
    <PageContainer>
        <Hero>
            <HeroTitle>
                Find a Job
            </HeroTitle>
            <SearchContainer>
                <SearchInput placeholder="Search for a job" />
                <SearchButton>Search</SearchButton>
            </SearchContainer>
        </Hero>
        <LocationContainer>
            <LocationTitle>
                Location
            </LocationTitle>
           {places.map((place, index) => (
           <Location key={index+`${place.address}`}> 
                  <input
                    type="checkbox"
                    id={`location-checkbox-${index}`}
                    name={place.address}
                    value={place.address}
                    checked={locationCheckedState[index]}
                    onChange={() => handleOnChange(index)}
                  />
                  <label htmlFor={`location-checkbox-${index}`}>{place.address}</label>
            </Location>))}
            <TimeTitle>
                Time
            </TimeTitle>
            {times.map((time, index) => (
           <Location key={index+`${time.type}`}> 
                  <input
                    type="checkbox"
                    id={`time-checkbox-${index}`}
                    name={time.type}
                    value={time.type}
                    checked={timeCheckedState[index]}
                    onChange={() => handleTimeChange(index)}
                  />
                  <label htmlFor={`time-checkbox-${index}`}>{time.type}</label>
            </Location>))}
        </LocationContainer>
        <JobContainer>
            {jobList.map((job, index) => (
            <JobCard>
                <JobImg src={job.image} />
                <JobDescription>
                  <JobTitle>{job.shopName}</JobTitle>
                  <JobLocation>{job.location}</JobLocation>
                  <ContactInfoContainer>
                      <span>{job.email}</span> - <span>{job.phone}</span>
                    </ContactInfoContainer>
                  </JobDescription>
                 <JobTypeContainer> <JobType>{job.type}</JobType></JobTypeContainer>
            </JobCard>))}
        </JobContainer>
    </PageContainer>
  )
}

export default Career