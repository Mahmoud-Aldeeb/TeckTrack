// import React, { useEffect, useState } from "react";
// // import axios from "axios";
// import { motion, useAnimation } from "framer-motion";
// import ReviewCard from "./reviewCard";
// import Info from "../../../componants/ui/Info";
// import { useTranslation } from "react-i18next";

// function Reviews() {
//   const [reviews, setReviews] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const controls = useAnimation();

//   const { t } = useTranslation();

//   const head = t("Reviews.head");
//   const title = t("Reviews.title");
//   const paragraph = t("Reviews.paragraph");

//   useEffect(() => {
//     const fetchReviews = async () => {
//       try {
//         // real api
//         // const res = await axios.get("https://your-api-link.com/reviews");
//         // setReviews(res.data);

//         const fakeData = [
//           {
//             id: 1,
//             name: "Ahmed Khaled",
//             role: "Frontend Developer",
//             text: "The track helped me understand React deeply and build real projects confidently.",
//             image: "https://i.pravatar.cc/150?img=12",
//             rating: 5,
//           },
//           {
//             id: 2,
//             name: "Mariam Hussein",
//             role: "UI/UX Designer",
//             text: "Loved the learning path and hands-on projects — it made learning design tools fun!",
//             image: "https://i.pravatar.cc/150?img=20",
//             rating: 4,
//           },
//           {
//             id: 3,
//             name: "Omar Saeed",
//             role: "Backend Engineer",
//             text: "The backend track with Node.js was very practical and helped me land my internship.",
//             image: "https://i.pravatar.cc/150?img=32",
//             rating: 5,
//           },
//           {
//             id: 4,
//             name: "Sara Mostafa",
//             role: "Full Stack Developer",
//             text: "Everything was clear and structured. I could finally connect frontend and backend easily.",
//             image: "https://i.pravatar.cc/150?img=45",
//             rating: 5,
//           },
//           {
//             id: 5,
//             name: "Youssef Ali",
//             role: "Data Analyst",
//             text: "Great community and mentors. I learned Python and visualization in a simple way.",
//             image: "https://i.pravatar.cc/150?img=27",
//             rating: 4,
//           },
//           {
//             id: 6,
//             name: "Nouran Fawzy",
//             role: "React Developer",
//             text: "Amazing structured content that made me confident to apply for real frontend jobs!",
//             image: "https://i.pravatar.cc/150?img=9",
//             rating: 5,
//           },
//         ];

//         setReviews(fakeData);
//       } catch (err) {
//         console.error("Error fetching reviews:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchReviews();
//   }, []);

//   useEffect(() => {
//     if (reviews.length) {
//       controls.start({
//         x: ["0%", "-50%"],
//         transition: {
//           duration: 20,
//           repeat: Infinity,
//           ease: "linear",
//         },
//       });
//     }
//   }, [reviews, controls]);

//   if (loading) {
//     return (
//       <div className="py-20 text-center text-gray-500">Loading reviews...</div>
//     );
//   }

//   return (
//     <section className="py-16 bg-gray-50 text-center overflow-hidden">
//       {/* Header */}

//       <div className="flex justify-center">
//         <Info
//           head={head}
//           title={title}
//           paragraph={paragraph}
//           btntrue={false}
//           textstart={false}
//           mb="0"
//         />
//       </div>

//       {/* Slider Animation */}
//       <div className="overflow-hidden relative px-16">
//         <motion.div
//           className="flex gap-8"
//           animate={controls}
//           onMouseEnter={() => controls.stop()}
//           onMouseLeave={() =>
//             controls.start({
//               x: ["0%", "-50%"],
//               transition: { duration: 20, repeat: Infinity, ease: "linear" },
//             })
//           }
//         >
//           {/* Double list for infinite loop effect */}
//           {[...reviews, ...reviews].map((review, i) => (
//             <ReviewCard key={i} {...review} />
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// export default Reviews;





import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion, useAnimation } from "framer-motion";
import ReviewCard from "./ReviewCard";
import Info from "../../../componants/ui/Info";
import { useTranslation } from "react-i18next";
import Loader from "../../../componants/ui/Loader";
import ErrorMessage from "../../../componants/ui/Error";

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const controls = useAnimation();

  const { t } = useTranslation();

  const head = t("Reviews.head");
  const title = t("Reviews.title");
  const paragraph = t("Reviews.paragraph");

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);

        const response = await axios.get("http://techtrack.runasp.net/api/UserTechnologyReview");


        const formattedReviews = response.data.map(review => ({
          id: review.reviewId,
          name: review.userName,
          role: `${review.technologyName} Developer`,
          text: review.reviewText,
          image: `https://i.pravatar.cc/150?img=${review.reviewId}`,
          rating: review.rating
        }));

        setReviews(formattedReviews);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching reviews:", err);
        setError("Failed to load reviews. Please try again later.");
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  useEffect(() => {
    if (reviews.length > 0) {
      controls.start({
        x: ["0%", "-50%"],
        transition: {
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        },
      });
    }
  }, [reviews, controls]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <section className="py-16 bg-gray-50 text-center overflow-hidden">

      <div className="flex justify-center">
        <Info
          head={head}
          title={title}
          paragraph={paragraph}
          btntrue={false}
          textstart={false}
          mb="0"
        />
      </div>


      {reviews.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-gray-400 text-6xl mb-4">💬</div>
          <h3 className="text-xl font-semibold text-gray-600 mb-2">
            No Reviews Yet
          </h3>
          <p className="text-gray-500 max-w-md mx-auto">
            Be the first to share your experience with our technologies!
          </p>
        </div>
      ) : (

        <div className="overflow-hidden relative px-16">
          <motion.div
            className="flex gap-8"
            animate={controls}
            onMouseEnter={() => controls.stop()}
            onMouseLeave={() =>
              controls.start({
                x: ["0%", "-50%"],
                transition: { duration: 20, repeat: Infinity, ease: "linear" },
              })
            }
          >

            {[...reviews, ...reviews].map((review, i) => (
              <ReviewCard key={`${review.id}-${i}`} {...review} />
            ))}
          </motion.div>
        </div>
      )}
    </section>
  );
}

export default Reviews;