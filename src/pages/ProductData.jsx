import React from "react";
import LinkedProducts from "./LinkedProducts";
import AttributeInput from "./AttributeInput";
import VariationTable from "./VariationTable";
import GeneralInfo from "./GeneralInfo";
import ShippingInfo from "./ShippingInfo";

export default function ProductData({
  formValues = {},
  setFormValues,
  errors = {},
  generateVariations,
  variations,
  setVariations,         
  variationData,          
  setVariationData,       
  handleAddAttribute,
  handleRemoveAttribute,
  allProducts = [],
}) {

	return (
		<div className='container ' style={{ color: "grey", fontSize: "14px" }}>
			<div className='row '>
				{/* LEFT SIDE  Tabs */}
				<div className='card p-0'>
					<div className='card-header '>
						<h5>Product data</h5>
						{/* Tabs nav */}
						<ul className='nav nav-tabs card-header-tabs '>
							<li className='nav-item'>
								<a
									href='#shipping'
									className='nav-link active'
									data-bs-toggle='tab'>
									Shipping
								</a>
							</li>
							<li className='nav-item'>
								<a href='#linked' className='nav-link' data-bs-toggle='tab'>
									Linked products
								</a>
							</li>
							<li className='nav-item'>
								<a href='#attributes' className='nav-link' data-bs-toggle='tab'>
									Attributes
								</a>
							</li>
							<li className='nav-item'>
								<a href='#variations' className='nav-link' data-bs-toggle='tab'>
									Variations
								</a>
							</li>
							<li className='nav-item'>
								<a href='#general' className='nav-link' data-bs-toggle='tab'>
									General
								</a>
							</li>
						</ul>
					</div>

					<div className='card-body tab-content'>
						<div className="tab-pane fade show active" id="shipping">
  <ShippingInfo
    formValues={formValues}
    setFormValues={setFormValues}
    errors={errors}
  />
</div>

						<div className='tab-pane fade text-secondary' id='linked'>
							<h5 className='mt-2'>Upsells (products IDs)</h5>
							<LinkedProducts
								formValues={formValues}
								setFormValues={setFormValues}
								allProducts={allProducts}
							/>
						</div>

						{/*  Inside Attributes Tab */}
						<div className="tab-pane fade text-secondary" id="attributes">
  <AttributeInput
  attributes={formValues.attributes || []}
  onAdd={handleAddAttribute}
  onRemove={handleRemoveAttribute}
/>

</div>


{/* Inside Variations tab */}
<div className="tab-pane fade text-secondary" id="variations">
  <VariationTable
    attributes={formValues.attributes}
    variations={variations}
    setVariations={setVariations}
    variationData={variationData}
    setVariationData={setVariationData}
    mainProductSKU={formValues.mainProductSKU}
    mainProductCode={formValues.mainProductCode}
    generateVariations={generateVariations}
  />


</div>


						<div className="tab-pane fade text-secondary" id="general">
  <GeneralInfo
    formValues={formValues}
    setFormValues={setFormValues}
    errors={errors}
	  variationData={variationData} 

  />
</div>

					</div>
				</div>
			</div>
			<style>
				{`
      
      .nav-tabs .nav-link {
  color: grey !important;
  text-decoration: none !important;

}  
        .nav-tabs .nav-link.active {
  color: black !important;
    text-decoration: none !important;

}
    .nav-tabs .nav-link:hover{
      color: black !important;

    }
        `}
			</style>
		</div>
	);
}
