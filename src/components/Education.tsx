import React from 'react';

export function Education() {
  return (
    <section id="education" className="py-16 bg-purple-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
              alt="Học tập trực tuyến"
              className="rounded-2xl shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Kiến thức sức khỏe toàn diện</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-2">Hiểu về sàn chậu</h3>
                <p className="text-gray-600">Tìm hiểu về cấu trúc và chức năng của cơ sàn chậu, vai trò quan trọng đối với sức khỏe.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-2">Phòng ngừa và điều trị</h3>
                <p className="text-gray-600">Các biện pháp phòng ngừa và điều trị các vấn đề sàn chậu phổ biến.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-2">Lối sống lành mạnh</h3>
                <p className="text-gray-600">Hướng dẫn về chế độ ăn uống và lối sống để duy trì sức khỏe sàn chậu tối ưu.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}