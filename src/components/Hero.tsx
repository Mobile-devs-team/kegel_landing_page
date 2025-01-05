import React from 'react';
import { Download } from 'lucide-react';

export function Hero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-primary/30 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Chăm sóc sức khỏe sàn chậu
              <span className="text-secondary"> dễ dàng hơn bao giờ hết</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              PHSC Kegel giúp bạn tập luyện đúng cách với hướng dẫn chi tiết, theo dõi tiến độ và nhận được sự hỗ trợ từ các chuyên gia y tế hàng đầu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-secondary text-white px-8 py-3 rounded-full flex items-center justify-center space-x-2 hover:bg-secondary/90">
                <Download size={20} />
                <span>Tải trên App Store</span>
              </button>
              <button className="bg-black text-white px-8 py-3 rounded-full flex items-center justify-center space-x-2 hover:bg-gray-800">
                <Download size={20} />
                <span>Tải trên Google Play</span>
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80"
              alt="Phụ nữ tập yoga"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}