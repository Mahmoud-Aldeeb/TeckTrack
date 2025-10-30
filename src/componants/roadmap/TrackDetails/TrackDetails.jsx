import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../../Loader/Loader';
import PrimaryButton from '../../common/Button';

const TrackDetails = () => {
  const { slug } = useParams();
  const [track, setTrack] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fake data (replace with API when ready)
  const fakeTracks = {
    'software-development': {
      title: 'Software Development',
      description: 'Explore web, mobile, and game development fundamentals.',
      subTracks: [
        { name: 'Web Development', description: 'Frontend, backend, and full-stack web technologies.', img: 'https://cdn-icons-png.flaticon.com/512/919/919827.png' },
        { name: 'Mobile Development', description: 'Learn Android, iOS, and cross-platform frameworks.', img: 'https://cdn-icons-png.flaticon.com/512/888/888857.png' },
        { name: 'Game Development', description: 'Design and develop games using Unity and Unreal Engine.', img: 'https://cdn-icons-png.flaticon.com/512/906/906343.png' },
      ]
    },
    'data-ai': {
      title: 'Data & AI',
      description: 'Dive into machine learning, AI tools, and data analysis.',
      subTracks: [
        { name: 'Data Analysis', description: 'Work with data visualization and analytics tools.', img: 'https://cdn-icons-png.flaticon.com/512/2920/2920277.png' },
        { name: 'Machine Learning', description: 'Build intelligent systems using ML models.', img: 'https://cdn-icons-png.flaticon.com/512/2103/2103626.png' },
        { name: 'Deep Learning', description: 'Explore neural networks and AI frameworks.', img: 'https://cdn-icons-png.flaticon.com/512/3616/3616199.png' },
      ]
    },
    'design-ux': {
      title: 'Design & UX',
      description: 'Master UI/UX design and create beautiful, user-friendly interfaces.',
      subTracks: [
        { name: 'UI Design', description: 'Learn design principles, colors, and layout.', img: 'https://cdn-icons-png.flaticon.com/512/1828/1828884.png' },
        { name: 'UX Research', description: 'Understand user needs through research and testing.', img: 'https://cdn-icons-png.flaticon.com/512/2985/2985166.png' },
        { name: 'Prototyping', description: 'Build prototypes using Figma and Adobe XD.', img: 'https://cdn-icons-png.flaticon.com/512/5968/5968705.png' },
      ]
    },
    'devops-cloud': {
      title: 'DevOps & Cloud',
      description: 'Learn CI/CD, Docker, and cloud deployment.',
      subTracks: [
        { name: 'DevOps Tools', description: 'Master Jenkins, Docker, and Kubernetes.', img: 'https://cdn-icons-png.flaticon.com/512/5969/5969059.png' },
        { name: 'Cloud Platforms', description: 'AWS, Azure, and Google Cloud fundamentals.', img: 'https://cdn-icons-png.flaticon.com/512/919/919851.png' },
        { name: 'Automation', description: 'Automate workflows with Ansible and Terraform.', img: 'https://cdn-icons-png.flaticon.com/512/906/906334.png' },
      ]
    }
  };

  useEffect(() => {
    setLoading(true);

    // Uncomment this part when API is ready
    /*
    fetch(`https://api.example.com/tracks/${slug}`)
      .then(res => res.json())
      .then(data => {
        setTrack(data);
        setLoading(false);
      })
      .catch(err => console.error(err));
    */

    const data = fakeTracks[slug];
    setTrack(data);
    setLoading(false);
  }, [slug]);

  if (loading) return <Loader />;
  if (!track) return <p className="text-center text-red-500 mt-10">Track not found</p>;

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <h1 className="text-4xl font-bold text-center mb-4 text-blue-700">{track.title}</h1>
      <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">{track.description}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {track.subTracks.map((sub, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 flex flex-col justify-between"
          >
            <img src={sub.img} alt={sub.name} className="w-full h-52 object-contain bg-gray-100" />
            <div className="p-6 flex flex-col flex-grow justify-between">
              <div>
                <h2 className="text-xl font-semibold mb-2 text-gray-800">{sub.name}</h2>
                <p className="text-gray-600 text-sm leading-relaxed">{sub.description}</p>
              </div>

              <div className="mt-6 flex justify-center">
               <PrimaryButton>
                Explore
                </PrimaryButton>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrackDetails;
