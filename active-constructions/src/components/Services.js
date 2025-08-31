function Services() {
  const services = ["Residential Projects", "Commercial Buildings", "Renovations"];

  return (
    <section id="services" className="p-6">
      <h2 className="text-2xl font-bold mb-4">Our Services</h2>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {services.map((s, i) => (
          <li key={i} className="p-4 border rounded-lg shadow">{s}</li>
        ))}
      </ul>
    </section>
  );
}
export default Services;
