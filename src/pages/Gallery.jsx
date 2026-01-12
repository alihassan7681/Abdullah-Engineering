import { useMemo, useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";

const PROJECTS = [
  {
    id: 1,
    title: "CNC Machine XL",
    category: "CNC Machine",
    image: "https://cdn.pixabay.com/photo/2020/07/28/20/13/machine-5446222_1280.jpg",
    description: "High-torque CNC unit for heavy-duty milling operations with precision control.",
  },
  {
    id: 2,
    title: "Fiber Laser Pro",
    category: "Fiber Cutting",
    image: "https://www.productionproducts.net/wp-content/uploads/2020/01/PROFAB-Laser-Pro-1.jpg",
    description: "Advanced fiber laser system for precision cutting of metal sheets.",
  },
  {
    id: 3,
    title: "UPS Cabinet",
    category: "Battery/UPS Bodies",
    image: "https://www.kohler-ups.ie/wp-content/uploads/2015/04/Conceptpower-DPA-open-door-1000x1000.jpg",
    description: "Industrial-grade UPS enclosure with modular design and optimal cooling.",
  },
  {
    id: 4,
    title: "Designer Grill",
    category: "Custom Grills",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlrr8cRW0hnY9lJBJt8Y2vZlKx7LjbkCI6eA&s",
    description: "Custom fabricated decorative grill with intricate patterns.",
  },
  {
    id: 5,
    title: "Printing Window",
    category: "Printing Windows",
    image: "https://5.imimg.com/data5/CU/IA/MY-25588090/cnc-window-ms-2fss-2f-jaali-500x500.jpg",
    description: "Energy-efficient aluminum window system with double glazing.",
  },
  {
    id: 6,
    title: "Security Door",
    category: "Industrial Doors",
    image: "https://protechdesign.com.au/wp-content/uploads/2021/07/MainImg-2.jpg",
    description: "Heavy-duty industrial security door with reinforced frame.",
  },
  {
    id: 7,
    title: "CNC Precision",
    category: "CNC Machine",
    image: "https://www.thompsonprecision.co.uk/wp-content/uploads/2022/03/High-Precicion-CNC-being-machined.jpg",
    description: "State-of-the-art CNC machining center for complex parts.",
  },
  {
    id: 8,
    title: "Laser Cutter",
    category: "Fiber Cutting",
    image: "https://www.3ds.com/assets/invest/2023-02/cutting-2.jpeg",
    description: "High-power fiber laser cutting system for industrial applications.",
  },
  {
    id: 9,
    title: "Battery Rack",
    category: "Battery/UPS Bodies",
    image: "https://www.aco-battery.com/upload/thumb3/news-info/1704542043-ups-4.png",
    description: "Custom battery rack system with ventilation and cable management.",
  },
  {
    id: 10,
    title: "Gate Design",
    category: "Custom Grills",
    image: "https://5.imimg.com/data5/SELLER/Default/2022/3/WM/RN/WS/32826219/cnc-laser-cutting-mild-steel-gate.jpg",
    description: "Elegant gate design with modern patterns and durable finish.",
  },
  {
    id: 12,
    title: "Warehouse Door",
    category: "Industrial Doors",
    image: "https://5.imimg.com/data5/ANDROID/Default/2023/11/364613285/TX/CV/LE/97666461/product-jpeg-500x500.jpg",
    description: "Large-scale warehouse door with automated opening system.",
  },
];

const CATEGORIES = [
  "All",
  "CNC Machine",
  "Custom Grills",
  "Industrial Doors",
  "Printing Windows",
  "Fiber Cutting",
  "Battery/UPS Bodies",
];

function CategoryFilter({ active, onChange }) {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {CATEGORIES.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
            active === cat
              ? "bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg scale-105"
              : "bg-white text-gray-700 hover:bg-gray-100 shadow-md hover:shadow-lg"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

function AutoSlider({ projects }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 4;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => 
        prev + itemsPerView >= projects.length ? 0 : prev + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [projects.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + itemsPerView >= projects.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.max(0, projects.length - itemsPerView) : prev - 1
    );
  };

  const visibleProjects = projects.slice(currentIndex, currentIndex + itemsPerView);
  
  if (visibleProjects.length < itemsPerView) {
    visibleProjects.push(...projects.slice(0, itemsPerView - visibleProjects.length));
  }

  return (
    <div className="relative  py-16 mb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* <h2 className="text-3xl font-bold text-white text-center mb-8">Featured Projects</h2> */}
        
        <div className="relative">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white/90 hover:bg-white p-3 rounded-full shadow-xl transition-all"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {visibleProjects.map((project, idx) => (
              <div
                key={`${project.id}-${idx}`}
                className="bg-white rounded-xl overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="font-bold text-lg">{project.title}</h3>
                    <p className="text-xs opacity-90">{project.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white/90 hover:bg-white p-3 rounded-full shadow-xl transition-all"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: Math.ceil(projects.length / itemsPerView) }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx * itemsPerView)}
              className={`h-2 rounded-full transition-all ${
                Math.floor(currentIndex / itemsPerView) === idx
                  ? "w-8 bg-white"
                  : "w-2 bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectTile({ project, onOpen }) {
  return (
    <div className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <button
          onClick={() => onOpen(project)}
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <div className="bg-white/90 p-4 rounded-full transform scale-75 group-hover:scale-100 transition-transform duration-300">
            <ZoomIn className="w-6 h-6 text-gray-800" />
          </div>
        </button>
      </div>

      <div className="p-5">
        <h3 className="font-bold text-lg text-gray-800 mb-2">{project.title}</h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{project.description}</p>
        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
          {project.category}
        </span>
      </div>
    </div>
  );
}

function Lightbox({ item, onClose }) {
  if (!item) return null;
  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden animate-fade-in">
        <div className="flex items-center justify-between px-6 py-4 border-b bg-gradient-to-r from-blue-600 to-blue-800">
          <h3 className="text-xl font-bold text-white">{item.title}</h3>
          <button
            onClick={onClose}
            className="rounded-full p-2 bg-white/20 hover:bg-white/30 transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>
        <div className="p-6 space-y-4">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-96 object-cover rounded-xl shadow-lg"
          />
          <div className="space-y-2">
            <p className="text-gray-700 leading-relaxed">{item.description}</p>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-800">Category:</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">
                {item.category}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeItem, setActiveItem] = useState(null);

  const filtered = useMemo(() => {
    if (activeCategory === "All") return PROJECTS;
    return PROJECTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        className="text-white py-20 px-6 relative"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(15,23,42,0.85), rgba(37,99,235,0.55)), url(${PROJECTS[0].image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-6xl mx-auto text-center relative">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Our Projects Gallery</h1>
          <p className="text-blue-100 text-lg max-w-3xl mx-auto">
            Explore our portfolio of engineering excellence across CNC machining, laser cutting, custom fabrication, and industrial solutions.
          </p>
        </div>
      </div>

      {/* Auto Slider */}
      <AutoSlider projects={PROJECTS} />

      {/* Category Filter */}
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <CategoryFilter active={activeCategory} onChange={setActiveCategory} />
      </div>

      {/* Parallax banner for gallery (gradient only - image removed) */}
      {/* <Parallax title={activeCategory === "All" ? "All Projects" : activeCategory} /> */}

      {/* Projects Grid */}
      <main className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((p) => (
            <ProjectTile key={p.id} project={p} onOpen={setActiveItem} />
          ))}
        </div>
      </main>

      <Lightbox item={activeItem} onClose={() => setActiveItem(null)} />
    </div>
  );
}

function Parallax({ title, height = 420 }) {
  return (
    <section className="parallax-wrapper relative overflow-hidden" style={{ height }}>
      <div
        className="parallax-bg absolute left-0 top-0 w-full h-full"
        style={{ background: "linear-gradient(90deg, #0f172a, #2563eb)" }}
      />
      <div className="parallax-overlay absolute inset-0 bg-black/25 flex items-center justify-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
      </div>
    </section>
  );
}