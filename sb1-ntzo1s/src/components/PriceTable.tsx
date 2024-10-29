import React from 'react';

const PriceTable = () => {
  const services = [
    {
      category: 'Consultation',
      items: [
        { name: 'Initial Consultation', price: '$75' },
        { name: 'Emergency Consultation', price: '$100' },
      ],
    },
    {
      category: 'General Care',
      items: [
        { name: 'Dental Cleaning', price: '$120' },
        { name: 'Filling (per tooth)', price: '$150-$300' },
        { name: 'Root Canal', price: '$700-$1,500' },
      ],
    },
    {
      category: 'Cosmetic',
      items: [
        { name: 'Teeth Whitening', price: '$400' },
        { name: 'Veneers (per tooth)', price: '$800-$2,000' },
        { name: 'Dental Crown', price: '$800-$1,700' },
      ],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      {services.map((service) => (
        <div key={service.category} className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.category}</h3>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <table className="w-full">
              <tbody>
                {service.items.map((item) => (
                  <tr key={item.name} className="border-b border-gray-200 last:border-0">
                    <td className="px-6 py-4 text-gray-900">{item.name}</td>
                    <td className="px-6 py-4 text-right font-semibold text-blue-600">
                      {item.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
      <p className="text-center text-gray-600 mt-6">
        * Prices may vary based on complexity. Contact us for a personalized quote.
      </p>
    </div>
  );
};

export default PriceTable;