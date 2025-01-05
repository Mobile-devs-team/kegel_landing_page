import React from 'react';

interface PrivacyListProps {
  items: string[];
}

export function PrivacyList({ items }: PrivacyListProps) {
  return (
    <ul className="list-disc list-inside space-y-2 text-gray-600">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}