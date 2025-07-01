import React from "react";

const MajorProjectCard = ({ project, onAccess }) => {
  return (
    <div
      className="bg-white rounded-2xl shadow-lg flex flex-col md:flex-row w-full max-w-2xl mx-auto overflow-hidden"
      style={{
        minHeight: "340px",
      }}
    >
      {/* Left: Project Image */}
      <div className="md:w-1/2 w-full flex-shrink-0 flex items-center justify-center bg-[#10172b]">
        <img
          src={project.image}
          alt={project.title}
          className="object-contain w-full h-full md:rounded-l-2xl rounded-t-2xl"
          style={{ minHeight: "220px", maxHeight: "340px" }}
        />
      </div>

      {/* Right: Project Info */}
      <div className="md:w-1/2 w-full flex flex-col p-5 md:p-7">
        <div className="flex items-center gap-2 mb-2">
          {project.trainerSupported && (
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
              Trainer Supported
            </span>
          )}
          {project.club && (
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
              Club
            </span>
          )}
        </div>
        <h3 className="text-lg md:text-2xl font-bold text-[#001233] mb-1 leading-tight">
          {project.title}
        </h3>
        <p className="text-gray-700 text-sm md:text-base mb-2 line-clamp-2">
          {project.description}
        </p>
        <div className="mb-2">
          {project.tags && project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-blue-600 text-xs md:text-sm font-semibold mr-2"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="text-[#007bff] text-xs md:text-sm mb-2">
          Duration : {project.duration}
        </div>
        <button
          className="mt-auto bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded-full w-full text-base md:text-lg transition"
          onClick={onAccess}
        >
          Get Project Access
        </button>
      </div>
    </div>
  );
};

export default MajorProjectCard;
