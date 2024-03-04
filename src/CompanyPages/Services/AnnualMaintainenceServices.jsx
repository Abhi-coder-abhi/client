import React from "react";

const AnnualMaintainenceServices = () => {
  const maintenanceServices = [
    {
      title: "Residential Maintenance",
      description:
        "Our annual maintenance plans for residential properties ensure the safety and reliability of your electrical systems. We offer timely inspections, wiring upgrades, and emergency response services to keep your home well-lit and secure.",
      color: "bg-blue-500",
      onHonver: "bg-black",
    },
    {
      title: "Commercial Maintenance",
      description:
        "Business operations depend on uninterrupted power supply. Our commercial maintenance services cater to the unique needs of your business. We provide preventive maintenance, generator support, and rapid response to minimize downtime.",
      color: "bg-green-500",
    },
    {
      title: "Industrial Maintenance",
      description:
        "Industries require robust electrical systems to keep production running smoothly. Our industrial maintenance services offer scheduled maintenance, equipment upgrades, and 24/7 support to ensure your facility's electrical infrastructure is always in optimal condition.",
      color: "bg-yellow-500",
    },
    {
      title: "Office Building Maintenance",
      description:
        "We specialize in maintaining electrical systems for office buildings of all sizes. Our services include lighting upgrades, energy efficiency solutions, and round-the-clock support to ensure your office stays productive.",
      color: "bg-indigo-500",
    },
    {
      title: "Data Center Maintenance",
      description:
        "Data centers require precision and reliability. Our maintenance services for data centers include HVAC support, power redundancy planning, and regular equipment checks to minimize downtime and data loss.",
      color: "bg-red-500",
    },
    {
      title: "Healthcare Facility Maintenance",
      description:
        "In healthcare, electrical systems are critical. Our healthcare facility maintenance services focus on ensuring a continuous power supply for life-saving equipment, compliance with regulations, and swift response to emergencies.",
      color: "bg-purple-500",
    },
    {
      title: "Educational Facility Maintenance",
      description:
        "Educational institutions rely on electricity for teaching and administration. Our maintenance services for educational facilities encompass electrical safety inspections, energy-efficient lighting, and electrical upgrades to support modern classrooms.",
      color: "bg-orange-500",
    },
    {
      title: "Retail Store Maintenance",
      description:
        "For retail stores, electrical systems are essential for lighting and point-of-sale systems. Our maintenance services for retail stores cover electrical troubleshooting, lighting maintenance, and emergency electrical repairs.",
      color: "bg-pink-500",
    },
    {
      title: "Hospitality Establishment Maintenance",
      description:
        "The hospitality industry requires electrical reliability for guest comfort. Our maintenance services for hotels and resorts include electrical system monitoring, energy-saving solutions, and rapid response to electrical issues.",
      color: "bg-teal-500",
    },
  ];

  return (
    <>
      <div className="mt-0 md:mt-16 min-h-screen bg-gray-100 p-4 pt-28 md:pt-4">
        <h1 className="text-2xl mt-8 font-semibold text-center mb-8">
          Annual Maintenance Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4">
          {maintenanceServices.map((service, index) => (
            <div
              key={index}
              className={`rounded shadow-xl transition-transform transform hover:scale-105 hover:bg-black text-white ${service.color}`}
            >
              <div className="p-4">
                <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AnnualMaintainenceServices;
