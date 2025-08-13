import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react';
import 'swiper/swiper-bundle.css';

const ProjectSlider = ({ 
  title, 
  description, 
  images, 
  className = '' 
}) => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Create a unique identifier for this slider instance
  const sliderId = React.useId();
  // Create a safe CSS class name by removing special characters and adding unique ID
  const safeClassName = `${title.replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s+/g, '-').toLowerCase()}-${sliderId.replace(/:/g, '')}`;

  const navigateImage = (direction) => {
    if (selectedImage === null) return;
    
    const currentIndex = images.findIndex(img => img.id === selectedImage);
    let newIndex;
    
    if (direction === 'prev') newIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    else newIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;

    setSelectedImage(images[newIndex].id);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setSelectedImage(null);
    } else if (e.key === 'ArrowLeft') {
      navigateImage('prev');
    } else if (e.key === 'ArrowRight') {
      navigateImage('next');
    }
  };

  const selectedImageData = images.find(img => img.id === selectedImage);

  return (
    <>
      <motion.div 
        className={`mb-16 ${className}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        {/* Project Header */}
        <div className="mb-8">
          {/* <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {title}
          </h3> */}
          {/* <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed">
            {description}
          </p> */}
        </div>

        {/* Image Slider */}
        <div className="relative">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            loop={images.length > 1}
            autoplay={{ 
              delay: 4000, 
              disableOnInteraction: false,
              pauseOnMouseEnter: true 
            }}
            navigation={{
              nextEl: `.swiper-button-next-${safeClassName}`,
              prevEl: `.swiper-button-prev-${safeClassName}`,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2.5 },
              1280: { slidesPerView: 3 },
            }}
            modules={[Navigation, Pagination, Autoplay]}
            className="w-full pb-12"
          >
            {images.map((image) => (
              <SwiperSlide key={image.id}>
                <div 
                  className="group cursor-pointer relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => setSelectedImage(image.id)}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ZoomIn className="w-8 h-8 text-white" />
                  </div>
                  {image.caption && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <p className="text-white text-sm font-medium">{image.caption}</p>
                    </div>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className={`swiper-button-prev-${safeClassName} absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white/90 dark:bg-gray-800/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-all cursor-pointer`}>
            <ChevronLeft className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </div>
          <div className={`swiper-button-next-${safeClassName} absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white/90 dark:bg-gray-800/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-all cursor-pointer`}>
            <ChevronRight className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </div>
        </div>
      </motion.div>

      {/* Image Modal */}
      {selectedImage && selectedImageData && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70 transition-all"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation buttons */}
            {images.length > 1 && (
              <>
                <button
                  onClick={() => navigateImage('prev')}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70 transition-all"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={() => navigateImage('next')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70 transition-all"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Image */}
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
              <img 
                src={selectedImageData.src} 
                alt={selectedImageData.alt}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              {selectedImageData.caption && (
                <div className="p-6">
                  <p className="text-gray-900 dark:text-white text-lg">
                    {selectedImageData.caption}
                  </p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default ProjectSlider;
