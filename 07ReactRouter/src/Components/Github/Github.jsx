import { useEffect, useState } from "react";

import { useLoaderData } from "react-router-dom";
function Github() {
  // Second Method
  const data = useLoaderData();

  // Frist Method
  //   const [data, setData] = useState([]);

  //   useEffect(() => {
  //     fetch('https://api.github.com/users/jaypedhadiya07')
  //       .then((Response) => Response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);
  return (
    <div className="text-4xl bg-gray-500 p-4 text-white text-center">
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt="git picture" width={300} />
    </div>
  );
}

export default Github;

export const GithubInfoLoader = async () => {
  const Response = await fetch("https://api.github.com/users/jaypedhadiya07");
  return Response.json();
};
