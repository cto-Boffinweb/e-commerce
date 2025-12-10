import React from "react";
import { Link } from "react-router-dom";

export default function Return() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="row bg-light">
        <div
          className="col-sm-10 mx-auto"
          style={{ fontSize: "14px", color: "gray", padding: "10px 0" }}
        >
          <Link to="/">Home</Link> / <Link to="/return">Return Policy</Link>
        </div>
      </div>

      <div className="container" style={{ paddingTop: "100px", paddingBottom: "50px" }}>
        <div className="row">

          {/* Left Sidebar */}
          <aside className="col-lg-3 d-none d-lg-block">
            <div className="position-sticky" style={{ top: "100px" }}>
              <h5 className="mb-3">Sections</h5>
              <ul className="list-unstyled">
                {[
                  "General Policy",
                  "Return Conditions",
                  "Eligible Items",
                  "How to Return",
                  "Exchange Policy",
                  "Refund Process",
                  "Quality Check",
                  "Order Cancellation",
                  "FAQs",
                  "Support"
                ].map((item, index) => (
                  <li key={index} className="mb-2">{item}</li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Main Content */}
          <main className="col-lg-9 col-12">
            <h1 className="fw-bold mb-4">Return, Exchange & Refund Policy</h1>
            <p className="text-muted mb-5">
              Everything you need to know about returning, exchanging, or requesting a refund for your order.
            </p>

            {/* Sections */}
            {[
              {
                title: "1. General Return Policy Overview",
                items: [
                  "Return window: 7–10 days from delivery.",
                  "Product must be in original condition with all tags and packaging.",
                  "Return pickup is free unless mentioned otherwise.",
                  "Replacement depends on stock availability.",
                  "Full refund after quality inspection."
                ]
              },
              {
                title: "2. Return Conditions",
                items: [
                  "Not used, washed, or stained.",
                  "All labels and packaging intact.",
                  "Include all accessories.",
                  "Return in same box/package.",
                  "Misused items not eligible."
                ]
              },
              {
                title: "3. Eligible & Non-Eligible Items",
                items: [
                  "Eligible: Clothing, shoes, accessories, electronics, home décor, sealed personal care products, incorrect/damaged products.",
                  "Non-Returnable: Innerwear, swimwear, socks, groceries, personalized items, gift cards, items with missing tags or damaged packaging."
                ]
              },
              {
                title: "4. How to Initiate a Return",
                items: [
                  "Go to Account → Orders.",
                  "Select item → “Return / Replace”.",
                  "Choose reason, upload photos if needed.",
                  "Select refund or replacement.",
                  "Pickup agent collects product."
                ]
              },
              {
                title: "5. Exchange Policy",
                items: [
                  "For size, color, or defective items.",
                  "Depends on availability.",
                  "One exchange per product."
                ]
              },
              {
                title: "6. Refund Process & Timelines",
                items: [
                  "UPI / Wallet: 24–48 hours",
                  "Bank Transfer: 3–5 business days",
                  "Credit/Debit Card: 5–7 business days",
                  "COD: Refund to bank/wallet"
                ]
              },
              {
                title: "7. Quality Check (QC)",
                items: [
                  "No signs of use or damage",
                  "No stains or smells",
                  "All accessories intact",
                  "No torn packaging or missing tags"
                ]
              },
              {
                title: "8. Order Cancellation",
                items: [
                  "Cancel only before shipping.",
                  "After shipping, return is possible but not cancellation.",
                  "Prepaid order cancellations refunded instantly."
                ]
              },
              {
                title: "9. FAQs",
                items: [
                  "Q: Do I need the original packaging? A: Yes, mandatory.",
                  "Q: Pickup agent rejects item? A: May be QC issue. Contact support.",
                  "Q: Can I change refund method? A: Yes, before QC approval.",
                  "Q: How many exchanges allowed? A: One per product."
                ]
              },
              {
                title: "10. Customer Support",
                items: [
                  "Email: support@yourbrand.com",
                  "Phone: +91 12345 67890",
                  "Live Chat: 24/7",
                  "Response: 2–6 hours"
                ]
              }
            ].map((section, idx) => (
              <section key={idx} className="mb-5">
                <h3 className="mb-3">{section.title}</h3>
                <ul>
                  {section.items.map((item, i) => (
                    <li key={i} className="mb-1">{item}</li>
                  ))}
                </ul>
              </section>
            ))}
          </main>
        </div>
      </div>
    </>
  );
}
