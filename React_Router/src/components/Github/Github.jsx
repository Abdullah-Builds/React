import React from "react";
import { useLoaderData } from "react-router";

export default function Github() {
  const data = useLoaderData();

  const links = [
    { label: "Gists Url", url: data.gists_url },
    { label: "Received Events Url", url: data.received_events_url },
    { label: "Events Url", url: data.events_url },
    {label : "Starred Url " ,url:data.starred_url},
    {label: "Folllowers Url ",url: data.followers_url},
  ];

  return (
    <>
      <div className="bg-amber-100 p-4 m-4 text-center">
        Github Followers : {data.followers}
      </div>

      <div className="flex justify-center">
        <img
          className="p-4 m-4 border-4 border-r-black"
          src={data.avatar_url}
          alt="Github photo"
        />
        
        <ul className="m-4">
          {links.map((item, index) => (

            <li key={index} className="p-2">
            <p> {item.label} :{" "}
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  {item.label}
                </a>
              </p>
            </li>
          ))
          }
        </ul>
      </div>
    </>
  );
}
