import React from 'react';

const CareerApply: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative py-16 bg-gradient-to-br from-teal-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center">Apply at AppXcess</h1>
          <p className="mt-3 text-white/80 max-w-3xl mx-auto text-center">Submit your details and resume. We'll get back to you soon.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-3xl p-8 lg:p-12 shadow">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Application Form</h2>
            <form
              action="https://forms.zohopublic.in/appxcesstechnologies1/form/CareersForm/formperma/8-0iVXuSATrQwQujxMjhQjgw7V57n3ok5iDOmdns6aQ/htmlRecords/submit"
              method="POST"
              encType="multipart/form-data"
              accept-charset="UTF-8"
              className="space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="Name_First" className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                  <input type="text" id="Name_First" name="Name_First" required className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent" placeholder="First Name" />
                </div>
                <div>
                  <label htmlFor="Name_Last" className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                  <input type="text" id="Name_Last" name="Name_Last" required className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent" placeholder="Last Name" />
                </div>
              </div>

              <div>
                <label htmlFor="Email" className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                <input type="email" id="Email" name="Email" required className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent" placeholder="Your Email" />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="PhoneNumber_countrycodeval" className="block text-sm font-semibold text-gray-700 mb-2">Country Code</label>
                  <select id="PhoneNumber_countrycodeval" name="PhoneNumber_countrycodeval" required className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent">
                    <option value="+91">India (+91)</option>
                    <option value="+1">United States (+1)</option>
                    <option value="+44">United Kingdom (+44)</option>
                    <option value="+61">Australia (+61)</option>
                    <option value="+65">Singapore (+65)</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="PhoneNumber_countrycode" className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                  <input type="text" id="PhoneNumber_countrycode" name="PhoneNumber_countrycode" required className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent" placeholder="Number" />
                </div>
              </div>

              <div>
                <label htmlFor="FileUpload" className="block text-sm font-semibold text-gray-700 mb-2">Upload Resume</label>
                <input type="file" id="FileUpload" name="FileUpload" required className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white" />
              </div>

              <div>
                <label htmlFor="FileUpload1" className="block text-sm font-semibold text-gray-700 mb-2">Upload Cover Letter</label>
                <input type="file" id="FileUpload1" name="FileUpload1" required className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white" />
              </div>

              <div>
                <label htmlFor="TermsConditions" className="block text-sm font-semibold text-gray-700 mb-3">
                  Terms and Conditions *
                </label>
                <div className="text-sm text-gray-600 mb-2">By submitting this application, you agree to the processing of your personal data for recruitment purposes as per our <a href="/Privacy-Policy/" className="underline" target="_blank" rel="noreferrer">privacy policy</a>.</div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="TermsConditions" name="TermsConditions" required />
                  <label htmlFor="TermsConditions" className="text-gray-700">I accept the Terms and Conditions.</label>
                </div>
              </div>

              <button type="submit" className="w-full bg-gradient-to-r from-teal-500 to-blue-500 text-white py-4 px-8 rounded-xl font-semibold hover:from-teal-600 hover:to-blue-600 transition-all">Submit</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerApply;


