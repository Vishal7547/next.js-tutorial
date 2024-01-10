import React from "react";

const Page = () => {
  const imageArray = [
    [
      [
        { title: "Mountain View" },
        { title: "Urban Jungle" },
        { title: "Colorful Abstract" },
        { title: "Wild Animals" },
      ],
      [
        { title: "Ocean Sunset" },
        { title: "Forest Landscape" },
        { title: "City Lights" },
        { title: "Modern Art" },
        { title: "Birds in Nature" },
      ],
    ],
    [
      [
        { title: "Desert Sunset" },
        { title: "Countryside Beauty" },
        { title: "Skyline Reflection" },
        { title: "Surrealistic Painting" },
      ],
      [
        { title: "Bird in Nature" },
        { title: "Wildlife Close-up" },
        { title: "Hilltop Sunset" },
        { title: "Countryside Beauty" },
        { title: "Skyline Reflection" },
      ],
    ],
  ];

  return (
    <div>
      <div className="div">
        <div>
          {imageArray.map((d, i) => {
            return (
              <div key={i}>
                <div className="start m-2">{d.title}</div>
                {/* when it's a multiple of four, then it follows another pattern */}
                {(i + 1) % 4 === 0 && (
                  <div className="container bg-slate-200">
                    <div className="flex flex-row">
                      <div className="basis-1/4">
                        {imageArray[(i + 1) % imageArray.length].title}
                      </div>
                      <div className="basis-1/4">
                        <div className="flex flex-row">
                          <div className="basis-1/2">
                            {imageArray[(i + 2) % imageArray.length].title}
                          </div>
                          <div className="basis-1/2">
                            {imageArray[(i + 3) % imageArray.length].title}
                          </div>
                        </div>
                        <div className="flex flex-row">
                          <div className="basis-1/2">
                            {imageArray[(i + 4) % imageArray.length].title}
                          </div>
                          <div className="basis-1/2">
                            {imageArray[(i + 5) % imageArray.length].title}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Page;
