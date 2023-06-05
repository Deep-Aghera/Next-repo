import React from "react";
import Link from "next/link";
import { FaStar,FaCodeBranch,FaEye } from "react-icons/fa";


async function fetchRepo(name) {
  const reponse = await fetch(
    `https://api.github.com/repos/bradtraversy/${name}`,{
      next : {
        revalidate : 60,
      }
    }
  );

  const repo = await reponse.json()
  return repo;
}

const Repo = async ({ name }) => {
  const repo = await fetchRepo(name);
  console.log("here form ",repo,name)
  return <>
    <h2>{repo.name}</h2>
    <p>{repo.description}</p>
    <div className="card-stats">
        <div className="card-stat">
            <FaStar />
            <span>{repo.stargazers_count}</span>
        </div>
        <div className="card-stat">
            <FaCodeBranch />
            <span>{repo.forks_count}</span>
        </div>
        <div className="card-stat">
            <FaEye />
            <span>{repo.watchers_count}</span>
        </div>
    </div>
  </>;
};

export default Repo;
