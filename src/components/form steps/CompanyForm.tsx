import { InputStyled } from "../styles/InputStyled"
import { FormWrapper } from "../styles/FormWrapper"

type CompanyData = {
  title: string
  companyCode: string
  companyName: string
  companyRegistration: string
}

type CompanyFormProps = CompanyData & {
  updateFields: (fields: Partial<CompanyData>) => void
}

export function CompanyForm({
  title,
  companyCode,
  companyName,
  companyRegistration,
  updateFields,
}: CompanyFormProps) {

  return (
    <FormWrapper>
      <h2>{title}</h2>
      <InputStyled>
        <input
          type="text"
          value={companyName}
          onChange={e => updateFields({ companyName: e.target.value })}
          />
        <label>Company name</label>
      </InputStyled>

      <InputStyled>
        <input
          type="text"
          value={companyCode}
          onChange={e => updateFields({ companyCode: e.target.value })}
          />
        <label>Company code</label>
      </InputStyled>

      <InputStyled>
        <input
          type="text"
          value={companyRegistration}
          onChange={e => updateFields({ companyRegistration: e.target.value })}
          />
        <label>Country of registration</label>
      </InputStyled>
    </FormWrapper>
  )
}
