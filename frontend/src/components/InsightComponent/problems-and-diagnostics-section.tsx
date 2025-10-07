import React from 'react';

export function ProblemsAndDiagnosticsSection() {
  const items = [
    {
      title: 'Security Gaps',
      desc: 'Unpatched endpoints, weak access controls, and compliance drift leading to audit failures.',
    },
    {
      title: 'Cloud Cost Overruns',
      desc: 'Underutilized resources, missing budgets, and poor monitoring driving unexpected bills.',
    },
    {
      title: 'Network Bottlenecks',
      desc: 'Misconfigured routing, legacy hardware, and lack of QoS degrading user experience.',
    },
    {
      title: 'Data Quality Issues',
      desc: 'Fragmented sources, inconsistent schemas, and stale pipelines hurting analytics outcomes.',
    },
  ];

  return (
    <section id="problems_and_diagnostics" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">Problems & Diagnostics</h2>
          <p className="mt-3 text-gray-600 max-w-3xl">
            A quick look at common technology problems we help diagnose and resolve across security, cloud, networking, and data.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.title} className="rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
              <div className="mt-4">
                <a href="/insights#success-stories" className="text-red-600 font-medium hover:underline">See related case studies</a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-between bg-gray-50 border border-gray-200 rounded-xl p-6">
          <p className="text-gray-700">
            Not sure where to start? Get a diagnostic review tailored to your environment.
          </p>
          <a href="/contactus" className="px-5 py-2.5 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700">Request Consultation</a>
        </div>
      </div>
    </section>
  );
}