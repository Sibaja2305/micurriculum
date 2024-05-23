"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Repo {
  id: number;
  name: string;
  html_url: string;
}

const GetRepositorySlider = () => {
  const username = 'Sibaja2305';
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetchRepos(username);
  }, [username]);

  const fetchRepos = async (username: string) => {
    try {
      const response = await axios.get<Repo[]>(`https://api.github.com/users/${username}/repos`);
      setRepos(response.data);
      setLoading(false);
    } catch (error) {
      setError(error as Error);
      setLoading(false);
    }
  };

  if (loading) return <p className="text-center mt-4">Cargando repositorios...</p>;
  if (error) return <p className="text-center mt-4">Error al cargar los repositorios: {error.message}</p>;

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="bg-black text-white min-h-screen p-20">
      <h1 className="text-center m-3 text-2xl mb-40">Repositorios: {username}</h1>
      <div>
        <Slider {...settings}>
          {repos.map((repo) => (
            <div key={repo.id} className="p-4">
              <a 
                href={repo.html_url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block p-6 border border-gray-200 rounded-lg shadow bg-white hover:bg-black transition-all duration-300 group"
              >
                <h3 className="text-lg font-medium text-black group-hover:text-white transition-all duration-300">
                  {repo.name}
                </h3>
                <a href={repo.html_url+'/archive/refs/heads/main.zip'}>Descargar</a>
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default GetRepositorySlider;