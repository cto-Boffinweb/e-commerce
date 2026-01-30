import { useEffect } from "react";

export default function GeneralInfo({
	formValues,
	setFormValues,
	errors = {},
	variationData = [],
}) {

	const totalStock = variationData.reduce(
  (sum, v) => sum + Number(v.stock || 0),
  0
);

	// Calculate total stock from variations if product is variable
	useEffect(() => {
  if (formValues.productType === "variable" && variationData.length > 0) {
    setFormValues(prev => ({
      ...prev,
      stockQty: variationData.reduce((sum, v) => sum + Number(v.stock || 0), 0)
    }));
  }
}, [variationData]);

	const isEditable =
		formValues.manageStock === "yes" && formValues.productType === "simple";

	const showDeliveryCharge = formValues.isDeliveryCharge === "yes";

	return (
		<>
			<div className='row'>
				<div className='col-md-6 mb-3'>
					<label>Product Code</label>
					<input
						type='text'
						className='form-control'
						value={formValues.mainProductCode || ""}
						onChange={(e) =>
							setFormValues({ ...formValues, mainProductCode: e.target.value })
						}
					/>
					{errors.productCode && (
						<p className='text-danger'>{errors.productCode}</p>
					)}
				</div>

				<div className='col-md-6 mb-3'>
					<label>SKU</label>
					<input
						type='text'
						className='form-control'
						value={formValues.mainProductSKU || ""}
						onChange={(e) =>
							setFormValues({ ...formValues, mainProductSKU: e.target.value })
						}
					/>
					{errors.sku && <p className='text-danger'>{errors.sku}</p>}
				</div>
			</div>

			<div className='row'>
				<div className='col-md-6 mb-3'>
					<label>Manage Stock?</label>
					<select
						className='form-control'
						value={formValues.manageStock || ""}
						onChange={(e) =>
							setFormValues({ ...formValues, manageStock: e.target.value })
						}>
						<option value=''>Select</option>
						<option value='yes'>Yes</option>
						<option value='no'>No</option>
					</select>
				</div>

				<div className='col-md-6 mb-3'>
					<label>Stock Quantity</label>
					<input
						type='number'
						className='form-control'
						value={isEditable ? formValues.stockQty || "" : totalStock}
						readOnly={!isEditable}
						onChange={(e) =>
							isEditable &&
							setFormValues({ ...formValues, stockQty: e.target.value })
						}
					/>
					<small className='text-muted'>
						{formValues.manageStock === "no"
							? "Total stock (read only)"
							: formValues.productType === "variable"
								? "Calculated from variations"
								: "Enter stock manually"}
					</small>
				</div>
			</div>

			<div className='row'>
				<div className='col-md-6 mb-3'>
					<label>Is Delivery Charge?</label>
					<select
						className='form-control'
						value={formValues.isDeliveryCharge || ""}
						onChange={(e) =>
  setFormValues({
    ...formValues,
    isDeliveryCharge: e.target.value,
    deliveryCharge: e.target.value === "no" ? 0 : formValues.deliveryCharge,
  })
}
>
						<option value=''>Select</option>
						<option value='yes'>Yes</option>
						<option value='no'>No</option>
					</select>
				</div>

				{showDeliveryCharge && (
					<div className='col-md-6 mb-3'>
						<label>Delivery Charge</label>
						<input
							type='number'
							className='form-control'
							value={formValues.deliveryCharge || ""}
							onChange={(e) =>
								setFormValues({
									...formValues,
    deliveryCharge: Number(e.target.value),
								})
							}
						/>
					</div>
				)}
			</div>
		</>
	);
}
