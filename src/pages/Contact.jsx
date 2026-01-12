export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Left: Form */}
        <form className="bg-white p-6 rounded-lg shadow space-y-4">
          <h2 className="text-xl font-semibold mb-2">Send Message</h2>
          <input type="text" placeholder="Full Name" className="w-full border p-3 rounded" />
          <input type="email" placeholder="Email Address" className="w-full border p-3 rounded" />
          <input type="tel" placeholder="Phone Number" className="w-full border p-3 rounded" />
          <select className="w-full border p-3 rounded">
            <option>Service Required</option>
            <option>CNC Machining</option>
            <option>Laser Cutting</option>
            <option>Custom Fabrication</option>
            <option>UPS/Power Solutions</option>
          </select>
          <textarea rows="4" placeholder="Your Message" className="w-full border p-3 rounded" />
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded">
            Send Message
          </button>
        </form>

        {/* Right: Map + Info */}
        <div className="space-y-6">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13609.123456789!2d72.3456789!3d31.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3917abcd123456%3A0xabcdef1234567890!2sChak%20624%20GB%20Haripur!5e0!3m2!1sen!2s!4v1234567890"
            className="w-full h-64 rounded-lg border"
            allowFullScreen=""
            loading="lazy"
          ></iframe>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-700">
            <div className="bg-white p-4 rounded shadow">
              <h3 className="font-bold mb-1">📍 Our Location</h3>
              <p>123 Engineering Blvd</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="font-bold mb-1">📞 Phone Number</h3>
              <p>+1 (800) 123-4567</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="font-bold mb-1">📧 Email Address</h3>
              <p>info@abdullaheng.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}