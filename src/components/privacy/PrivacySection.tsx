import React from 'react';

interface PrivacySectionProps {
  title: string;
  children: React.ReactNode;
}

export function PrivacySection({ title, children }: PrivacySectionProps) {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4 text-gray-900">{title}</h3>
      {children}
    </div>
  );
}