import React from 'react';
import { Activity, Book, Heart, Users } from 'lucide-react';

const features = [
  {
    icon: <Activity className="w-8 h-8 text-secondary" />,
    title: 'Bài tập theo cấp độ',
    description: 'Từ người mới bắt đầu đến nâng cao, mỗi bài tập được thiết kế phù hợp với trình độ của bạn.'
  },
  {
    icon: <Book className="w-8 h-8 text-secondary" />,
    title: 'Kiến thức chuyên sâu',
    description: 'Tiếp cận nguồn kiến thức đáng tin cậy về sức khỏe sàn chậu từ các chuyên gia.'
  },
  {
    icon: <Heart className="w-8 h-8 text-secondary" />,
    title: 'Theo dõi tiến độ',
    description: 'Dễ dàng theo dõi sự tiến bộ của bạn qua thời gian với các biểu đồ trực quan.'
  },
  {
    icon: <Users className="w-8 h-8 text-secondary" />,
    title: 'Hỗ trợ chuyên nghiệp',
    description: 'Kết nối trực tiếp với đội ngũ bác sĩ và chuyên gia y tế khi cần thiết.'
  }
];

export function Features() {
  return (
    <section id="features" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Tính năng nổi bật</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}