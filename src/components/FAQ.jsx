import React from 'react'
import { Link } from 'react-router-dom'

export default function FAQ() {
  return (
    <div>
       <div className="row bg-light">
<div className="col-sm-10 mx-auto py-2 " style={{fontSize:'14px'}}>
    <Link to='/'>Home</Link>  /  <Link to='/faq'>FAQ's</Link>
</div>
</div>
<div className="row my-5">
    <div className="col-sm-10 mx-auto bg-light py-3">
        <h5 className='text-center'>▣ Fquently Asked Questions</h5>
    </div>
    <div className="row">
<div className="col-sm-10 mx-auto my-3">


    <div className="container">
    <div class="accordion" id="myAccordion">

  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed custom-acc-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
<h6>What Shipping Methods are Available?</h6>      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#myAccordion">
      <div class="accordion-body">
Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed custom-acc-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
<h6>What are shipping times and costs? </h6>    </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#myAccordion">
      <div class="accordion-body">
Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed custom-acc-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
<h6>What payment methods can I use?</h6>      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#myAccordion">
      <div class="accordion-body">
        <ul>
<li>Credit Card: Visa, MasterCard, Discover, American Express, JCB, Visa Electron. The total will be charged to your card when the order is shipped.</li>
Comero features a Fast Checkout option, allowing you to securely save your credit card details so that you don't have to re-enter them for future purchases.
<li>PayPal: Shop easily online without having to enter your credit card details on the website.Your account will be charged once the order is completed. To register for a PayPal account, visit the website paypal.com.</li>
<li>Credit Card: Visa, MasterCard, Discover, American Express, JCB, Visa Electron. The total will be charged to your card when the order is shipped </li>  </ul>   </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed custom-acc-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
<h6>What Shipping Methods are Available?</h6>      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#myAccordion">
      <div class="accordion-body">
Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed custom-acc-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
<h6>What are shipping times and costs? </h6>    </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#myAccordion">
      <div class="accordion-body">
Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed custom-acc-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
<h6>What payment methods can I use?</h6>      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#myAccordion">
      <div class="accordion-body">
        <ul>
<li>Credit Card: Visa, MasterCard, Discover, American Express, JCB, Visa Electron. The total will be charged to your card when the order is shipped.</li>
Comero features a Fast Checkout option, allowing you to securely save your credit card details so that you don't have to re-enter them for future purchases.
<li>PayPal: Shop easily online without having to enter your credit card details on the website.Your account will be charged once the order is completed. To register for a PayPal account, visit the website paypal.com.</li>
<li>Credit Card: Visa, MasterCard, Discover, American Express, JCB, Visa Electron. The total will be charged to your card when the order is shipped </li>  </ul>   </div>
    </div>
  </div>
</div>

</div>
</div>
</div>
    </div>
<style>
    {`
.accordion-button::after {
  display: none !important;
}

.custom-acc-btn {
  position: relative;
  padding-right: 40px;
}

.custom-acc-btn::before {
  content: "+";
  position: absolute;
  right: 20px;
  font-size: 24px;
  font-weight: bold;
  transition: 0.3s;
}

.custom-acc-btn:not(.collapsed)::before {
  content: "−";
}
.accordion-button:focus {
  box-shadow: none !important;
}

.accordion-button:not(.collapsed) {
  background-color: transparent !important;
  box-shadow: none !important;
  color: inherit !important;
  border: none !important;
}

.accordion-button:hover {
  background-color: transparent !important;
}
.accordion-body{
font-size:14px;
color:grey;
}

    `}

</style>
    </div>
  )
}
