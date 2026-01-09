import Link from "next/link";

const videos = [
  {
    id: "GQJcm2Txv4g",
    title: "Edathadan Original Oils – Our Story",
  },
  {
    id: "gVGqPN5GBgs",
    title: "Original Gingelly Oil Production in Kerala",
  },
];

export default function VideoSection() {
  return (
    <section className="px-6 md:px-20 py-20 bg-white -mt-6 md:-mt-12">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-10">
          <p className="text-sm tracking-widest text-gray-500 uppercase">
            Videos
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mt-2">
            Watch Our Journey
          </h2>
        </div>

        {/* Videos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video) => (
            <Link
              key={video.id}
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              className="group relative rounded-2xl overflow-hidden shadow-lg"
            >
              {/* Thumbnail */}
              <img
                src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                alt={video.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
                <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center shadow-xl">
                  <svg
                    className="w-6 h-6 text-white ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              {/* Title */}
              <div className="absolute bottom-0 w-full p-4 bg-linear-to-t from-black/80 to-transparent">
                <p className="text-white text-sm font-medium">{video.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
