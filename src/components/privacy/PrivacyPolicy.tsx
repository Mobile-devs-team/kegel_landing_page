import React from 'react';
import { Shield, Mail } from 'lucide-react';
import { PrivacySection } from './PrivacySection';
import { PrivacyList } from './PrivacyList';

export function PrivacyPolicy() {
  return (
    <section id="privacy" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="flex items-center justify-center mb-8">
            <Shield className="w-8 h-8 text-secondary mr-3" />
            <h2 className="text-3xl font-bold">Chính Sách Quyền Riêng Tư</h2>
          </div>

          <PrivacySection title="Giới thiệu">
            <p className="text-gray-600">
              Chúng tôi cam kết bảo vệ quyền riêng tư của bạn. Chính sách này mô tả cách chúng tôi thu thập,
              sử dụng và bảo vệ thông tin cá nhân của bạn khi bạn sử dụng ứng dụng <strong>PHSC Kegel</strong>.
            </p>
          </PrivacySection>

          <PrivacySection title="Thông tin chúng tôi thu thập">
            <PrivacyList items={[
              'Thông tin cá nhân: Tên, địa chỉ email và số điện thoại khi bạn đăng ký hoặc sử dụng ứng dụng.',
              'Dữ liệu sức khỏe: Thông tin liên quan đến sức khỏe của bạn để cung cấp hướng dẫn luyện tập phù hợp.',
              'Dữ liệu sử dụng: Thông tin về cách bạn tương tác với ứng dụng để cải thiện trải nghiệm.'
            ]} />
          </PrivacySection>

          <PrivacySection title="Cách chúng tôi sử dụng thông tin">
            <PrivacyList items={[
              'Cung cấp và duy trì dịch vụ.',
              'Cải thiện trải nghiệm người dùng và phát triển các tính năng mới.',
              'Gửi thông báo về các cập nhật và thông tin quan trọng khác.'
            ]} />
          </PrivacySection>

          <PrivacySection title="Chia sẻ thông tin">
            <p className="text-gray-600 mb-4">
              Chúng tôi cam kết không bán hoặc chia sẻ thông tin cá nhân của bạn với bên thứ ba
              mà không có sự đồng ý của bạn, trừ khi:
            </p>
            <PrivacyList items={[
              'Được yêu cầu bởi pháp luật hoặc cơ quan chức năng.',
              'Cần thiết để bảo vệ quyền lợi hợp pháp của chúng tôi.'
            ]} />
          </PrivacySection>

          <PrivacySection title="Bảo mật thông tin">
            <p className="text-gray-600">
              Chúng tôi áp dụng các biện pháp bảo mật thích hợp để bảo vệ thông tin cá nhân của bạn
              khỏi việc truy cập trái phép, thay đổi, tiết lộ hoặc phá hủy.
            </p>
          </PrivacySection>

          <PrivacySection title="Quyền của người dùng">
            <PrivacyList items={[
              'Yêu cầu truy cập vào thông tin cá nhân mà chúng tôi đang lưu trữ.',
              'Yêu cầu sửa đổi hoặc xóa thông tin cá nhân của bạn.',
              'Rút lại sự đồng ý đối với việc xử lý dữ liệu cá nhân bất cứ lúc nào.'
            ]} />
          </PrivacySection>

          <div className="border-t border-gray-200 pt-8 mt-8">
            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <Mail className="w-5 h-5" />
              <span>Liên hệ về quyền riêng tư:</span>
              <a href="mailto:nhatbm118@gmail.com" className="text-secondary hover:text-secondary/90">
                buiminhnhat2398@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}