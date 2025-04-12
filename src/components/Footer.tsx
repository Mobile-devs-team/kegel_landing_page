import React from 'react';
import { Facebook, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">PHSC Kegel</h3>
            <p className="text-gray-400">Đồng hành cùng sức khỏe sàn chậu của bạn</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Liên kết</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-white">Tính năng</a></li>
              <li><a href="#exercises" className="text-gray-400 hover:text-white">Bài tập</a></li>
              <li><a href="#education" className="text-gray-400 hover:text-white">Kiến thức</a></li>
              <li><a href="#support" className="text-gray-400 hover:text-white">Hỗ trợ</a></li>
              <li><a href="#privacy" className="text-gray-400 hover:text-white">Quyền riêng tư</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Liên hệ</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: buiminhnhat2398@gmail.com</li>
              <li>Facebook: https://web.facebook.com/bsthuylan1984</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Theo dõi chúng tôi</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Youtube />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 PHSC Kegel. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
}