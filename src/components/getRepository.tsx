"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Repo {
  id: number;
  name: string;
  html_url: string;
}

const GetRepository = () => {
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

  if (loading) return <p>Cargando repositorios...</p>;
  if (error) return <p>Error al cargar los repositorios: {error.message}</p>;

  return (
    <div style={{ color: 'black',backgroundColor: 'white', padding: '20px', minHeight: '100vh' }} >
      <h1>Repositorios de {username}</h1>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GetRepository;