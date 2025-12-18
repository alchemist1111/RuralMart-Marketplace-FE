import React, { useState } from 'react';
import RuralmartLogo from '../../assets/RuralmartLogo.jpg';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState('');

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) e.email = 'Invalid email';
    if (!form.subject.trim()) e.subject = 'Subject is required';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) return setErrors(e);
    setIsSubmitting(true);
    setSuccess('');

    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess('Thanks! Your message has been received. We will reply shortly.');
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 900);
  };

    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 p-4">
        <div className="w-full max-w-5xl bg-white rounded-xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          {/* left - logo / promo (consistent with Login/Register) */}
          <div className="w-full md:w-1/2 bg-emerald-50 flex items-center justify-center p-8 md:p-12">
            <div className="text-center">
              <img src={RuralmartLogo} alt="Ruralmart" className="mx-auto h-40 w-auto object-contain" />
              <h3 className="mt-6 text-2xl font-bold text-emerald-700">Contact Ruralmart</h3>
              <p className="mt-2 text-gray-600 px-6">We’d love to hear from you — questions, feedback or partnership inquiries.</p>
            </div>
          </div>

        {/* right - form */}
        <div className="w-full md:w-1/2 p-8 md:p-10">
          <div className="max-w-xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-1">Contact us</h3>
            <p className="text-sm text-gray-500 mb-6">Fill out the form and we’ll get back to you soon.</p>

            {success && (
              <div className="mb-4 p-3 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-100">
                {success}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-gray-900 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition ${errors.name ? 'ring-2 ring-red-200 border-red-400' : ''}`}
                  placeholder="Your name"
                />
                {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-gray-900 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition ${errors.email ? 'ring-2 ring-red-200 border-red-400' : ''}`}
                  placeholder="you@example.com"
                />
                {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Subject</label>
                <input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-gray-900 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition ${errors.subject ? 'ring-2 ring-red-200 border-red-400' : ''}`}
                  placeholder="Subject"
                />
                {errors.subject && <p className="text-xs text-red-600 mt-1">{errors.subject}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={6}
                  className={`mt-1 block w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition ${errors.message ? 'ring-2 ring-red-200 border-red-400' : ''}`}
                  placeholder="Write your message here..."
                />
                {errors.message && <p className="text-xs text-red-600 mt-1">{errors.message}</p>}
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full sm:w-auto inline-flex items-center justify-center px-6 py-2 rounded-lg text-white font-medium ${isSubmitting ? 'bg-emerald-400' : 'bg-emerald-600 hover:bg-emerald-700'} transition`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                <div className="text-sm text-gray-500">Or email us at <a href="mailto:support@ruralmart.com" className="text-emerald-600 hover:underline">support@ruralmart.com</a></div>
              </div>

              <p className="text-xs text-gray-400 mt-2">We respect your privacy. Your details will only be used to respond to your message.</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
