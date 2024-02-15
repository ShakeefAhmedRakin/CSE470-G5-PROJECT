import { useState } from "react";

const Support = () => {
  // State to manage which FAQ item is currently open
  const [activeIndex, setActiveIndex] = useState(null);

  // Function to toggle the visibility of FAQ items
  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  // FAQ data
  const faqData = [
    {
      question: "How can I book a bus ticket?",
      answer:
        "To book a bus ticket, you can visit our website or mobile app, enter your desired route, select your preferred bus, choose your seats, and proceed with the payment.",
    },
    {
      question: "What payment options are available?",
      answer:
        "We offer multiple payment options including credit/debit cards, net banking, and mobile wallets for your convenience.",
    },
    {
      question: "Can I cancel my bus ticket?",
      answer:
        "Yes, you can cancel your bus ticket. However, cancellation policies vary depending on the bus operator and timing of cancellation. Please refer to our cancellation policy or contact customer support for more details.",
    },
    {
      question: "How do I retrieve my booking history?",
      answer:
        "You can access your booking history by logging into your account on our website or mobile app. Your booking history will display all your past and upcoming trips.",
    },
    {
      question: "Is it possible to change the boarding point after booking?",
      answer:
        "In most cases, you can change your boarding point before the scheduled departure time, subject to availability and the policies of the bus operator. Please check with customer support for assistance.",
    },
    {
      question: "What if I miss my bus?",
      answer:
        "If you miss your bus, please contact customer support as soon as possible. Depending on availability and the policies of the bus operator, alternative arrangements may be possible.",
    },
    {
      question: "How can I provide feedback about my journey?",
      answer:
        "We welcome your feedback! You can provide feedback through our website, mobile app, or by contacting our customer support team. Your input helps us improve our services.",
    },
  ];

  return (
    <>
      <div className="min-h-screen mx-24 ">
        <div className="mb-6" data-aos="fade-up" data-aos-delay="50">
          {/* CODE HERE */}
          <h1 className="text-3xl font-bold text-center mb-10">
            Frequently Asked Questions
          </h1>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div className="border border-gray-100 rounded-lg" key={index}>
                <div
                  className="flex justify-between items-center px-6 py-5 cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <div>
                    <h1 className="font-bold">{faq.question}</h1>
                  </div>
                  <svg
                    className={`w-7 h-7 transition-transform ${
                      activeIndex === index ? "transform rotate-90" : ""
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                {activeIndex === index && (
                  <div className="px-6 py-4">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Support;
