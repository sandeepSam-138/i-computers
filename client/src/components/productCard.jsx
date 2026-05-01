export default function ProductCard(props) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      
      <div className="group max-w-sm overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
        
        {/* Image Section */}
        <div className="overflow-hidden">
          <img
            src={props.imageUrl}
            alt={"Picture of " + props.name}
            className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Content Section */}
        <div className="p-6">
          <h1 className="mb-3 text-2xl font-bold text-gray-800">
            {props.name}
          </h1>

          <p className="mb-5 text-gray-600 leading-relaxed">
            {props.description}
          </p>

          <button className="rounded-xl bg-black px-5 py-3 text-white font-semibold transition-all duration-300 hover:bg-gray-800 hover:scale-105 active:scale-95">
            Learn More
          </button>
        </div>

      </div>

    </div>
  );
}