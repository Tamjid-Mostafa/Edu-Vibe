
import React from "react";
import { useQuery } from 'react-query';
import axios from "axios";
import CourseCard from "../../component/Toggler/CourseCard";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";


const HomeCourses = () => {
  const url = `https://edu-vibe-server-tamjid-mostafa.vercel.app/courses/`;


  /* Load Categories  */
  const { data: courses = [],
    isLoading,
   } = useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      const res = await axios.get(url, {
      });
      return res.data;
    },
  });
  if (isLoading) {
    return "Loading...";
  }

  
  return (
    
    
    <div className='container mx-auto gap-8 md:my-10'>
      <Swiper
             slidesPerView={3}
             spaceBetween={20}
             pagination={{
               clickable: true,
             }}
             
             modules={[Pagination]}
              className={`mySwiper grid gap-3  md:w-8/12 lg:w-full lg:grid-cols-1 justify-items-center"
              }`}
            >
      {courses.map((course) => (
        <SwiperSlide>
          <CourseCard course={course}></CourseCard>
          </SwiperSlide>
        ))}
        </Swiper>
      </div>
  );
};

export default HomeCourses;
