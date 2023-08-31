import { InputStyled } from "../styles/InputStyled"
import { FormWrapper } from "../styles/FormWrapper"

type ProductInformationData = {
  title: string
  productTitle: string
  productDescription: string
  productPrice: string
  productWeight: string
}

type ProductInformationFormProps = ProductInformationData & {
  updateFields: (fields: Partial<ProductInformationData>) => void
}

export function ProductInformationForm({
  title,
  productTitle,
  productDescription,
  productPrice,
  productWeight,
  updateFields,
}: ProductInformationFormProps) {
  return (
    <FormWrapper>
      <h2>{title}</h2>
      <InputStyled>
        <input
          required
          type="text"
          value={productTitle}
          onChange={e => updateFields({ productTitle: e.target.value })}
          />
        <label>Product title</label>
      </InputStyled>
      <InputStyled>
        <textarea
          placeholder='.'
          value={productDescription}
          onChange={e => updateFields({ productDescription: e.target.value })}
          ></textarea>
        <label>Product description</label>
      </InputStyled>
      <div className="product-input--price-weight">
        <InputStyled>
          <input
            type="text"
            value={productPrice}
            onChange={e => updateFields({ productPrice: e.target.value })}
            />
          <label>Product price, €</label>
        </InputStyled>
        <InputStyled>
          <input
            type="text"
            value={productWeight}
            onChange={e => updateFields({ productWeight: e.target.value })}
            />
          <label>Product weigth, kg</label>
        </InputStyled>
      </div>
    </FormWrapper>
  )
}
