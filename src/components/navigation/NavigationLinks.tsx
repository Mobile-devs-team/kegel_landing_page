import React from 'react';
import { Download } from 'lucide-react';

export function NavigationLinks() {
  return (
    <div className="hidden md:flex items-center space-x-8">
      <a href="#features" className="text-gray-600 hover:text-secondary">Tính năng</a>
      <a href="#education" className="text-gray-600 hover:text-secondary">Kiến thức</a>
      <a href="#support" className="text-gray-600 hover:text-secondary">Hỗ trợ</a>
      <a href="#privacy" className="text-gray-600 hover:text-secondary">Quyền riêng tư</a>
      <button className="bg-secondary text-white px-6 py-2 rounded-full flex items-center space-x-2 hover:bg-secondary/90">
        <Download size={20} />
        <span>Tải ứng dụng</span>
      </button>
    </div>
  );
}