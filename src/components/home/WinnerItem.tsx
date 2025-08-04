import { useState, useEffect } from 'react';

interface WinnerItemProps {
  year: string;
  award: string;
  title: string;
  description: string;
  images?: string[];
}

const WinnerItem = ({ year, award, title, description, images }: WinnerItemProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const handleModalClose = () => {
    setSelectedImage(null);
  };
  return (
    <div className="p-8 bg-gray-900 border-l-4 border-terminal-green max-md:p-[1.2rem] max-md:text-center max-sm:p-4">
      <h3 className="font-mono text-base uppercase tracking-[0.1em] mb-2 text-terminal-green max-md:text-[0.9rem]">
        {year}年度 {award}
      </h3>
      <h4 className="text-[1.5rem] mb-4 max-md:text-[1.1rem] max-md:mb-3 max-sm:text-[1.2rem]">
        「{title}」
      </h4>
      <p className="text-base leading-[1.6] mb-6 opacity-90 max-md:text-[0.85rem] max-md:leading-[1.5] max-sm:text-[0.9rem] max-md:mb-4">
        {description}
      </p>
      
      {images && images.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="relative group overflow-hidden rounded border border-white/20 bg-gray-800 aspect-[4/3] cursor-pointer"
              onClick={() => handleImageClick(image)}
            >
              <img 
                src={image} 
                alt={`${title} スクリーンショット ${index + 1}`}
                className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110 group-hover:brightness-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-terminal-green/0 group-hover:bg-terminal-green/10 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 rounded-full p-2">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={handleModalClose}
        >
          <div className="relative max-w-[90vw] max-h-[90vh] bg-gray-900 rounded-lg border border-terminal-green/30 shadow-2xl">
            <button
              onClick={handleModalClose}
              className="absolute -top-4 -right-4 w-8 h-8 bg-terminal-green text-black rounded-full flex items-center justify-center font-bold text-lg hover:bg-terminal-green/80 transition-colors z-10"
            >
              ×
            </button>
            <div className="p-4">
              <img
                src={selectedImage}
                alt={`${title} 拡大画像`}
                className="max-w-full max-h-[80vh] object-contain rounded"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WinnerItem;