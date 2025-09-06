import { siteData } from "@/data/data";
import { BadgePercent } from "lucide-react";

export default function SponsorshipSection() {
  return (
    <section
      id="sponsors"
      className="mt-16 lg:mt-[72px] xl:mt-[72px] 2xl:mt-[72px] w-full p-10"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold uppercase text-gray-900">
          Sponsorship Opportunities
        </h2>
        <div className="mt-2 mb-6 w-24 h-1 bg-red-500 mx-auto rounded"></div>
        {/* <p className="text-gray-700 max-w-4xl mx-auto mb-10">
          The conference organizers are seeking sponsors and industrial support. We offer the best stage for the event in terms of additional activities. Sponsorship of RAISE 2023 provides a sponsor or an organization with a unique opportunity to increase its visibility and product awareness within a highly specialized and influential community. The organizers present a wide spectrum of sponsorship. Sponsorship for the conference attract 18% GST extra.
        </p> */}

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {siteData.sponsors.map((sponsor, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 p-6 flex flex-col"
            >
              {/* Icon */}
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-200 text-blue-700 font-bold text-xl">
                <BadgePercent />
              </div>
              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900">
                {sponsor.title}
              </h3>
              <p className="text-sm font-semibold text-gray-700 mb-4">
                {sponsor.price}
              </p>
              {/* Benefits */}
              <ul className="list-disc list-inside text-left text-gray-600 text-sm space-y-2">
                {sponsor.benefits.map((benefit, i) => (
                  <li key={i}>{benefit}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
