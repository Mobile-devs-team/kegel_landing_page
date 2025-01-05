import React from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';

export function Support() {
  return (
    <section id="support" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Hỗ trợ chuyên nghiệp</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-primary/20 p-8 rounded-xl text-center">
            <Phone className="w-12 h-12 text-secondary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Tư vấn qua điện thoại</h3>
            <p className="text-gray-600 mb-4">Đội ngũ chuyên gia sẵn sàng hỗ trợ bạn qua điện thoại</p>
            <button className="bg-secondary text-white px-6 py-2 rounded-full hover:bg-secondary/90">
              Gọi ngay
            </button>
          </div>
          
          <div className="bg-primary/20 p-8 rounded-xl text-center">
            <MessageCircle className="w-12 h-12 text-secondary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Chat trực tuyến</h3>
            <p className="text-gray-600 mb-4">Chat với bác sĩ chuyên khoa trực tiếp qua ứng dụng</p>
            <button className="bg-secondary text-white px-6 py-2 rounded-full hover:bg-secondary/90">
              Chat ngay
            </button>
          </div>
          
          <div className="bg-primary/20 p-8 rounded-xl text-center">
            <Mail className="w-12 h-12 text-secondary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Email hỗ trợ</h3>
            <p className="text-gray-600 mb-4">Gửi câu hỏi và nhận phản hồi chi tiết qua email</p>
            <button className="bg-secondary text-white px-6 py-2 rounded-full hover:bg-secondary/90">
              Gửi email
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}