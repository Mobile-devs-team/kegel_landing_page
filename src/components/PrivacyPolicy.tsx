import React from 'react';
import { Shield, Mail } from 'lucide-react';
import { PrivacySection } from './privacy/PrivacySection';
import { PrivacyList } from './privacy/PrivacyList';

export function PrivacyPolicy() {
  return (
    <section id="privacy" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="flex items-center justify-center mb-8">
            <Shield className="w-8 h-8 text-secondary mr-3" />
            <h2 className="text-3xl font-bold">Chính Sách Quyền Riêng Tư</h2>
          </div>

          {/* Rest of the PrivacyPolicy component remains the same */}
          {/* ... */}

          <div className="border-t border-gray-200 pt-8 mt-8">
            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <Mail className="w-5 h-5" />
              <span>Liên hệ về quyền riêng tư:</span>
              <a href="mailto:nhatbm118@gmail.com" className="text-secondary hover:text-secondary/90">
                nhatbm118@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}