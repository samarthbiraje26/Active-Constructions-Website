function Contact() {
  return (
    <section id="contact" className="p-6 bg-blue-50">
      <h2 className="text-2xl font-bold">Contact Us</h2>
      <form className="flex flex-col gap-3 mt-4 max-w-md">
        <input type="text" placeholder="Your Name" className="p-2 border rounded" />
        <input type="email" placeholder="Your Email" className="p-2 border rounded" />
        <textarea placeholder="Message" className="p-2 border rounded"></textarea>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Send</button>
      </form>
    </section>
  );
}
export default Contact;
