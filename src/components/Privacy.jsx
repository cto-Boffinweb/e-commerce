import React from "react";

export default function Privacy() {
  return (
    <div style={{ maxWidth: "900px", margin: "40px auto", lineHeight: "1.8", fontSize: "15px" }}>
      <div style={{ marginBottom: "25px" }}>
        <h2 style={{ fontSize: "20px", marginBottom: "10px", fontWeight: "600" }}>
          Privacy Policy
        </h2>
        <p>
          At Comero, we understand the importance of privacy and value the trust you place in us.
          This document outlines how we collect, handle, store, and safeguard your personal
          information when you use our website or engage with our services. By accessing Comero,
          you agree to the practices described in this Privacy Policy.
        </p>
      </div>

      {/* Section */}
      <div style={{ marginBottom: "30px" }}>
        <h3 style={{ fontSize: "17px", marginBottom: "8px", fontWeight: "600" }}>
          Information We Collect
        </h3>
        <p>
          When you interact with Comero, we collect information that helps us provide a smoother
          and more personalized shopping experience. This includes details you provide directly,
          such as your name, email address, phone number, delivery address, gender, age group,
          and payment details. We may also collect automatically generated data such as device
          information, IP address, browser type, location, and browsing activity across our
          platform. Information related to wishlist items, shopping behavior, recently viewed
          products, and interaction patterns may also be stored to improve your experience.
        </p>
        <p>
          In addition, certain optional information, such as style preferences, saved addresses,
          and communication choices, helps us tailor recommendations, offers, and personalized
          content.
        </p>
      </div>

      {/* Section */}
      <div style={{ marginBottom: "30px" }}>
        <h3 style={{ fontSize: "17px", marginBottom: "8px", fontWeight: "600" }}>
          How Your Information Is Used
        </h3>
        <p>
          The information collected enables us to enhance the overall functionality of Comero
          and provide services efficiently. Your details are used for order processing, payment
          confirmation, product delivery, order tracking, and communication regarding purchase
          updates. We also use this information to analyze customer behavior, improve website
          navigation, enhance product relevance, and refine service quality.
        </p>
        <p>
          Comero may use your information to send marketing content, personalized offers, and
          product suggestions based on your preferences and browsing habits. You may opt out of
          promotional communication at any time. Information may further be used to resolve
          disputes, address customer support queries, enforce policies, and prevent fraud or
          unauthorized activities on our platform.
        </p>
      </div>

      {/* Section */}
      <div style={{ marginBottom: "30px" }}>
        <h3 style={{ fontSize: "17px", marginBottom: "8px", fontWeight: "600" }}>
          Sharing of Your Information
        </h3>
        <p>
          Comero does not trade, rent, or sell your personal information to third parties.
          However, certain trusted service providers may access your information solely for the
          purpose of providing services on our behalf. These include logistics partners,
          courier services, payment gateways, fraud detection agencies, marketing platforms,
          analytics providers, warehouse partners, and customer support tools.
        </p>
        <p>
          All such partners operate under strict confidentiality agreements and follow strong
          data protection standards. Your information may also be shared for legal compliance,
          law enforcement requests, or to protect the rights and safety of Comero, its users,
          or the public.
        </p>
      </div>

      {/* Section */}
      <div style={{ marginBottom: "30px" }}>
        <h3 style={{ fontSize: "17px", marginBottom: "8px", fontWeight: "600" }}>
          Cookies and Tracking Technologies
        </h3>
        <p>
          Comero uses cookies, tracking pixels, tags, and similar technologies to understand user
          interaction and improve your experience. These tools help us remember your preferences,
          display relevant products, reduce loading time, and offer personalized suggestions.
          Cookies also help in analyzing traffic patterns, preventing security breaches, and
          enabling smoother navigation across the platform.
        </p>
        <p>
          You may disable cookies through your browser settings; however, certain sections of the
          website may not function optimally without them.
        </p>
      </div>

      {/* Section */}
      <div style={{ marginBottom: "30px" }}>
        <h3 style={{ fontSize: "17px", marginBottom: "8px", fontWeight: "600" }}>
          How We Protect Your Information
        </h3>
        <p>
          Comero implements industry-standard security measures to safeguard your personal data.
          These include encryption techniques, secure server infrastructure, controlled access
          protocols, multi-layer authentication, and regular monitoring to detect unauthorized
          usage. While no digital platform can guarantee absolute security, we continuously
          upgrade our systems to minimize potential risks and ensure strong data protection.
        </p>
      </div>

      {/* Section */}
      <div style={{ marginBottom: "30px" }}>
        <h3 style={{ fontSize: "17px", marginBottom: "8px", fontWeight: "600" }}>
          Your Rights and Choices
        </h3>
        <p>
          You have full control over how your personal information is used. You may update,
          modify, or delete your account details at any time through the profile section. You may
          also request access to your stored data or choose to restrict certain processing
          activities such as promotional communication. Users may opt out of marketing messages
          by using the unsubscribe option or by modifying communication preferences.
        </p>
      </div>

      {/* Section */}
      <div style={{ marginBottom: "30px" }}>
        <h3 style={{ fontSize: "17px", marginBottom: "8px", fontWeight: "600" }}>
          Data Retention
        </h3>
        <p>
          Comero retains your personal information only for as long as necessary for legal,
          operational, and business requirements. Once data is no longer required for any active
          purpose, it is securely removed, anonymized, or archived under strict protection
          policies.
        </p>
      </div>

      {/* Section */}
      <div style={{ marginBottom: "30px" }}>
        <h3 style={{ fontSize: "17px", marginBottom: "8px", fontWeight: "600" }}>
          Children’s Privacy
        </h3>
        <p>
          Comero does not knowingly collect personal data from individuals under the age of 13.
          If any such data is identified, it is deleted promptly. Parents or guardians who believe
          such information has been shared may contact us for immediate removal.
        </p>
      </div>

      {/* Section */}
      <div style={{ marginBottom: "30px" }}>
        <h3 style={{ fontSize: "17px", marginBottom: "8px", fontWeight: "600" }}>
          Changes to This Policy
        </h3>
        <p>
          As we enhance our services, this Privacy Policy may be updated periodically. All changes
          will be posted on this page with a revised effective date. Continued use of the platform
          after updates implies acceptance of the revised policy.
        </p>
      </div>

      {/* Section */}
      <div style={{ marginBottom: "50px" }}>
        <h3 style={{ fontSize: "17px", marginBottom: "8px", fontWeight: "600" }}>
          Contact Us
        </h3>
        <p>
          For questions, concerns, or requests related to this Privacy Policy, please contact us at:
          <br /><br />
          <strong>Email:</strong> support@comero.com <br />
          <strong>Address:</strong> Comero Customer Support, India
        </p>
      </div>

      <p style={{ opacity: 0.6, fontSize: "14px" }}>
        Last Updated: {new Date().toLocaleDateString()}
      </p>
    </div>
  );
}
